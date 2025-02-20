
import { useState } from "react";
import { Menu, X } from "lucide-react";
import {
  Folder,
  Activity,
  VideoIcon,
  Users,
  GraduationCap,
  FileCheck,
  Book,
} from "lucide-react";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function NeoSidebar({ isOpen, onClose }: SidebarProps) {
  const menuItems = [
    { icon: Folder, text: "Mi escritorio", href: "/" },
    { icon: Activity, text: "Actividades", href: "/actividades" },
    { icon: VideoIcon, text: "Entrenamiento", href: "/entrenamiento" },
    { icon: Users, text: "En Directo", href: "/en-directo" },
    { icon: GraduationCap, text: "Clases", href: "/clases" },
    { icon: FileCheck, text: "Examenes", href: "/examenes" },
    { icon: Book, text: "Temario", href: "/temario" },
  ];

  return (
    <>
      {/* Desktop Sidebar - Siempre visible en lg */}
      <div className="hidden lg:flex fixed inset-y-0 left-0 w-64">
        <div className="flex-1 flex flex-col min-h-0 bg-black/80 backdrop-blur-xl border-r border-neon-cyan/30 clip-path-hex">
          <div className="flex-1 flex flex-col pt-20 pb-4">
            <nav className="mt-5 flex-1 px-4 space-y-4">
              {menuItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="flex items-center space-x-4 px-4 py-3 rounded-lg cyber-card group"
                >
                  <item.icon className="w-6 h-6 text-neon-cyan group-hover:text-white transition-colors" />
                  <span className="text-neon-cyan group-hover:text-white transition-colors">
                    {item.text}
                  </span>
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar - Overlay */}
      <div
        className={`lg:hidden fixed inset-0 z-50 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
        <div 
          className={`absolute inset-y-0 left-0 w-64 bg-black/80 backdrop-blur-xl border-r border-neon-cyan/30 clip-path-hex transform transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex justify-end p-4">
            <button onClick={onClose} className="text-neon-cyan hover:text-white">
              <X size={24} />
            </button>
          </div>

          <nav className="px-4 py-6 space-y-4">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="flex items-center space-x-4 px-4 py-3 rounded-lg cyber-card group"
              >
                <item.icon className="w-6 h-6 text-neon-cyan group-hover:text-white transition-colors" />
                <span className="text-neon-cyan group-hover:text-white transition-colors">
                  {item.text}
                </span>
              </a>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
}
