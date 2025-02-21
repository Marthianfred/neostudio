import { NeoHeader } from "@/components/NeoHeader";
import { NeoSidebar } from "@/components/NeoSidebar";
import { useState } from "react";
import Fondo from "~/images/Fondo.png";
import FolderIcon from "~/images/FolderIcon.png";
import {
  Accordion,
  AccordionItem,
  AccordionContent,
  AccordionTrigger,
} from "@/components/ui/accordion";
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
        <div className="container cyber-card clip-path-hex-corners overflow-auto  mx-auto h-full">
          <div className="md:grid md:grid-cols-4 flex flex-wrap py-4 justify-center gap-4">
            {Array.from({ length: 10 }).map((_, index) => (
              <>
                <Accordion type="single" collapsible>
                  <AccordionItem
                    value="text"
                    content="content"
                    children={
                      <>
                        <AccordionTrigger>
                          <div className="cyber-card clip-path-hex-corners flex items-center justify-between gap-4 p-6">
                            <img
                              src={FolderIcon}
                              alt="FolderIcon"
                              className="w-[35px] h-[30px]"
                            />
                            <p className="text-neon-cyan">Prueba {index}</p>
                            <svg
                              width="15"
                              height="15"
                              viewBox="0 0 15 15"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z"
                                fill="currentColor"
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                              ></path>
                            </svg>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent
                          children={
                            <>
                              <p className="text-white">
                                Contenido de la carpeta
                              </p>
                            </>
                          }
                        />
                      </>
                    }
                  />
                  {/* </AccordionTrigger> */}
                </Accordion>
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Temario;
