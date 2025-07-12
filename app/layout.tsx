import type { Metadata } from "next";
import { Onest } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/app-sidebar";
import Preloader from "@/components/Preloader"; // Importamos el Preloader

const onest = Onest({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BootsDev-X",
  description: "My profesional portfolio created with ❤️",
  icons: "/icon.png",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="es">
      <body className={`${onest.className}`}>
        {/* Agregar el Preloader aquí */}

      
          {/* <Preloader /> */}

        {/* Sidebar */}
        <Sidebar />

        {/* El resto del contenido */}
        {children}
      </body>
    </html>
  );
}
