import { ReactNode, useState } from "react";
import { NeoHeader } from "@/components/NeoHeader";
import { NeoSidebar } from "@/components/NeoSidebar";
import Fondo from "~/images/Fondo.png";

interface NeoLayoutProps {
  children: ReactNode;
}

export function NeoLayout({ children }: NeoLayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <div
      className={"min-h-screen bg-background bg-cover text-foreground"}
      style={{ backgroundImage: `url(${Fondo})` }}
    >
      <NeoHeader onMenuClick={toggleSidebar} />
      <NeoSidebar isOpen={isSidebarOpen} onClose={closeSidebar} />

      <main className="pt-20 pb-8 px-4 lg:pl-72">
        <div className="container mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
}
