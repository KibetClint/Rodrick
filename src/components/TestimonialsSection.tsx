import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Rodrick delivered exceptional structural designs for our Lavington project. His attention to detail and code compliance gave us complete confidence throughout the build.",
    name: "David Ochieng",
    title: "Director, Apex Infrastructure Ltd.",
    type: "Developer",
  },
  {
    quote: "Working with Rodrick on the Vision City project was seamless. His technical skill and ability to coordinate across international teams made him invaluable.",
    name: "Eng. Sarah Kimani",
    title: "Lead Architect, Studio K",
    type: "Architect",
  },
  {
    quote: "Rodrick's proactive approach to the UGHE campus design saved us significant time and costs. He's one of the most reliable engineers we've worked with in the region.",
    name: "Dr. Peter Ouma",
    title: "Programme Director, UGHE",
    type: "Public Body",
  },
];

const TestimonialsSection = () => (
  <section className="py-24 md:py-32 bg-hero relative overflow-hidden">
    <div className="absolute inset-0 blueprint-grid opacity-50" />
    <div className="container mx-auto px-4 relative">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16 flex flex-col items-center"
      >
        <span className="eyebrow mb-4">Testimonials</span>
        <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground">What People Say</h2>
      </motion.div>
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12 }}
            className="bg-primary-foreground/[0.04] border border-primary-foreground/10 rounded-2xl p-7 backdrop-blur-sm hover:border-accent/40 transition-colors"
          >
            <Quote className="text-accent mb-4" size={26} />
            <p className="text-primary-foreground/85 text-sm md:text-base leading-relaxed mb-6 font-display italic">"{t.quote}"</p>
            <div className="pt-4 border-t border-primary-foreground/10">
              <p className="text-primary-foreground font-semibold text-sm">{t.name}</p>
              <p className="text-primary-foreground/50 text-xs">{t.title}</p>
              <span className="inline-block mt-2 px-2.5 py-0.5 text-[10px] rounded-full bg-accent/20 text-accent font-semibold">{t.type}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
