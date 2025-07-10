"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion"; // Importamos motion de Framer Motion
import Image from "next/image";
import { JSX } from "react/jsx-runtime";

const Preloader = () => {
  const [loading, setLoading] = useState(true);
  const [stars, setStars] = useState<JSX.Element[]>([]); // Para almacenar las estrellas generadas
  const [direction, setDirection] = useState<string>(""); // Dirección aleatoria para el movimiento

  useEffect(() => {
    // Desaparece el preloader después de 10 segundos
    const timer = setTimeout(() => {
      setLoading(false);
    }, 10000); // 10 segundos

    // Generar estrellas aleatorias solo en el cliente
    const generateStars = () => {
      const starsArray = [];
      const numberOfStars = 100; // Número de estrellas

      for (let i = 0; i < numberOfStars; i++) {
        const size = Math.random() * 2 + 1; // Tamaño aleatorio de 1 a 3 px
        const top = Math.random() * 100; // Posición aleatoria en Y
        const left = Math.random() * 100; // Posición aleatoria en X
        const animationDelay = Math.random() * 3 + "s"; // Tiempo de retardo para parpadeo

        starsArray.push(
          <div
            key={i}
            className="star"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              top: `${top}%`,
              left: `${left}%`,
              animationDelay,
            }}
          />
        );
      }

      setStars(starsArray);
    };

    generateStars(); // Generar las estrellas al cargar el componente

    // Generar dirección aleatoria para el movimiento
    const randomDirection = () => {
      const directions = ["left",  "top", "bottom"];
      const randomDir =
        directions[Math.floor(Math.random() * directions.length)];
      setDirection(randomDir);
    };

    randomDirection(); // Llamar a la función para asignar la dirección

    // Limpieza del temporizador
    return () => clearTimeout(timer);
  }, []);

  if (!loading) {
    return null; // Una vez que se haya completado, se oculta el Preloader
  }

  return (
    <div className="fixed top-0 left-0 w-full h-full z-50">
      {/* Contenedor que incluye el fondo y la imagen que se desplazan juntos */}
      <motion.div
        className="w-full h-full flex"
        initial={{ x: 0 }} // Comienza en el centro
        animate={{
          x:
            direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
          y:
            direction === "top" ? "-100%" : direction === "bottom" ? "100%" : 0,
        }} // Se desplaza aleatoriamente
        transition={{
          duration: 5, // Duración de la animación
          delay: 4, // Retraso de 4 segundos antes de iniciar la animación
        }}
      >
        {/* Parte izquierda con fondo de estrellas parpadeando aleatoriamente */}
        <div className="w-full h-full  bg-gradient-to-t  backdrop-blur-lg flex justify-center  items-center relative">
          {/* Fondo de estrellas generado con divs */}
          <div className="absolute inset-0">{stars}</div>

          {/* Contenedor de imágenes centradas una al lado de la otra */}
          <div className="md:flex  hidden justify-center items-center ">
            <Image src="/names.png" alt="Logo" width={580} height={520} />
          </div>

           <div className="md:hidden block justify-center items-center ">
            <Image src="/namesMobile.png" alt="Logo" width={580} height={520} />
          </div>

          {/* Barra de carga estilo Minecraft debajo de la imagen */}
          <div className="absolute bottom-10 w-64 h-2 bg-gray-800 rounded-full">
            <motion.div
              className="w-0 h-full bg-red-500 rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 3 }} // Duración de la animación de carga
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Preloader;
