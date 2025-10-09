import { Book, Video, Code, FileText } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const resources = [
  {
    category: "Libros",
    icon: Book,
    items: [
      { title: "HTML & CSS: Design and Build Websites", author: "Jon Duckett" },
      { title: "CSS Secrets: Better Solutions to Everyday Web Design Problems", author: "Lea Verou" },
      { title: "Eloquent JavaScript (Español)", author: "Marijn Haverbeke" },
    ]
  },
  {
    category: "Documentation",
    icon: FileText,
    items: [
      { title: "MDN Web Docs (Español)"},
      { title: "W3Schools"},
      { title: "TypeScript Handbook"},
    ]
  },

];

export const Resources = () => {
  return (
    <section id="resources" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Viaje de Aprendizaje
            </h2>
            <div className="w-20 h-1 bg-gradient-accent mx-auto mb-8" />
            <p className="text-lg text-muted-foreground">
              Libros, cursos y plataformas que dieron forma a mi camino de desarrollo
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {resources.map((resource, index) => (
              <Card
                key={index}
                className="border-border hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 bg-card animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-lg bg-gradient-accent flex items-center justify-center">
                      <resource.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-semibold text-primary">
                      {resource.category}
                    </h3>
                  </div>
                  
                  <ul className="space-y-3">
                    {resource.items.map((item, i) => (
                      <li
                        key={i}
                        className="border-l-2 border-accent/30 pl-4 py-2 hover:border-accent transition-colors"
                      >
                        <div className="font-medium text-foreground">{item.title}</div>
                        <div className="text-sm text-muted-foreground">{item.author}</div>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
