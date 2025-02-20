
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
    { icon: Folder, text: "Mi escritorio", href: "#" },
    { icon: Activity, text: "Actividades", href: "#" },
    { icon: VideoIcon, text: "Entrenamiento", href: "#" },
    { icon: Users, text: "En Directo", href: "#" },
    { icon: GraduationCap, text: "Clases", href: "#" },
    { icon: FileCheck, text: "Examenes", href: "#" },
    { icon: Book, text: "Temario", href: "#" },
  ];

  return (
    <div
      className={`fixed inset-y-0 left-0 z-50 w-64 bg-black/80 backdrop-blur-xl transform transition-transform duration-300 ease-in-out border-r border-neon-cyan/30 ${
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
  );
}
