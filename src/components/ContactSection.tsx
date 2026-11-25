import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Send, MessageCircle } from "lucide-react";
import { useState } from "react";

const projectTypes = ["Structural Design", "Site Investigation", "Project Management", "Peer Review", "Consultancy", "Other"];

const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 flex flex-col items-center"
        >
          <span className="eyebrow mb-4">Contact</span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Let's Build Something</h2>
          <p className="text-muted-foreground max-w-lg">
            Available for structural consultancy, project management, and engineering engagements across East Africa and internationally.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-5"
          >
            {[
              { icon: Mail, label: "Email", value: "rodcheruyot@gmail.com", href: "mailto:rodcheruyot@gmail.com" },
              { icon: Phone, label: "Phone", value: "+254 702 034000", href: "tel:+254702034000" },
              { icon: MessageCircle, label: "WhatsApp", value: "+254 702 034000", href: "https://wa.me/254702034000" },
              { icon: MapPin, label: "Location", value: "Nairobi, Kenya" },
              { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/rodrickcheruiyot", href: "https://linkedin.com/in/rodrickcheruiyot" },
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                  <item.icon className="text-accent" size={18} />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">{item.label}</p>
                  {item.href ? (
                    <a href={item.href} className="text-foreground font-medium hover:text-accent transition-colors">{item.value}</a>
                  ) : (
                    <p className="text-foreground font-medium">{item.value}</p>
                  )}
                </div>
              </div>
            ))}
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            {submitted ? (
              <div className="bg-accent/10 border border-accent/30 rounded-2xl p-10 text-center shadow-soft">
                <Send className="text-accent mx-auto mb-3" size={28} />
                <p className="font-display text-lg font-bold text-foreground">Message Sent!</p>
                <p className="text-sm text-muted-foreground">Thank you — I'll get back to you shortly.</p>
              </div>
            ) : (
              <div className="bg-card border border-border rounded-2xl p-6 md:p-7 space-y-4 shadow-soft">
                <div className="grid grid-cols-2 gap-3">
                  <input type="text" placeholder="Your Name" required className="w-full px-4 py-3 bg-background border border-border rounded-xl text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all" />
                  <input type="email" placeholder="Email Address" required className="w-full px-4 py-3 bg-background border border-border rounded-xl text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all" />
                </div>
                <select defaultValue="" className="w-full px-4 py-3 bg-background border border-border rounded-xl text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all">
                  <option value="" disabled>Select Project Type</option>
                  {projectTypes.map((type) => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
                <input type="text" placeholder="Subject" className="w-full px-4 py-3 bg-background border border-border rounded-xl text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all" />
                <textarea placeholder="Your Message" rows={5} required className="w-full px-4 py-3 bg-background border border-border rounded-xl text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent resize-none transition-all" />
                <button type="submit" className="w-full py-3 bg-accent text-accent-foreground font-semibold rounded-xl hover:shadow-elegant hover:-translate-y-0.5 transition-all">
                  Send Message
                </button>
              </div>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
