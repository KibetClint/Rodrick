import { motion } from "framer-motion";
import { GraduationCap, ShieldCheck, Award } from "lucide-react";

const education = [
  { degree: "MSc Civil Engineering (Transportation)", institution: "Pan African University (PAUSTI)", year: "2023 – 2025" },
  { degree: "BSc Civil & Structural Engineering — First Class Honours", institution: "Moi University", year: "2014 – 2019" },
  { degree: "KCSE Grade A", institution: "Litein High School", year: "2010 – 2013" },
];

const memberships = [
  { title: "Engineers Board of Kenya (EBK)", detail: "Graduate Engineer · Membership No: G 20311" },
  { title: "Institution of Engineers of Kenya (IEK)", detail: "Graduate Member · Membership No: G 9284" },
];

const certifications = [
  { title: "Microsoft Project", issuer: "Project Management", year: "—" },
];

const CredentialsSection = () => (
  <section id="credentials" className="py-24 md:py-32 bg-section-alt">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16 flex flex-col items-center"
      >
        <span className="eyebrow mb-4">Credentials</span>
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Qualifications & Recognition</h2>
        <p className="text-muted-foreground max-w-xl">Education, professional memberships, and certifications.</p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <div className="flex items-center gap-2 mb-6">
            <GraduationCap className="text-accent" size={22} />
            <h3 className="font-display text-xl font-bold text-foreground">Education</h3>
          </div>
          <div className="space-y-4">
            {education.map((e) => (
              <div key={e.degree} className="bg-card border border-border rounded-2xl p-5 shadow-soft">
                <p className="text-xs font-semibold text-accent mb-1">{e.year}</p>
                <h4 className="font-display text-base font-bold text-foreground">{e.degree}</h4>
                <p className="text-sm text-muted-foreground">{e.institution}</p>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-2 mt-8 mb-6">
            <ShieldCheck className="text-accent" size={22} />
            <h3 className="font-display text-xl font-bold text-foreground">Professional Memberships</h3>
          </div>
          <div className="space-y-3">
            {memberships.map((m) => (
              <div key={m.title} className="bg-card border border-border rounded-2xl p-5 shadow-soft">
                <h4 className="font-display text-sm font-bold text-foreground">{m.title}</h4>
                <p className="text-sm text-muted-foreground">{m.detail}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <div className="flex items-center gap-2 mb-6">
            <Award className="text-accent" size={22} />
            <h3 className="font-display text-xl font-bold text-foreground">Core Skills</h3>
          </div>
          <div className="space-y-3">
            {[
              "Civil and Structural planning, conceptualization and design",
              "Traffic analysis and road safety analysis",
              "Transportation Planning",
              "Project management",
              "Highway and pavement design",
              "Civil and Structural drawing, drafting and detailing",
              "Supervision and inspection of construction works",
            ].map((skill) => (
              <div key={skill} className="bg-card border border-border rounded-2xl p-4 flex items-start gap-3 shadow-soft">
                <span className="mt-1.5 w-2 h-2 rounded-full bg-accent shrink-0" />
                <p className="text-sm text-foreground">{skill}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default CredentialsSection;
