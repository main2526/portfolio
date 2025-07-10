"use client";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { DialogTitle } from "@/components/ui/dialog"; // Importa DialogTitle
import { VisuallyHidden } from "@radix-ui/react-visually-hidden"; // Importa VisuallyHidden
import { Home, User, Briefcase, SidebarOpen, Contact2Icon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const navItems = [
  { name: "House", href: "/", icon: Home },
  { name: "Skills", href: "/skills", icon: User },
  { name: "Projects", href: "/projects", icon: Briefcase },
  { name: "Contact", href: "/contact", icon: Contact2Icon },
];

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Sidebar en móviles con Sheet (Drawer) */}
      <Sheet open={open} onOpenChange={setOpen}  >
        <SheetTrigger asChild>
          <Button variant="ghost" className=" fixed top-4 left-4 z-20">
            <SidebarOpen className="w-6 h-6 " />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-64 bg-black text-white">
          {/* Agregamos DialogTitle con VisuallyHidden */}
          <VisuallyHidden>
            <DialogTitle>navegation</DialogTitle>
          </VisuallyHidden>
          <div className="flex items-center">
            <h2 className="text-xl font-bold mb-6">BootsDev</h2>
            <h2 className="text-xl font-bold mb-6 text-red-500">-X</h2>
          </div>
          <nav className="space-y-2">
            {navItems.map(({ name, href, icon: Icon }) => (
              <Link
                key={name}
                href={href}
                className="flex items-center space-x-3 p-2 rounded-md hover:bg-gray-800 transition"
                onClick={() => setOpen(false)}
              >
                <Icon className="w-5 h-5" />
                <span>{name}</span>
              </Link>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    </>
  );
}
