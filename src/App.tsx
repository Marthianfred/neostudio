
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Actividades from "./pages/Actividades";
import Entrenamiento from "./pages/Entrenamiento";
import EnDirecto from "./pages/EnDirecto";
import Clases from "./pages/Clases";
import Examenes from "./pages/Examenes";
import Temario from "./pages/Temario";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/actividades" element={<Actividades />} />
          <Route path="/entrenamiento" element={<Entrenamiento />} />
          <Route path="/en-directo" element={<EnDirecto />} />
          <Route path="/clases" element={<Clases />} />
          <Route path="/examenes" element={<Examenes />} />
          <Route path="/temario" element={<Temario />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
