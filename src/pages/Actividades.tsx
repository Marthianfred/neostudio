import { NeoLayout } from "@/components/NeoLayout";

const Actividades = () => {
  return (
    <NeoLayout>
      <div className="flex items-between gap-2 pt-2 justify-center w-full h-full flex-col">
        <h1 className="text-4xl font-bold text-center  neon-text">
          Actividades
        </h1>
        <div className="clip-path-hex-corners grow bg-black/30 backdrop-blur-sm border border-neon-cyan/30 p-8">
          <p className="text-neon-cyan">
            Contenido de Actividades próximamente...
          </p>
        </div>
      </div>
    </NeoLayout>
  );
};

export default Actividades;
