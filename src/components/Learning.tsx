import { BookOpen, Calendar, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";

const weeklyEntries = [
  {
    week: 1,
    title: "Fundamentos de Tecnologías Web y Visual Studio Code",
    date: "Agosto, 2025",
    learnings: [
      "Sistema web: conjunto completo que integra base de datos, servidor y aplicación.",
      "Aplicación web: software accesible desde un navegador (como Gmail o una tienda online).",
      "Sitio web: conjunto de páginas web relacionadas.",
    ],
    exercises: [
      "Exploré los elementos de la interfaz de VSC: panel lateral, terminal, barra de estado, minimapa.",
      "Instalé extensiones útiles: Live Server, Prettier, HTML CSS Support.",
      "Practiqué atajos de teclado",
    ],
    reflection: "En esta sesión aprendí los fundamentos que sostienen el desarrollo web y cómo se interconectan los diferentes conceptos y tecnologías para construir soluciones modernas."
  },
  {
    week: 2,
    title: "Laboratorios de Tecnologías Web",
    date: "Agosto, 2025",
    learnings: [
      "Aprendí los fundamentos de las tecnologías web",
      "Diferencias entre sistemas, aplicaciones, sitios y páginas web, así como los lenguajes y estándares web como HTML, CSS, JavaScript y herramientas gráficas",
      "Roles de desarrolladores frontend, backend y fullstack, y usé Visual Studio Code como entorno de desarrollo.",
    ],
    exercises: [
      "Hacer una página web básica con HTML y CSS",
      "Crear tablas en html",
      "Aprendi el tema de layout con flexbox y grid",
    ],
    reflection: "Aprendí a estructurar una página con HTML5 y a aplicar estilos con CSS3, usando flexbox y grid para diseño responsivo. Entendí cómo funciona el árbol DOM, el ciclo de vida de una página web, y la importancia del SEO y compatibilidad entre navegadores."
  },
  {
    week: 3,
    title: "Desarrollo Web Front-End",
    date: "Setiembre, 2025",
    learnings: [
      "Aprendí a usar Bootstrap, una librería CSS que facilita la creación de layouts y componentes usando clases predefinidas",
      "También trabajé con Tailwind CSS, una librería de clases utilitarias que permite personalizar estilos directamente desde el HTML.",
    ],
    exercises: [
      "Use booststrap para crear un layout responsivo con navbar, cards y footer",
      "Use tailwind para diseñar una landing page con colores, tipografía y espaciados personalizados",
    ],
    reflection: "En esta práctica aprendí a desarrollar interfaces usando dos herramientas modernas de CSS: Bootstrap y Tailwind. Bootstrap me permitió maquetar rápidamente usando componentes ya definidos. Con Tailwind, en cambio, aprendí a aplicar clases utilitarias para tener mayor control del diseño. Todo esto lo aprendí mediante ejercicios prácticos, aplicando teoría de Flexbox, tipografía, layout y diseño responsivo."
  },
  {
    week: 4,
    title: "Laboratorio 04",
    date: "Setiembre, 2025",
    learnings: [
      "En este laboratorio se aprendió a desarrollar una interfaz web utilizando HTML, CSS y JavaScript puro sin librerías externas",
      "Se abordaron los siguientes temas: HTML Semántico, CSS Puro y DOM Eventos, Drag & Drop,Formularios, Sliders RGB, Animaciones en Canvas Diseño responsivo con Flexbox y Media Queries",
    ],
    exercises: [
      " Interfaz con formulario, íconos SVG y carga de imagen drag & drop.",
      "Controles de volumen y selector de color.",
      "Página web con diseño exacto, imágenes con opacidad al hacer hover y diseño responsivo adaptado a 4 tamaños de pantalla."
    ],
    reflection: "En este laboratorio aprendí a crear interfaces web completas usando HTML, CSS y JavaScript puro. El ejercicio 1 me permitió practicar el uso del DOM, inputs animados y zona drag & drop. En el ejercicio 2 aprendí a sincronizar sliders y valores numéricos para controlar colores RGB. Finalmente, el ejercicio 3 me permitió aplicar diseño responsivo y trabajar con media queries para adaptar el diseño a distintos dispositivos. Aprendí todo esto mediante la práctica directa, el análisis de ejemplos y la depuración del código."
  },
  {
    week: 5,
    title: "Informe de Laboratorio 05A - Desarrollo FrontEnd con React",
    date: "Setiembre, 2025",
    learnings: [
      "Técnica donde el navegador renderiza el contenido usando JavaScript, sin recargar toda la página.",
      "Sintaxis parecida a HTML usada dentro de JavaScript para definir componentes de forma declarativa.",
      "Props son propiedades que se envían de un componente padre a uno hijo. Children es el contenido anidado entre las etiquetas de un componente.",
    ],
    exercises: [
      "Se desarrolló una aplicación en React que pasa datos desde un componente padre hacia un componente hijo usando props y children.",
    ],
    reflection: "Aprendí cómo funciona React para construir interfaces dinámicas mediante el uso de componentes, props y JSX. La experiencia de usar props para pasar datos entre componentes me ayudó a entender el flujo de datos unidireccional de React. También comprendí la diferencia entre renderizado del lado del cliente (CSR) y del servidor. Utilicé herramientas como Vite para crear proyectos y practiqué diferentes formas de aplicar estilos en React. Aprendí todo esto mediante la creación de proyectos reales, el análisis de documentación oficial y la prueba y error al construir componentes personalizados."
  },
  {
    week: 6,
    title: "Laboratorio 06A: JavaScript Avanzado",
    date: "Setiembre, 2025",
    learnings: [
      "Eventos, Renderizado Condicional/Iterativo y Consumo de APIs",
      "Formularios en JavaScript",
    ],
    exercises: [
      "Ejercicio 1: Ruleta Aleatoria",
      "Ejercicio 2: Sorteo de Equipos",
      "Página web con diseño exacto, imágenes con opacidad al hacer hover y diseño responsivo adaptado a 4 tamaños de pantalla."
    ],
    reflection: "Durante este laboratorio he consolidado conocimientos fundamentales sobre JavaScript moderno y desarrollo web interactivo. Específicamente aprendí a Manejar eventos del DOM de manera eficiente y estructurada, Implementar renderizado condicional para crear interfaces dinámicas, Utilizar renderizado iterativo para generar contenido basado en datos, Trabajar con formularios y validación de datos en tiempo real,Consumir APIs usando fetch() y manejar operaciones asíncronas, Aplicar promesas y async/await para código más limpio y }mantenible, Integrar librerías externas como html2canvas para funcionalidades avanzadas "
  }
  
];

export const Learning = () => {
  return (
    <section id="learning" className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Viaje de Aprendizaje
            </h2>
            <div className="w-20 h-1 bg-gradient-accent mx-auto mb-8" />
            <p className="text-lg text-muted-foreground">
             Una documentación semanal de mi proceso de aprendizaje, crecimiento e ideas
            </p>
          </div>

          <div className="space-y-6">
            <Accordion type="single" collapsible className="space-y-4">
              {weeklyEntries.map((entry, index) => (
                <AccordionItem
                  key={entry.week}
                  value={`week-${entry.week}`}
                  className="border border-border rounded-lg px-6 bg-background shadow-elegant hover:shadow-hover transition-all animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <AccordionTrigger className="hover:no-underline py-6">
                    <div className="flex items-start gap-4 text-left">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-accent flex items-center justify-center text-primary-foreground font-bold">
                        {entry.week}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-primary mb-1">
                          {entry.title}
                        </h3>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          {entry.date}
                        </div>
                      </div>
                    </div>
                  </AccordionTrigger>

                  <AccordionContent className="pb-6 pt-2 space-y-6">
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <BookOpen className="h-5 w-5 text-accent" />
                        <h4 className="font-semibold text-primary">Lo que aprendí</h4>
                      </div>
                      <ul className="space-y-2">
                        {entry.learnings.map((learning, i) => (
                          <li key={i} className="flex items-start gap-2 text-foreground/80">
                            <CheckCircle className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                            <span>{learning}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <CheckCircle className="h-5 w-5 text-accent" />
                        <h4 className="font-semibold text-primary">Ejercicios Completados</h4>
                      </div>
                      <ul className="space-y-2">
                        {entry.exercises.map((exercise, i) => (
                          <li key={i} className="flex items-start gap-2 text-foreground/80">
                            <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                            <span>{exercise}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-4 border-t border-border">
                      <h4 className="font-semibold text-primary mb-2">Weekly Reflection</h4>
                      <p className="text-foreground/80 leading-relaxed italic">
                        "{entry.reflection}"
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <Card className="mt-12 border-2 border-primary/20 bg-gradient-hero shadow-elegant animate-fade-in">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Final Reflection</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-foreground/80">
              <p className="leading-relaxed">
               A lo largo de este intenso proceso de aprendizaje, he pasado de comprender los conceptos básicos hasta ser capaz de desarrollar aplicaciones más completas y funcionales. La evolución desde los fundamentos del desarrollo frontend hasta el uso de tecnologías modernas como Vite, React y Next.js ha sido fundamental para fortalecer mis habilidades y comprender en mayor profundidad el vasto mundo de las tecnologías web.
              </p>

            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
