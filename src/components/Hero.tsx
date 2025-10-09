import { ArrowDown, Download, Mail } from "lucide-react";
import { Button } from "./ui/button";

export const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden pt-16"
    >
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-primary tracking-tight">
              Elvis Erich Cabrera Ramos
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl font-medium text-accent">
              Desarrollador Full Stack y Solucionador Creativo de Problemas
            </p>
          </div>

          <div className="space-y-2 text-foreground/80">
            <p className="text-lg md:text-xl">
              <span className="font-semibold text-primary">Estudios:</span>{" "}
              Ingenieria de sistemas
            </p>
            <p className="text-lg md:text-xl">
              <span className="font-semibold text-primary">Experiencias:</span>{" "}
              Desarrollo de soluciones elegantes para problemas complejos{" "}
            </p>
          </div>

          <p className="text-base md:text-lg max-w-2xl mx-auto leading-relaxed text-muted-foreground">
            Desarrollo de soluciones elegantes para problemas complejos.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button
              size="lg"
              onClick={() => scrollToSection("projects")}
              className="group bg-primary hover:bg-primary/90 text-primary-foreground shadow-elegant hover:shadow-hover transition-all duration-300"
            >
              Ver mi trabajo
              <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("contact")}
              className="border-primary/30 hover:border-primary hover:bg-primary/5 transition-all duration-300"
            >
              <Mail className="mr-2 h-4 w-4" />
              Ponte en contacto{" "}
            </Button>
            <a
              href="../../public/Elvis_Erich_Cabrera_Ramos.pdf"
              download
              className="inline-flex items-center justify-center px-4 py-2 text-lg font-medium hover:bg-accent/20 transition-all duration-300 rounded-md"
            >
              <Download className="mr-2 h-4 w-4" />
              Descargar CV
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-primary/50" />
      </div>
    </section>
  );
};
