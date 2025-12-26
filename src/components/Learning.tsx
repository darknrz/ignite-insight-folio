import { BookOpen, Calendar, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const weeklyEntries = [
  {
    week: 1,
    title: "Fundamentos de Tecnologías Web y Visual Studio Code",
    date: "Agosto 25-29, 2025",
    learnings: [
      "Sistema web: conjunto completo que integra base de datos, servidor y aplicación.",
      "Aplicación web: software accesible desde un navegador (como Gmail o una tienda online).",
      "Sitio web: conjunto de páginas web relacionadas.",
      "Roles en desarrollo: frontend, backend y fullstack developer.",
    ],
    exercises: [
      "Exploré los elementos de la interfaz de VSC: panel lateral, terminal, barra de estado, minimapa.",
      "Instalé extensiones útiles: Live Server, Prettier, HTML CSS Support.",
      "Practiqué atajos de teclado para mejorar productividad.",
    ],
    reflection: "En esta sesión aprendí los fundamentos que sostienen el desarrollo web y cómo se interconectan los diferentes conceptos y tecnologías para construir soluciones modernas."
  },
  {
    week: 2,
    title: "HTML5 y CSS3 - Estructura y Diseño",
    date: "Septiembre 1-5, 2025",
    learnings: [
      "Estructura HTML5 y XML, etiquetas principales y semántica.",
      "Árbol DOM: nodos, renderizado y ciclo de vida de una página web.",
      "CSS3: sintaxis, selectores, flexbox, grid layout y diseño responsivo.",
      "Optimización SEO y compatibilidad entre navegadores.",
    ],
    exercises: [
      "Crear una página web básica con HTML semántico.",
      "Diseñar layout con Flexbox y Grid.",
      "Implementar diseño fluido y responsivo.",
    ],
    reflection: "Aprendí a estructurar una página con HTML5 y a aplicar estilos con CSS3, usando flexbox y grid para diseño responsivo. Entendí cómo funciona el árbol DOM, el ciclo de vida de una página web, y la importancia del SEO y compatibilidad entre navegadores."
  },
  {
    week: 3,
    title: "Bootstrap y Tailwind CSS",
    date: "Septiembre 8-12, 2025",
    learnings: [
      "Bootstrap: framework CSS con componentes predefinidos y sistema de grid.",
      "Tailwind CSS: clases utilitarias para personalización directa.",
      "Tipografía, spacing, colores y sistema de diseño.",
      "Componentes UI: avatars, badges, buttons, forms, navigation.",
    ],
    exercises: [
      "Desarrollar sitio web con Bootstrap usando layout y components.",
      "Crear landing page con Tailwind CSS.",
      "Práctica Calificada 03: Desarrollo de un sitio web completo con CSS.",
    ],
    reflection: "En esta práctica aprendí a desarrollar interfaces usando dos herramientas modernas de CSS: Bootstrap y Tailwind. Bootstrap me permitió maquetar rápidamente usando componentes ya definidos. Con Tailwind, en cambio, aprendí a aplicar clases utilitarias para tener mayor control del diseño."
  },
  {
    week: 4,
    title: "JavaScript y TypeScript - Fundamentos",
    date: "Septiembre 15-19, 2025",
    learnings: [
      "Motores JavaScript, variables y operadores.",
      "Tipos de datos: números, strings, objetos, booleanos.",
      "Funciones: sintaxis, invocación, funciones anónimas, arrow functions, closures.",
      "Manipulación del DOM con JavaScript.",
      "Animaciones y gráficos con Canvas.",
    ],
    exercises: [
      "Interfaz con formulario y drag & drop.",
      "Controles interactivos con sliders RGB.",
      "Laboratorio 04: Desarrollo de una animación con JavaScript y Canvas.",
    ],
    reflection: "En este laboratorio aprendí a crear interfaces web completas usando HTML, CSS y JavaScript puro. Practiqué el uso del DOM, inputs animados y zona drag & drop. Aprendí a sincronizar sliders y valores numéricos. También trabajé con Canvas para crear animaciones gráficas."
  },
  {
    week: 5,
    title: "Framework React - Introducción",
    date: "Septiembre 22-26, 2025",
    learnings: [
      "Client Side Rendering (CSR) y estructura de frameworks JavaScript.",
      "Desarrollo basado en componentes con JSX.",
      "Props y Children para pasar datos entre componentes.",
      "Gestión de dependencias y herramientas de creación (Vite).",
      "Estilos en React: inline, stylesheets, modules, styled-components.",
    ],
    exercises: [
      "Configuración de proyecto con Vite.",
      "Crear componentes reutilizables.",
      "Laboratorio 05A: Pasar datos con props y children entre componentes.",
    ],
    reflection: "Aprendí cómo funciona React para construir interfaces dinámicas mediante el uso de componentes, props y JSX. La experiencia de usar props para pasar datos entre componentes me ayudó a entender el flujo de datos unidireccional de React."
  },
  {
    week: 6,
    title: "React Avanzado - Eventos y APIs",
    date: "Septiembre 29 - Octubre 3, 2025",
    learnings: [
      "Manejo de eventos en React.",
      "Renderizado condicional e iterativo.",
      "Formularios controlados y no controlados.",
      "Routing con React Router.",
      "Consumo de APIs: Promesas, Async/Await, Axios.",
    ],
    exercises: [
      "Implementar eventos y formularios.",
      "Consumir datos de APIs REST.",
      "Laboratorio 06A: Eventos y renderizado con datos de API externa.",
    ],
    reflection: "Durante este laboratorio consolidé conocimientos sobre JavaScript moderno y desarrollo web interactivo. Aprendí a manejar eventos del DOM de manera eficiente, implementar renderizado condicional y consumir APIs usando fetch() y async/await."
  },
  {
    week: 7,
    title: "React Hooks",
    date: "Octubre 6-10, 2025",
    learnings: [
      "useState para manejo de estado local.",
      "useEffect para efectos secundarios y ciclo de vida.",
      "useContext para compartir estado global.",
      "useRef para referencias a elementos DOM.",
      "useReducer para estado complejo.",
      "useCallback y useMemo para optimización.",
      "Creación de Hooks personalizados.",
    ],
    exercises: [
      "Implementar formularios con useState.",
      "Fetch de datos con useEffect.",
      "Laboratorio 06: Uso de hooks en aplicación completa.",
      "Evaluación de Logro 01.",
    ],
    reflection: "Los Hooks transformaron mi forma de trabajar con React. Entendí cómo useState y useEffect reemplazan el ciclo de vida de clases. Los hooks personalizados me permitieron crear lógica reutilizable. La evaluación consolidó todo el aprendizaje del frontend."
  },
  {
    week: 8,
    title: "Revisión y Consolidado Parcial",
    date: "Octubre 13-17, 2025",
    learnings: [
      "Retroalimentación de la Evaluación de Logro 01.",
      "Revisión de conceptos clave del desarrollo frontend.",
      "Mejores prácticas en React y JavaScript.",
      "Consolidación de conocimientos adquiridos.",
    ],
    exercises: [
      "Análisis de errores comunes en la evaluación.",
      "Reforzamiento de temas débiles.",
      "Trabajo de Investigación Formativa: Estado del Arte.",
    ],
    reflection: "Esta semana de revisión fue crucial para identificar áreas de mejora. El primer consolidado me permitió evaluar mi progreso y preparame para la segunda parte del curso enfocada en backend y fullstack."
  },
  {
    week: 9,
    title: "Tecnología Web Backend",
    date: "Octubre 20-24, 2025",
    learnings: [
      "Arquitectura de aplicaciones web: cliente-servidor.",
      "Servidores web y funcionamiento del server side.",
      "Lenguajes backend: PHP, Java (JSP), Python.",
      "Diferencias entre frontend y backend development.",
    ],
    exercises: [
      "Configuración de servidor web local.",
      "Aplicación básica con PHP.",
      "Aplicación básica con JSP.",
      "Laboratorio 9: Despliegue de aplicaciones web backend PHP y JSP.",
    ],
    reflection: "Iniciar con backend fue un cambio de paradigma. Comprendí cómo el servidor procesa peticiones, maneja lógica de negocio y se comunica con bases de datos. PHP y JSP me mostraron diferentes enfoques para el desarrollo server-side."
  },
  {
    week: 10,
    title: "Lenguaje Python",
    date: "Octubre 27-31, 2025",
    learnings: [
      "Sintaxis básica de Python: indentación, comentarios, variables.",
      "Tipos de datos: listas, tuplas, diccionarios.",
      "Estructuras de control: condicionales y bucles.",
      "Funciones imperativas y retorno de valores.",
      "POO en Python: clases, atributos, métodos, herencia, polimorfismo.",
      "Manejo de excepciones y módulos.",
    ],
    exercises: [
      "Scripts básicos con Python.",
      "Implementar estructuras de datos.",
      "Crear clases y objetos.",
      "Laboratorio 10: Aplicación completa con Python.",
    ],
    reflection: "Python resultó ser elegante y poderoso. Su sintaxis clara y las capacidades de POO me permitieron construir aplicaciones rápidamente. Entendí por qué es tan popular en el desarrollo web moderno."
  },
  {
    week: 11,
    title: "Django - Framework Web",
    date: "Noviembre 3-7, 2025",
    learnings: [
      "Introducción a Django y patrón MTV (Model-Template-View).",
      "Instalación y gestión de proyectos Django.",
      "Sistema de URLs y enrutamiento.",
      "Vistas basadas en funciones y clases.",
      "Sistema de plantillas: bloques, herencia, etiquetas, filtros.",
      "Modelos y ORM para base de datos.",
    ],
    exercises: [
      "Crear proyecto Django desde CLI.",
      "Configurar URLs y vistas.",
      "Diseñar plantillas con herencia.",
      "Laboratorio 11: Desarrollo de vistas, plantillas y modelos.",
    ],
    reflection: "Django impresiona por su filosofía 'batteries included'. El patrón MTV organiza el código de forma clara. El ORM facilita enormemente el trabajo con bases de datos sin escribir SQL directamente."
  },
  {
    week: 12,
    title: "Django - Formularios y Admin",
    date: "Noviembre 10-14, 2025",
    learnings: [
      "Creación y manejo de formularios en Django.",
      "Validación y sanitización de datos.",
      "Django Admin: interfaz de administración automática.",
      "Personalización del admin: registro de modelos, campos calculados.",
      "Middleware: procesamiento de peticiones y respuestas.",
      "Manejo de sesiones, autenticación y autorización.",
    ],
    exercises: [
      "Implementar formularios con validación.",
      "Personalizar Django Admin.",
      "Sistema de login y permisos.",
      "Laboratorio 12: Desarrollo de un sistema web backend completo.",
    ],
    reflection: "Los formularios de Django simplifican la validación y seguridad. El Django Admin es una herramienta increíblemente potente que genera automáticamente interfaces CRUD. El sistema de autenticación integrado facilita la seguridad."
  },
  {
    week: 13,
    title: "APIs RESTful con Django",
    date: "Noviembre 17-21, 2025",
    learnings: [
      "Principios REST y arquitectura de APIs.",
      "HATEOAS y APIs de hipermedios.",
      "Django REST Framework (DRF).",
      "Serialización de modelos y datos.",
      "Filtrado, paginación y throttling.",
      "Routers, viewsets, AJAX, CSRF y CORS.",
    ],
    exercises: [
      "Crear API REST con Django REST Framework.",
      "Implementar endpoints CRUD.",
      "Serializers para modelos complejos.",
      "Laboratorio 13: Desarrollo de API REST completa.",
    ],
    reflection: "Django REST Framework eleva el desarrollo de APIs a otro nivel. Aprendí a diseñar APIs siguiendo principios REST, crear serializers eficientes y manejar autenticación. La integración con el frontend React cerró el ciclo fullstack."
  },
  {
    week: 14,
    title: "Microservicios con Django",
    date: "Noviembre 24-28, 2025",
    learnings: [
      "Introducción a arquitectura de microservicios.",
      "Diseño y construcción de microservicios con Django.",
      "Comunicación entre microservicios.",
      "Gestión distribuida de bases de datos.",
      "Docker y Kubernetes para despliegue.",
      "Seguridad en microservicios.",
      "Monitoreo y escalado horizontal.",
    ],
    exercises: [
      "Crear microservicio independiente.",
      "Implementar comunicación entre servicios.",
      "Contenedorización con Docker.",
      "Consumir microservicio desde frontend.",
    ],
    reflection: "Los microservicios representan un cambio arquitectónico significativo. Aunque más complejos que monolitos, ofrecen escalabilidad y mantenibilidad. Docker simplifica el despliegue y Kubernetes orquesta múltiples contenedores."
  },
  {
    week: 15,
    title: "Proyecto Final y RSU",
    date: "Diciembre 1-5, 2025",
    learnings: [
      "Integración de todos los conocimientos adquiridos.",
      "Metodologías ágiles en proyectos reales.",
      "Presentación de proyectos de investigación.",
      "Responsabilidad Social Universitaria (RSU).",
      "Objetivos de Desarrollo Sostenible (ODS).",
    ],
    exercises: [
      "Desarrollo de proyecto fullstack completo.",
      "Presentación y exposición de trabajo aplicativo.",
      "Evaluación de Logro 02.",
      "Proyecto con impacto en la comunidad huancaína.",
    ],
    reflection: "El proyecto final fue la oportunidad de demostrar todo lo aprendido. Integrar frontend React con backend Django y API REST fue desafiante pero gratificante. La dimensión de RSU me hizo reflexionar sobre el impacto social de la tecnología."
  },
  {
    week: 16,
    title: "Cierre del Curso",
    date: "Diciembre 8-12, 2025",
    learnings: [
      "Retroalimentación final del curso.",
      "Revisión de evaluación de logro 02.",
      "Consolidación de aprendizajes.",
      "Reflexión sobre el progreso alcanzado.",
    ],
    exercises: [
      "Segundo consolidado de evaluación continua.",
      "Reforzamiento de conceptos finales.",
      "Preparación para proyectos futuros.",
    ],
    reflection: "Al finalizar el curso, puedo desarrollar aplicaciones web completas desde cero. El viaje desde HTML básico hasta microservicios fue intenso pero transformador. Me siento preparado para enfrentar proyectos fullstack profesionales."
  }
];

export const Learning = () => {
  return (
    <section id="learning" className="py-20 md:py-32 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Viaje de Aprendizaje
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-8" />
            <p className="text-lg text-gray-600">
              Documentación semanal de mi proceso de aprendizaje en Desarrollo de Aplicaciones Web
            </p>
          </div>

          <div className="space-y-6">
            <Accordion type="single" collapsible className="space-y-4">
              {weeklyEntries.map((entry) => (
                <AccordionItem
                  key={entry.week}
                  value={`week-${entry.week}`}
                  className="border border-gray-200 rounded-lg px-6 bg-white shadow-sm hover:shadow-md transition-all"
                >
                  <AccordionTrigger className="hover:no-underline py-6">
                    <div className="flex items-start gap-4 text-left">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
                        {entry.week}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-1">
                          {entry.title}
                        </h3>
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          <Calendar className="h-4 w-4" />
                          {entry.date}
                        </div>
                      </div>
                    </div>
                  </AccordionTrigger>

                  <AccordionContent className="pb-6 pt-2 space-y-6">
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <BookOpen className="h-5 w-5 text-blue-600" />
                        <h4 className="font-semibold text-gray-900">Lo que aprendí</h4>
                      </div>
                      <ul className="space-y-2">
                        {entry.learnings.map((learning, i) => (
                          <li key={i} className="flex items-start gap-2 text-gray-700">
                            <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                            <span>{learning}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <CheckCircle className="h-5 w-5 text-blue-600" />
                        <h4 className="font-semibold text-gray-900">Ejercicios Completados</h4>
                      </div>
                      <ul className="space-y-2">
                        {entry.exercises.map((exercise, i) => (
                          <li key={i} className="flex items-start gap-2 text-gray-700">
                            <div className="w-2 h-2 rounded-full bg-blue-600 mt-2 flex-shrink-0" />
                            <span>{exercise}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-4 border-t border-gray-200">
                      <h4 className="font-semibold text-gray-900 mb-2">Reflexión Semanal</h4>
                      <p className="text-gray-700 leading-relaxed italic">
                        "{entry.reflection}"
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <Card className="mt-12 border-2 border-blue-200 bg-blue-50 shadow-md">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900">Reflexión Final</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <p className="leading-relaxed">
                A lo largo de este intenso proceso de aprendizaje de 16 semanas, he experimentado una transformación completa como desarrollador. Comencé con los fundamentos de HTML y CSS, y ahora soy capaz de diseñar y desarrollar aplicaciones web fullstack completas utilizando tecnologías modernas.
              </p>
              <p className="leading-relaxed">
                El primer ciclo me permitió dominar el desarrollo frontend con React, aprendiendo desde los conceptos básicos hasta hooks avanzados y consumo de APIs. El segundo ciclo abrió un mundo completamente nuevo con Python, Django y arquitecturas de microservicios.
              </p>
              <p className="leading-relaxed">
                Más allá de las habilidades técnicas, este curso me enseñó a pensar como ingeniero de software: considerar arquitecturas escalables, escribir código mantenible, implementar buenas prácticas de seguridad y desarrollar con responsabilidad social en mente.
              </p>
              <p className="leading-relaxed font-semibold">
                Esta experiencia no solo me preparó para construir aplicaciones web, sino que me dio las herramientas y la confianza para enfrentar cualquier desafío tecnológico que se presente en mi carrera profesional.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}