import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

const projects = [
  {
    title: "Biblioteca digital",
    description: "Biblioteca digital creada para los estudiantes de Sicaya, quienes anteriormente contaban solo con una biblioteca tradicional.",
    image: "https://i.imgur.com/nN98xVD.jpeg",
    technologies: ["React", "Node.js", "SqlServer", "Electron"],
    github: "https://github.com/ISAASPWDI/sistema-de-biblioteca-UNCP.git",
    demo: "#",
  },
  {
    title: "Artesania shop",
    description: "Artesanía Shop fue desarrollada para promover la venta de productos de la región Junín, abarcando desde la selva hasta la sierra. Su objetivo es brindar apoyo a los artesanos locales mediante una plataforma virtual que facilite la comercialización de sus productos.",
    image: "https://i.imgur.com/knF2nMP.jpeg",
    technologies: ["JavaScript", "React", "SqlServer", "Tailwind"],
    github: "https://github.com/darknrz/artesania-shop.git",
    demo: "#",
  },
  {
    title: "Uni connect",
    description: "UniConnect fue desarrollado con el propósito de conectar a personas con intereses similares en el ámbito de la programación, facilitando la colaboración en proyectos complejos. Funciona como una red social donde los usuarios pueden mostrar sus intereses y las tecnologías que dominan.",
    image: "https://i.imgur.com/Tgjgp2j.jpeg",
    technologies: ["JavaScript", "React", "MachineLearning", "API", "SqlServer", "Node"],
    github: "https://github.com/darknrz/tech-affinity-finder.git",
    demo: "#",
  },
  {
    title: "Math kids",
    description: "Math Kids es un sistema de reservas de clases que permite a los estudiantes elegir al profesor y el tema de su interés, con el objetivo de reforzar su aprendizaje o recibir ayuda en sus tareas escolares.",
    image: "https://i.imgur.com/79QMrT1.jpeg",
    technologies: ["TypeScript", "Prisma", "TailwindCSS", "Supabase", "React", "JavaScript", "Node.js", "izipay", "express", "PostgreSql" ],
    github: "https://github.com/darknrz/Math-Kids.git",
    demo: "#",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Proyectos realizados
            </h2>
            <div className="w-20 h-1 bg-gradient-accent mx-auto mb-8" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Una muestra de mi trabajo reciente, que demuestra mis habilidades para crear aplicaciones modernas, escalables y fáciles de usar.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="group overflow-hidden border-border hover:shadow-hover transition-all duration-300 hover:-translate-y-1 animate-slide-up bg-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden h-48 bg-muted">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <CardHeader>
                  <CardTitle className="text-2xl text-primary group-hover:text-accent transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-base">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <Badge
                        key={i}
                        variant="secondary"
                        className="bg-secondary/50 hover:bg-secondary text-secondary-foreground"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-3 pt-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 border-primary/30 hover:border-primary hover:bg-primary/5"
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </a>
                    </Button>
                    <Button
                      size="sm"
                      className="flex-1 bg-primary hover:bg-primary/90"
                      asChild
                    >
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
