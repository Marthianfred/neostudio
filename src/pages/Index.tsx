
import { useState } from "react";
import { NeoSidebar } from "@/components/NeoSidebar";
import { NeoHeader } from "@/components/NeoHeader";
import { NeoCalendar } from "@/components/NeoCalendar";
import Fondo from "../../public/Fondo.png";

const Index = () => {
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
          <NeoCalendar />
        </div>
      </main>
    </div>
  );
};

export default Index;
