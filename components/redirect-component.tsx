import { useEffect, useState } from "react";
import { useRouter } from "next/navigation"; // Usamos el router del "App Router" en Next.js 13

export default function RedirectingComponent() {
  const [seconds, setSeconds] = useState(3);
  const router = useRouter();

  useEffect(() => {
    if (seconds === 0) {
      // Redirige a la página principal cuando el contador llegue a 0
      router.push("/projects");
    }

    const interval = setInterval(() => {
      setSeconds((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [seconds, router]);

  return (
    <section className="min-h-screen flex items-center justify-center bg-white text-black p-6">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4 p-2">Redirecting...</h1>
        <p className="text-2xl mb-6">this page will be available soon!</p>
        <div className="text-5xl font-extrabold text-gray-800">{seconds}</div>
      </div>
    </section>
  );
}
