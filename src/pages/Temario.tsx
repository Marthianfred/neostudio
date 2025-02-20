import { NeoHeader } from "@/components/NeoHeader";
import { NeoSidebar } from "@/components/NeoSidebar";
import { useState } from "react";
import Fondo from "~/images/Fondo.png";

const Temario = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <div
      className="min-h-screen h-full bg-background  bg-cover text-foreground"
      style={{ backgroundImage: `url(${Fondo})` }}
    >
      <NeoHeader onMenuClick={toggleSidebar} />
      <NeoSidebar isOpen={isSidebarOpen} onClose={closeSidebar} />

      <div className="h-[100vh] overflow-hidden flex flex-col gap-2 pt-20 pb-8 px-4 lg:pl-72 ">
        <h1 className="text-4xl font-bold text-center neon-text">Temario</h1>
        <div className="container  overflow-auto  mx-auto h-full">
          <div className="md:grid flex flex-wrap  justify-center gap-4">
            <div className="cyber-card clip-path-hex-corners p-6">
              <p className="text-neon-cyan">
                Contenido de Temario próximamente...
              </p>
            </div>
            <div className="cyber-card clip-path-hex-corners p-6">
              <p className="text-neon-cyan">
                Contenido de Temario próximamente...
              </p>
            </div>
            <div className="cyber-card clip-path-hex-corners p-6">
              <p className="text-neon-cyan">
                Contenido de Temario próximamente...
              </p>
            </div>
            <div className="cyber-card clip-path-hex-corners p-6">
              <p className="text-neon-cyan">
                Contenido de Temario próximamente...
              </p>
            </div>
            <div className="cyber-card clip-path-hex-corners p-6">
              <p className="text-neon-cyan">
                Contenido de Temario próximamente...
              </p>
            </div>
            <div className="cyber-card clip-path-hex-corners p-6">
              <p className="text-neon-cyan">
                Contenido de Temario próximamente...
              </p>
            </div>
            <div className="cyber-card clip-path-hex-corners p-6">
              <p className="text-neon-cyan">
                Contenido de Temario próximamente...
              </p>
            </div>
            <div className="cyber-card clip-path-hex-corners p-6">
              <p className="text-neon-cyan">
                Contenido de Temario próximamente...
              </p>
            </div>
            <div className="cyber-card clip-path-hex-corners p-6">
              <p className="text-neon-cyan">
                Contenido de Temario próximamente...
              </p>
            </div>
            <div className="cyber-card clip-path-hex-corners p-6">
              <p className="text-neon-cyan">
                Contenido de Temario próximamente...
              </p>
            </div>
            <div className="cyber-card clip-path-hex-corners p-6">
              <p className="text-neon-cyan">
                Contenido de Temario próximamente...
              </p>
            </div>
            <div className="cyber-card clip-path-hex-corners p-6">
              <p className="text-neon-cyan">
                Contenido de Temario próximamente...
              </p>
            </div>{" "}
            <div className="cyber-card clip-path-hex-corners p-6">
              <p className="text-neon-cyan">
                Contenido de Temario próximamente...
              </p>
            </div>
            <div className="cyber-card clip-path-hex-corners p-6">
              <p className="text-neon-cyan">
                Contenido de Temario próximamente...
              </p>
            </div>
            <div className="cyber-card clip-path-hex-corners p-6">
              <p className="text-neon-cyan">
                Contenido de Temario próximamente...
              </p>
            </div>{" "}
            <div className="cyber-card clip-path-hex-corners p-6">
              <p className="text-neon-cyan">
                Contenido de Temario próximamente...
              </p>
            </div>
            <div className="cyber-card clip-path-hex-corners p-6">
              <p className="text-neon-cyan">
                Contenido de Temario próximamente...
              </p>
            </div>
            <div className="cyber-card clip-path-hex-corners p-6">
              <p className="text-neon-cyan">
                Contenido de Temario próximamente...
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Temario;
