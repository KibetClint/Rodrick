import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const profileData = {
  software: ["AutoCAD", "Civil 3D", "ETABS", "Protastructure", "Tekla Tedds", "STATICA", "SAFE", "Prokon", "Revit", "ArcGIS"],
  languages: ["English", "Swahili", "French (A1)"],
  interests: ["Sustainable Design", "Urban Development", "BIM"],
};

const AboutSection = () => (
  <section id="about" className="py-24 md:py-32 bg-background">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16 flex flex-col items-center"
      >
        <span className="eyebrow mb-4">About</span>
        <h2 className="text-4xl md:text-5xl font-bold text-foreground">
          Engineering with <span className="text-gradient-gold">purpose</span>.
        </h2>
      </motion.div>

      <div className="grid lg:grid-cols-5 gap-10 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-3 space-y-5"
        >
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
            I'm a registered Civil & Structural Engineer with over 5 years of experience designing and delivering infrastructure projects across East Africa, Rwanda, and Iraq. I hold a BSc in Civil & Structural Engineering (First Class Honours) from Moi University (2019) and an MSc in Civil Engineering (Transportation) from PAUSTI (2025). Registered with the Engineers Board of Kenya (EBK) and the Institution of Engineers of Kenya (IEK).
          </p>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
            Currently serving as Managing Director at Brightspace Engineering, I lead multidisciplinary teams on projects ranging from commercial developments and residential estates to international airport infrastructure. My work centres on structural integrity, sustainable urban development, and delivering projects that balance innovation with safety.
          </p>
          <div className="border-l-2 border-accent pl-6 mt-8 py-2">
            <Quote className="text-accent mb-3" size={22} />
            <p className="italic text-foreground/80 text-base md:text-lg leading-relaxed font-display">
              "Good engineering is invisible — it's the bridge you cross without thinking, the building you trust without asking. That's the standard I design to."
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-2"
        >
          <div className="bg-card border border-border rounded-2xl p-7 space-y-6 shadow-soft">
            <div>
              <h4 className="text-[11px] font-semibold text-accent uppercase tracking-[0.2em] mb-3">Software</h4>
              <div className="flex flex-wrap gap-1.5">
                {profileData.software.map((s) => (
                  <span key={s} className="px-2.5 py-1 text-xs rounded-full bg-secondary text-secondary-foreground">{s}</span>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-[11px] font-semibold text-accent uppercase tracking-[0.2em] mb-3">Languages</h4>
              <div className="flex flex-wrap gap-1.5">
                {profileData.languages.map((l) => (
                  <span key={l} className="px-2.5 py-1 text-xs rounded-full bg-secondary text-secondary-foreground">{l}</span>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-[11px] font-semibold text-accent uppercase tracking-[0.2em] mb-3">Focus Areas</h4>
              <div className="flex flex-wrap gap-1.5">
                {profileData.interests.map((i) => (
                  <span key={i} className="px-2.5 py-1 text-xs rounded-full bg-secondary text-secondary-foreground">{i}</span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default AboutSection;
