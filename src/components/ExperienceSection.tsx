import { motion } from "framer-motion";
import { Briefcase, GraduationCap, ShieldCheck } from "lucide-react";

const experience = [
  {
    role: "Managing Director",
    company: "Brightspace Engineering",
    period: "2024 – Present",
    highlights: ["Overall company leadership and strategic direction", "Business development and client acquisition", "Overseeing engineering projects and team management"],
  },
  {
    role: "Civil & Structural Engineer",
    company: "Metrix Integrated Consultancy",
    period: "Jun 2021 – 2024",
    highlights: [
      "Design and supervision of engineering drawings, shop drawings and bar bending schedules",
      "Structural design of commercial, residential, and industrial projects",
      "Construction supervision, site inspections, and project coordination",
      "Quality assurance/control and contractor shop drawing review",
    ],
  },
  {
    role: "Graduate Civil & Structural Engineer",
    company: "Multiscope Consulting Engineers",
    period: "Aug 2020 – May 2021",
    highlights: [
      "Conceptualization and preliminary design of buildings",
      "Analysis and detailed design of structural elements",
      "Preparation of structural drawings, details, and bar bending schedules",
    ],
  },
  {
    role: "Intern Civil & Structural Engineer",
    company: "Multiscope Consulting Engineers",
    period: "Aug 2019 – Aug 2020",
    highlights: [
      "Structural analysis and design of residential and office buildings",
      "Site inspections during construction at Alliance High School, UN Nairobi",
      "Concept and detailed design of Karen Hills Estate residential houses",
    ],
  },
];

const education = [
  { degree: "MSc Civil Engineering (Transportation)", school: "Pan African University (PAUSTI)", year: "2023 – 2025" },
  { degree: "BSc Civil & Structural Engineering — First Class Honours", school: "Moi University", year: "2014 – 2019" },
];

const ExperienceSection = () => (
  <section id="experience" className="py-24 md:py-32 bg-background">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16 flex flex-col items-center"
      >
        <span className="eyebrow mb-4">Journey</span>
        <h2 className="text-4xl md:text-5xl font-bold text-foreground">Experience & Education</h2>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
        <div>
          <div className="flex items-center gap-2 mb-8">
            <Briefcase className="text-accent" size={22} />
            <h3 className="font-display text-2xl font-bold text-foreground">Work Experience</h3>
          </div>
          <div className="space-y-8 relative before:absolute before:left-3 before:top-2 before:bottom-2 before:w-px before:bg-border">
            {experience.map((item, i) => (
              <motion.div
                key={item.company + item.period}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="pl-10 relative"
              >
                <div className="absolute left-1.5 top-1.5 w-3 h-3 rounded-full bg-accent" />
                <p className="text-xs font-semibold text-accent mb-1">{item.period}</p>
                <h4 className="font-display text-lg font-bold text-foreground">{item.role}</h4>
                <p className="text-sm text-muted-foreground mb-2">{item.company}</p>
                <ul className="space-y-1">
                  {item.highlights.map((h) => (
                    <li key={h} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent/50 shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-center gap-2 mb-8">
            <GraduationCap className="text-accent" size={22} />
            <h3 className="font-display text-2xl font-bold text-foreground">Education</h3>
          </div>
          <div className="space-y-4">
            {education.map((item, i) => (
              <motion.div
                key={item.degree}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="bg-card border border-border rounded-2xl p-5 shadow-soft"
              >
                <p className="text-xs font-semibold text-accent mb-1">{item.year}</p>
                <h4 className="font-display text-base font-bold text-foreground">{item.degree}</h4>
                <p className="text-sm text-muted-foreground">{item.school}</p>
              </motion.div>
            ))}
          </div>

          <div className="flex items-center gap-2 mt-10 mb-6">
            <ShieldCheck className="text-accent" size={22} />
            <h3 className="font-display text-2xl font-bold text-foreground">Registrations</h3>
          </div>
          <div className="space-y-3">
            <div className="bg-card border border-border rounded-2xl p-5 shadow-soft">
              <p className="text-sm text-foreground font-semibold">Engineers Board of Kenya (EBK)</p>
              <p className="text-sm text-muted-foreground">Graduate Engineer · G 20311 · Since Jan 2022</p>
            </div>
            <div className="bg-card border border-border rounded-2xl p-5 shadow-soft">
              <p className="text-sm text-foreground font-semibold">Institution of Engineers of Kenya (IEK)</p>
              <p className="text-sm text-muted-foreground">Graduate Member · G 9284 · Since May 2022</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ExperienceSection;
