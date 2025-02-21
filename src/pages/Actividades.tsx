import { NeoLayout } from "@/components/NeoLayout";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

const Actividades = () => {
  return (
    <NeoLayout>
      <div className="flex items-between gap-2 pt-2 justify-center w-full h-full flex-col">
        <h1 className="text-4xl font-bold text-center  neon-text">
          Actividades
        </h1>
        <div className="clip-path-hex-corners grow bg-black/30 backdrop-blur-sm border border-neon-cyan/30 p-8">
          <Carousel className="h-full">
            <CarouselContent className="h-full">
              <CarouselItem className="h-full">Slide 1</CarouselItem>
              <CarouselItem className="h-full">Slide 2</CarouselItem>
              <CarouselItem className="h-full">Slide 3</CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </NeoLayout>
  );
};

export default Actividades;
