import { Code, Heart, Target, Users } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const values = [
  {
    icon: Code,
    title: "Excelencia Técnica",
    description: "Comprometido con escribir código limpio y mantenible, y con mantenerme actualizado en las mejores prácticas y tecnologías emergentes.",
  },
  {
    icon: Heart,
    title: "Pasión por Aprender",
    description: "Amplío constantemente mis habilidades y enfrento nuevos desafíos con entusiasmo y dedicación.",
  },
  {
    icon: Target,
    title: "Enfoque en Objetivos",
    description: "Orientado a entregar resultados que superen expectativas y generen un impacto significativo.",
  },
  {
    icon: Users,
    title: "Colaboración en Equipo",
    description: "Firme creyente del poder del trabajo en equipo, la comunicación abierta y el intercambio de conocimientos.",
  },
];


export const About = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Sobre mi
            </h2>
            <div className="w-20 h-1 bg-gradient-accent mx-auto mb-8" />
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="space-y-6 animate-slide-up">
              <h3 className="text-2xl md:text-3xl font-semibold text-primary">
                ¿Quien soy?
              </h3>
              <p className="text-foreground/80 leading-relaxed">
                Soy estudiante de noveno semestre de la carrera de Ingeniería de Sistemas. Me especializo en desarrollo web, y disfruto crear páginas visualmente atractivas, intuitivas y fáciles de usar. También me enfoco en desarrollar un backend funcional, eficiente y libre de errores.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                Me motiva ver la satisfacción de los usuarios al interactuar con las interfaces que diseño, y siempre busco mejorar la experiencia del cliente en cada proyecto que realizo.
              </p>
            </div>

            <div className="space-y-6 animate-slide-up" style={{ animationDelay: "0.1s" }}>
              <h3 className="text-2xl md:text-3xl font-semibold text-primary">
               Mis fortalezas
              </h3>
              <ul className="space-y-3">
                {[
                  "Desarrollo full-stack con frameworks modernos",
                  "Arquitectura de código limpia, mantenible y escalable",
                  "Resolución de problemas con soluciones creativas y eficientes",
                  "Aprendizaje rápido y adaptación a nuevas tecnologías",
                  "Fácil comunicación y mentalidad colaborativa",
                  "Atención al detalle y a la experiencia de usuario"
                ].map((strength, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="mt-1 w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                    <span className="text-foreground/80">{strength}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card
                key={index}
                className="border-border hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 bg-background animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="pt-6 text-center space-y-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-accent">
                    <value.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h4 className="font-semibold text-lg text-primary">
                    {value.title}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
