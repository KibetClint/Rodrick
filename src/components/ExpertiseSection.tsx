import { motion } from "framer-motion";
import { Building, Landmark, Layers, Wind, Search, ClipboardList } from "lucide-react";

const expertiseCards = [
  {
    icon: Building,
    title: "Structural Analysis & Design",
    tags: ["RC Design", "Steel Structures", "High-Rise", "Finite Element"],
  },
  {
    icon: Landmark,
    title: "Bridge & Highway Engineering",
    tags: ["Bridge Design", "Pavement", "Drainage", "Road Geometry"],
  },
  {
    icon: Layers,
    title: "Foundation Design",
    tags: ["Pile Foundations", "Raft Design", "Soil Investigation", "Bearing Capacity"],
  },
  {
    icon: Wind,
    title: "Seismic & Wind Engineering",
    tags: ["Lateral Load Analysis", "Eurocode 8", "Dynamic Response", "Wind Tunnels"],
  },
  {
    icon: Search,
    title: "Investigation & Remediation",
    tags: ["Structural Assessment", "Crack Analysis", "Retrofitting", "Forensic Engineering"],
  },
  {
    icon: ClipboardList,
    title: "Project Management",
    tags: ["BIM Coordination", "Cost Estimation", "Site Supervision", "Scheduling"],
  },
];

const ExpertiseSection = () => (
  <section id="expertise" className="py-24 md:py-32 bg-section-alt">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16 flex flex-col items-center"
      >
        <span className="eyebrow mb-4">Expertise</span>
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Core Capabilities</h2>
        <p className="text-muted-foreground max-w-xl">Specialised disciplines honed across 50+ projects in diverse environments.</p>
      </motion.div>

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto">
        {expertiseCards.map((card, i) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
            className="bg-card border border-border rounded-2xl p-6 md:p-7 hover:border-accent/40 hover:shadow-soft hover:-translate-y-1 transition-all duration-300 group"
          >
            <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
              <card.icon className="text-accent group-hover:scale-110 transition-transform" size={22} />
            </div>
            <h3 className="font-display text-base md:text-lg font-bold text-foreground mb-3">{card.title}</h3>
            <div className="flex flex-wrap gap-1.5">
              {card.tags.map((tag) => (
                <span key={tag} className="px-2 py-0.5 text-[10px] md:text-xs rounded-full bg-secondary text-secondary-foreground">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ExpertiseSection;
