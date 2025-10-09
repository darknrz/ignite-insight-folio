import { Github, Linkedin, Mail, Heart } from "lucide-react";

const currentYear = new Date().getFullYear();

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Elvis Erich Cabrera Ramos</h3>
              <p className="text-primary-foreground/80 text-sm">
                Desarrollador Full Stack apasionado por crear experiencias digitales excepcionales
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="font-semibold text-lg">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                {[
                  { name: "Iicio", href: "#home" },
                  { name: "Sobre", href: "#about" },
                  { name: "Proyectos", href: "#projects" },
                  { name: "Aprendizaje", href: "#learning" },
                ].map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-primary-foreground/80 hover:text-primary-foreground transition-colors inline-block hover:translate-x-1 duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social */}
            <div className="space-y-4">
              <h4 className="font-semibold text-lg">Connect</h4>
              <div className="flex gap-4">
                <a
                  href="https://github.com/darknrz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-all duration-300 hover:scale-110"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/elvis-erich-cabrera-ramos-1943aa352/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-all duration-300 hover:scale-110"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
             
              </div>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};
