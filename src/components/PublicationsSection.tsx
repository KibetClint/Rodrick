import { motion } from "framer-motion";
import { BookOpen, ExternalLink } from "lucide-react";

const publications = [
  {
    title: "Seismic Resilience of Reinforced Concrete Frames in East African Construction",
    venue: "Journal of Structural Engineering, Vol. 48",
    year: "2023",
    type: "Paper",
  },
  {
    title: "Sustainable Foundation Design for Expansive Soils in the Rift Valley",
    venue: "International Conference on Geotechnical Engineering, Kigali",
    year: "2022",
    type: "Conference",
  },
  {
    title: "BIM Integration in Structural Engineering Practice: A Kenyan Perspective",
    venue: "East African Engineers Conference, Nairobi",
    year: "2021",
    type: "Conference",
  },
];

const PublicationsSection = () => (
  <section id="publications" className="py-24 md:py-32 bg-background">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16 flex flex-col items-center"
      >
        <span className="eyebrow mb-4">Research</span>
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Publications & Research</h2>
        <p className="text-muted-foreground max-w-xl">Contributing to the body of knowledge in structural and civil engineering.</p>
      </motion.div>

      <div className="max-w-3xl mx-auto space-y-4">
        {publications.map((pub, i) => (
          <motion.div
            key={pub.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-card border border-border rounded-2xl p-5 md:p-6 flex gap-4 group hover:border-accent/40 hover:shadow-soft hover:-translate-y-0.5 transition-all duration-300"
          >
            <BookOpen className="text-accent shrink-0 mt-1" size={20} />
            <div className="flex-1">
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-display text-sm md:text-base font-bold text-foreground group-hover:text-accent transition-colors">
                  {pub.title}
                </h3>
                <ExternalLink size={14} className="text-muted-foreground shrink-0 mt-1 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <p className="text-xs md:text-sm text-muted-foreground mt-1">{pub.venue}</p>
              <div className="flex items-center gap-2 mt-2">
                <span className="px-2 py-0.5 text-[10px] md:text-xs rounded-sm bg-secondary text-secondary-foreground">{pub.type}</span>
                <span className="text-[10px] md:text-xs text-muted-foreground">{pub.year}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default PublicationsSection;
