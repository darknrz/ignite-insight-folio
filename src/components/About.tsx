import { Code, Heart, Target, Users } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const values = [
  {
    icon: Code,
    title: "Technical Excellence",
    description: "Committed to writing clean, maintainable code and staying current with best practices and emerging technologies.",
  },
  {
    icon: Heart,
    title: "Passion for Learning",
    description: "Continuously expanding my skill set and embracing new challenges with enthusiasm and dedication.",
  },
  {
    icon: Target,
    title: "Goal-Oriented",
    description: "Focused on delivering results that exceed expectations and drive meaningful impact.",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Strong believer in the power of teamwork, open communication, and knowledge sharing.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              About Me
            </h2>
            <div className="w-20 h-1 bg-gradient-accent mx-auto mb-8" />
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="space-y-6 animate-slide-up">
              <h3 className="text-2xl md:text-3xl font-semibold text-primary">
                Who I Am
              </h3>
              <p className="text-foreground/80 leading-relaxed">
                I'm a passionate developer with a keen eye for detail and a love for creating
                exceptional digital experiences. My journey in tech has been driven by curiosity
                and the desire to solve real-world problems through innovative solutions.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                Beyond coding, I'm fascinated by the intersection of technology and design,
                always seeking to create applications that are not only functional but also
                beautiful and intuitive to use.
              </p>
            </div>

            <div className="space-y-6 animate-slide-up" style={{ animationDelay: "0.1s" }}>
              <h3 className="text-2xl md:text-3xl font-semibold text-primary">
                My Strengths
              </h3>
              <ul className="space-y-3">
                {[
                  "Full-stack development with modern frameworks",
                  "Clean, maintainable, and scalable code architecture",
                  "Problem-solving with creative and efficient solutions",
                  "Rapid learning and adaptation to new technologies",
                  "Strong communication and collaborative mindset",
                  "Attention to detail and user experience"
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
