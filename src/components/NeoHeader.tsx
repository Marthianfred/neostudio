
import { Menu, User } from "lucide-react";

interface HeaderProps {
  onMenuClick: () => void;
}

export function NeoHeader({ onMenuClick }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-black/50 backdrop-blur-md border-b border-neon-cyan/30">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <button
            onClick={onMenuClick}
            className="cyber-button !p-2 flex items-center"
          >
            <Menu className="w-6 h-6" />
          </button>
          <h1 className="text-2xl font-bold neon-text">NEOESTUDIO</h1>
        </div>
        
        <div className="flex items-center space-x-4">
          <button className="cyber-button flex items-center space-x-2">
            <User className="w-5 h-5" />
            <span>Usuario</span>
          </button>
        </div>
      </div>
    </header>
  );
}
