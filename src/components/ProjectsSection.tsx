import { motion } from "framer-motion";
import { MapPin, ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { projects } from "@/data/projects";

const categories = [
  "All",
  ...Array.from(new Set(projects.map((p) => p.category))),
];

const ProjectsSection = () => {
  const [active, setActive] = useState("All");
  const filtered =
    active === "All" ? projects : projects.filter((p) => p.category === active);
  const featured = filtered.find((p) => p.featured);
  const rest = filtered.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-24 md:py-32 bg-section-alt">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 flex flex-col items-center">
          <span className="eyebrow mb-4">Portfolio</span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Selected Projects
          </h2>
          <p className="text-muted-foreground max-w-xl">
            Infrastructure that defines skylines and connects communities.
          </p>
        </motion.div>

        {/* Category filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-1.5 text-sm rounded-full transition-all ${
                active === cat
                  ? "bg-accent text-accent-foreground shadow-soft"
                  : "bg-card border border-border text-foreground hover:border-accent/40"
              }`}>
              {cat}
            </button>
          ))}
        </div>

        {/* Featured project — full width */}
        {featured && (
          <motion.div
            key={featured.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6 md:mb-8">
            <Link
              to={`/projects/${featured.slug}`}
              className="group block bg-card border border-border rounded-2xl overflow-hidden hover:shadow-elegant hover:-translate-y-1 transition-all duration-300">
              <div className="grid md:grid-cols-2">
                <div className="relative h-64 md:h-96 overflow-hidden">
                  <img
                    src={featured.images[0]}
                    alt={featured.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <span className="absolute top-3 left-3 px-3 py-1 text-xs font-semibold bg-accent text-accent-foreground rounded-full">
                    {featured.category}
                  </span>
                </div>
                <div className="p-6 md:p-10 flex flex-col justify-center">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                    <MapPin size={12} /> {featured.location} · {featured.year}
                  </div>
                  <h3 className="font-display text-xl md:text-3xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors flex items-center gap-2">
                    {featured.title}{" "}
                    <ArrowUpRight
                      size={20}
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-4">
                    {featured.description}
                  </p>
                  <p className="text-xs font-semibold text-accent">
                    {featured.metrics}
                  </p>
                </div>
              </div>
            </Link>
          </motion.div>
        )}

        {/* Project grid — narrower cards, taller images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto">
          {(featured ? rest : filtered).map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}>
              <Link
                to={`/projects/${project.slug}`}
                className="group block bg-card border border-border rounded-2xl overflow-hidden hover:shadow-elegant hover:-translate-y-1 transition-all duration-300 h-full">
                {/* Tall image — ~65% of card height */}
                <div className="relative h-64 md:h-72 overflow-hidden">
                  <img
                    src={project.images[0]}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <span className="absolute top-2 left-2 md:top-3 md:left-3 px-2 md:px-3 py-1 text-[10px] md:text-xs font-semibold bg-accent text-accent-foreground rounded-full">
                    {project.category}
                  </span>
                </div>

                {/* Compact text below */}
                <div className="p-3 md:p-5">
                  <div className="flex items-center gap-1 text-[10px] md:text-xs text-muted-foreground mb-1.5">
                    <MapPin size={10} className="md:w-3 md:h-3" />
                    {project.location} · {project.year}
                  </div>
                  <h3 className="font-display text-sm md:text-base font-bold text-foreground mb-1 group-hover:text-accent transition-colors flex items-center gap-1">
                    {project.title}
                    <ArrowUpRight
                      size={14}
                      className="opacity-0 group-hover:opacity-100 transition-opacity hidden md:inline shrink-0"
                    />
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2 mb-2">
                    {project.description}
                  </p>
                  <p className="text-[10px] md:text-xs font-semibold text-accent">
                    {project.metrics}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
