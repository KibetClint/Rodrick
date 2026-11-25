import { motion } from "framer-motion";
import { PenTool, FileText, HardHat, ShieldCheck, Scale } from "lucide-react";

const services = [
  {
    icon: PenTool,
    title: "Concept & Scheme Design",
    description: "Early-stage structural concepts, feasibility studies, and scheme design that align with architectural intent and budget constraints.",
  },
  {
    icon: FileText,
    title: "Detailed Design Packages",
    description: "Full structural calculations, general arrangement drawings, reinforcement detailing, and specification notes ready for construction.",
  },
  {
    icon: HardHat,
    title: "Construction Support",
    description: "On-site supervision, RFI responses, shop drawing reviews, and construction-phase engineering to ensure design intent is maintained.",
  },
  {
    icon: ShieldCheck,
    title: "Peer Review & Compliance",
    description: "Independent structural peer reviews, code compliance audits, and third-party design verification for clients and regulatory bodies.",
  },
  {
    icon: Scale,
    title: "Expert Witness & Advisory",
    description: "Technical advisory services for dispute resolution, structural failure investigation, and expert witness reporting.",
  },
];

const ServicesSection = () => (
  <section id="services" className="py-24 md:py-32 bg-background">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16 flex flex-col items-center"
      >
        <span className="eyebrow mb-4">Services</span>
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">How I Can Help</h2>
        <p className="text-muted-foreground max-w-xl">From concept to completion — and beyond.</p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto">
        {services.map((service, i) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
            className="bg-card border border-border rounded-2xl p-7 hover:border-accent/40 hover:shadow-soft hover:-translate-y-1 transition-all duration-300 group"
          >
            <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
              <service.icon className="text-accent group-hover:scale-110 transition-transform" size={22} />
            </div>
            <h3 className="font-display text-lg font-bold text-foreground mb-2">{service.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
