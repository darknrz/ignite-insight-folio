import { BookOpen, Calendar, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";

const weeklyEntries = [
  {
    week: 1,
    title: "Foundation & Setup",
    date: "Week of January 1, 2025",
    learnings: [
      "Set up development environment with modern tooling",
      "Learned Git fundamentals and version control best practices",
      "Introduction to React and component-based architecture",
      "Understanding of TypeScript basics and type safety"
    ],
    exercises: [
      "Created first React component with TypeScript",
      "Built a simple to-do list application",
      "Practiced Git branching and merging workflows"
    ],
    reflection: "The week was challenging but exciting. Setting up the development environment taught me the importance of proper tooling. TypeScript initially felt complex, but I can already see its value in catching errors early."
  },
  {
    week: 2,
    title: "Advanced React Patterns",
    date: "Week of January 8, 2025",
    learnings: [
      "React Hooks: useState, useEffect, and custom hooks",
      "State management with Context API",
      "Component composition and reusability patterns",
      "Performance optimization with React.memo and useMemo"
    ],
    exercises: [
      "Built a weather dashboard with API integration",
      "Created reusable form components with validation",
      "Implemented custom hooks for data fetching"
    ],
    reflection: "This week deepened my understanding of React's reactive nature. Custom hooks are powerful tools for code reusability. The weather dashboard project helped me understand API integration and state management better."
  },
  {
    week: 3,
    title: "Backend Development",
    date: "Week of January 15, 2025",
    learnings: [
      "RESTful API design principles",
      "Database design and SQL fundamentals",
      "Authentication and authorization patterns",
      "Error handling and validation middleware"
    ],
    exercises: [
      "Built a Node.js API with Express",
      "Designed and implemented a PostgreSQL database",
      "Created authentication system with JWT"
    ],
    reflection: "Backend development opened my eyes to the full picture of web applications. Understanding how data flows from database to frontend is crucial. Security considerations in authentication were particularly enlightening."
  },
  {
    week: 4,
    title: "Full-Stack Integration",
    date: "Week of January 22, 2025",
    learnings: [
      "Connecting React frontend with backend APIs",
      "State management for async operations",
      "Error handling and loading states",
      "Deployment and production considerations"
    ],
    exercises: [
      "Integrated all previous projects into full-stack applications",
      "Implemented proper error boundaries and fallbacks",
      "Deployed applications to cloud platforms"
    ],
    reflection: "Bringing frontend and backend together was immensely satisfying. I learned the importance of proper error handling and user feedback. Deployment taught me about environment variables and production optimizations."
  }
];

export const Learning = () => {
  return (
    <section id="learning" className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Learning Journey
            </h2>
            <div className="w-20 h-1 bg-gradient-accent mx-auto mb-8" />
            <p className="text-lg text-muted-foreground">
              A weekly documentation of my learning process, growth, and insights
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
                        <h4 className="font-semibold text-primary">What I Learned</h4>
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
                        <h4 className="font-semibold text-primary">Exercises Completed</h4>
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
                Throughout this intensive learning journey, I've transformed from understanding basic concepts
                to building complete full-stack applications. The progression from frontend fundamentals to
                backend integration has given me a comprehensive understanding of modern web development.
              </p>
              <p className="leading-relaxed">
                What I've learned extends beyond technical skills. I've developed problem-solving approaches,
                learned to debug effectively, and understood the importance of clean, maintainable code.
                Each challenge taught me resilience and the value of breaking complex problems into manageable parts.
              </p>
              <p className="leading-relaxed font-semibold text-primary">
                How I Can Contribute to a Team:
              </p>
              <ul className="space-y-2">
                {[
                  "Bring fresh perspectives and eagerness to learn from experienced developers",
                  "Write clean, well-documented code that's easy for others to understand",
                  "Collaborate effectively and communicate technical concepts clearly",
                  "Adapt quickly to new technologies and team workflows",
                  "Contribute to code reviews with attention to detail and best practices",
                  "Take ownership of tasks and deliver quality results on time"
                ].map((contribution, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <span>{contribution}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
