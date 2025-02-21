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
      className={"h-screen bg-background bg-cover text-foreground"}
      style={{ backgroundImage: `url(${Fondo})` }}
    >
      <NeoHeader onMenuClick={toggleSidebar} />
      <NeoSidebar isOpen={isSidebarOpen} onClose={closeSidebar} />

      <main className="pt-20 pb-8 px-0 md:px-4 lg:pl-72 w-full h-full">
        <div className="container mx-auto w-full h-full flex items-center">
          {children}
        </div>
      </main>
    </div>
  );
}
