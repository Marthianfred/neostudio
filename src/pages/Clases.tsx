
import { NeoHeader } from "@/components/NeoHeader";
import { NeoSidebar } from "@/components/NeoSidebar";
import { useState } from "react";
import Fondo from "../../public/Fondo.png";

const Clases = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <div
      className="min-h-screen bg-background bg-cover text-foreground"
      style={{ backgroundImage: `url(${Fondo})` }}
    >
      <NeoHeader onMenuClick={toggleSidebar} />
      <NeoSidebar isOpen={isSidebarOpen} onClose={closeSidebar} />

      <main className="pt-20 pb-8 px-4 lg:pl-72">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8 neon-text">Clases</h1>
          <div className="cyber-card p-6">
            <p className="text-neon-cyan">Contenido de Clases próximamente...</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Clases;
