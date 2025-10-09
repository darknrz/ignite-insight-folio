import { Github, Linkedin, Mail, Send } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const socialLinks = [
  {
    name: "GitHub",
    icon: Github,
    url: "https://github.com/darknrz",
    handle: "darknrz"
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://www.linkedin.com/in/elvis-erich-cabrera-ramos-1943aa352/",
    handle: "Elvis Erich Cabrera Ramos"
  },
  {
    name: "Email",
    icon: Mail,
    url: "zelvizcr@gmail.com",
    handle: "Elvis Erich Cabrera Ramos"
  },
];

export const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });

    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Ponte en contacto
            </h2>
            <div className="w-20 h-1 bg-gradient-accent mx-auto mb-8" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Siempre estoy abierto a nuevas oportunidades y colaboraciones. ¡No dudes en contactarme!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <Card className="border-border shadow-elegant bg-background animate-slide-up">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Envia un mensaje</CardTitle>
                <CardDescription>
                  Rellena el formulario a continuación y me pondré en contacto contigo lo antes posible
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-background border-input"
                    />
                  </div>
                  <div>
                    <Input
                      name="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-background border-input"
                    />
                  </div>
                  <div>
                    <Textarea
                      name="message"
                      placeholder="Your message..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="bg-background border-input resize-none"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 shadow-elegant hover:shadow-hover transition-all duration-300"
                  >
                    <Send className="mr-2 h-4 w-4" />
                    Enviar mensaje
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Social Links */}
            <div className="space-y-6 animate-slide-up" style={{ animationDelay: "0.1s" }}>
              <Card className="border-border shadow-elegant bg-background">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">Conéctate conmigo</CardTitle>
                  <CardDescription>
                    Encuéntrame en estas plataformas o envíame un correo electrónico
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {socialLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 rounded-lg border border-border hover:border-primary hover:bg-accent/5 transition-all duration-300 group"
                    >
                      <div className="w-12 h-12 rounded-full bg-gradient-accent flex items-center justify-center group-hover:scale-110 transition-transform">
                        <link.icon className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <div>
                        <div className="font-semibold text-primary">{link.name}</div>
                        <div className="text-sm text-muted-foreground">{link.handle}</div>
                      </div>
                    </a>
                  ))}
                </CardContent>
              </Card>

              <Card className="border-2 border-primary/20 bg-gradient-hero shadow-elegant">
                <CardContent className="pt-6">
                  <p className="text-center text-foreground/80 leading-relaxed">
                    <span className="font-semibold text-primary block mb-2">Abierto a Oportunidades</span>
                    Actualmente estoy buscando posiciones a tiempo completo donde pueda contribuir, aprender y crecer como desarrollador. ¡Construyamos algo increíble juntos!
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
