import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import project5 from "@/assets/project-5.jpg";
import project6 from "@/assets/project-6.jpg";
import project7 from "@/assets/project-7.jpg";
import headshot from "@/assets/headshot.png";

const featuredProjects = [
  { src: project1, title: "Promenade Mall", location: "Mombasa, Kenya", category: "Commercial", description: "Multipurpose mall — concept & preliminary design, technical design of foundations, building frame, slabs, retaining walls, underground water tanks, and steel trusses." },
  { src: project2, title: "Reflection Villas", location: "Nairobi, Kenya", category: "Residential", description: "6-unit modern residential development — full structural design, concept through technical design of all RC, masonry and steel elements." },
  { src: project3, title: "Vision City", location: "Kigali, Rwanda", category: "Mixed-Use", description: "Major mixed-use urban development involving structural engineering, roads, drainage, and utility infrastructure." },
  { src: project4, title: "Erbil Airport Cargo Terminal", location: "Erbil, Iraq", category: "Aviation", description: "Air cargo terminal concept design — structural design and civil engineering works at Erbil International Airport." },
  { src: project5, title: "UGHE Campus", location: "Butaro, Rwanda", category: "Institutional", description: "University of Global Health Equity campus — structural and civil engineering for academic and residential facilities." },
  { src: project6, title: "Catchup", location: "Kigali, Rwanda", category: "Mixed-Use", description: "Mixed-use development featuring residential and commercial spaces with modern structural design and sustainable infrastructure." },
  { src: project7, title: "Kigali Finance Square", location: "Kigali, Rwanda", category: "Commercial", description: "28-storey office tower, 26-storey hotel tower, and 7-storey conference block with post-tension slabs and suspended swimming pool." },
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % featuredProjects.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const navigate = (dir: number) => {
    setCurrent((prev) => (prev + dir + featuredProjects.length) % featuredProjects.length);
  };

  return (
    <section className="relative bg-background">
      {/* Top hero area */}
      <div className="container mx-auto px-6 md:px-12 lg:px-20 pt-24 md:pt-32 pb-12 md:pb-16">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 md:gap-16">
          {/* Left — Text + mobile headshot */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="flex-1 w-full"
          >
            <div className="flex items-start justify-between gap-4">
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[1.1] mb-6">
                Hello, I'm{" "}
                <span className="text-gradient-gold">Rodrick!</span>
              </h1>

              {/* Mobile-only headshot (top-right, next to heading) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="md:hidden shrink-0"
              >
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-4 border-accent/30 bg-secondary overflow-hidden shadow-lg">
                  <img src={headshot} alt="Rodrick — Civil & Structural Engineer" className="w-full h-full object-cover" />
                </div>
              </motion.div>
            </div>

            <p className="text-muted-foreground text-base md:text-lg max-w-lg leading-relaxed">
              I am an <span className="text-foreground font-semibold underline decoration-accent underline-offset-4">innovative</span> civil
              & structural engineer skilled in{" "}
              <span className="text-foreground font-semibold underline decoration-accent underline-offset-4">designing</span> and{" "}
              <span className="text-foreground font-semibold underline decoration-accent underline-offset-4">delivering</span>{" "}
              resilient infrastructure. Check out my recent works below.
            </p>

            <div className="flex flex-wrap gap-3 mt-8">
              <a href="#contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent text-accent-foreground font-semibold text-sm tracking-wide hover:shadow-elegant hover:-translate-y-0.5 transition-all">
                Get in Touch
              </a>
              <a href="#projects" className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border text-foreground font-semibold text-sm tracking-wide hover:bg-secondary hover:border-accent/40 transition-all">
                View Projects
              </a>
            </div>
          </motion.div>

          {/* Desktop-only — Large circular headshot */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="hidden md:block shrink-0"
          >
            <div className="md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full border-4 border-accent/30 bg-secondary overflow-hidden shadow-lg">
              <img src={headshot} alt="Rodrick — Civil & Structural Engineer" className="w-full h-full object-cover" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Featured project slider */}
      <div className="bg-accent py-12 md:py-16">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            {/* Project image */}
            <div className="relative w-full md:w-[45%] shrink-0">
              <div className="relative rounded-2xl overflow-hidden shadow-elegant bg-card aspect-[4/3]">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={current}
                    src={featuredProjects[current].src}
                    alt={featuredProjects[current].title}
                    className="w-full h-full object-cover"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                  />
                </AnimatePresence>
                <span className="absolute top-3 left-3 px-3 py-1 text-xs font-bold bg-accent-foreground text-accent rounded-full shadow">
                  {featuredProjects[current].category}
                </span>
              </div>
            </div>

            {/* Project details */}
            <div className="flex-1">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  <p className="text-accent-foreground/60 text-sm font-medium mb-2">{featuredProjects[current].location}</p>
                  <h3 className="font-display text-3xl md:text-4xl font-bold text-accent-foreground mb-3">
                    {featuredProjects[current].title}
                  </h3>
                  <p className="text-accent-foreground/70 text-sm md:text-base leading-relaxed">
                    {featuredProjects[current].description}
                  </p>
                </motion.div>
              </AnimatePresence>

              {/* Navigation */}
              <div className="flex items-center gap-4 mt-6">
                <button
                  onClick={() => navigate(-1)}
                  className="w-10 h-10 rounded-full bg-accent-foreground/10 hover:bg-accent-foreground/20 flex items-center justify-center text-accent-foreground transition-colors"
                >
                  <ChevronLeft size={20} />
                </button>
                <div className="flex gap-2">
                  {featuredProjects.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrent(i)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        i === current ? "w-6 bg-accent-foreground" : "w-2 bg-accent-foreground/30"
                      }`}
                      aria-label={`View project ${i + 1}`}
                    />
                  ))}
                </div>
                <button
                  onClick={() => navigate(1)}
                  className="w-10 h-10 rounded-full bg-accent-foreground/10 hover:bg-accent-foreground/20 flex items-center justify-center text-accent-foreground transition-colors"
                >
                  <ChevronRight size={20} />
                </button>
              </div>

              <a
                href="#projects"
                className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-full bg-accent-foreground text-accent font-semibold text-sm tracking-wide hover:shadow-elegant hover:-translate-y-0.5 transition-all"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a href="#about" className="absolute bottom-6 left-1/2 -translate-x-1/2 text-muted-foreground/50 animate-bounce">
        <ArrowDown size={24} />
      </a>
    </section>
  );
};

export default HeroSection;
