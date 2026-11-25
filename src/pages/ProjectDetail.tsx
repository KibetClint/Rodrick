import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  MapPin,
  Users,
  Briefcase,
  Clock,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { projects, getProjectBySlug } from "@/data/projects";

const useImageOrientation = (src: string) => {
  const [landscape, setLandscape] = useState<boolean | null>(null);

  useEffect(() => {
    if (!src) return;
    setLandscape(null); // reset while loading
    const img = new Image();
    img.onload = () => setLandscape(img.naturalWidth >= img.naturalHeight);
    img.src = src;
  }, [src]);

  return landscape;
};

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getProjectBySlug(slug) : undefined;
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
    setActiveImage(0);
  }, [slug]);

  const currentSrc = project?.images[activeImage] ?? "";
  const isLandscape = useImageOrientation(currentSrc);

  if (!project) {
    return (
      <>
        <Navbar />
        <section className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
          <h1 className="font-display text-4xl font-bold text-foreground mb-4">
            Project not found
          </h1>
          <p className="text-muted-foreground mb-8">
            The project you're looking for doesn't exist.
          </p>
          <Link
            to="/#projects"
            className="px-6 py-2.5 rounded-full bg-accent text-accent-foreground font-semibold">
            Back to projects
          </Link>
        </section>
        <Footer />
      </>
    );
  }

  const idx = projects.findIndex((p) => p.slug === project.slug);
  const prev = projects[(idx - 1 + projects.length) % projects.length];
  const next = projects[(idx + 1) % projects.length];

  const navigateImage = (dir: number) => {
    setActiveImage(
      (i) => (i + dir + project.images.length) % project.images.length,
    );
  };

  // Landscape → wide container + wide aspect ratio
  // Portrait  → narrow container + tall aspect ratio
  const containerClass =
    isLandscape === false ? "max-w-xl mx-auto" : "max-w-5xl mx-auto";
  const aspectClass =
    isLandscape === false
      ? "aspect-[4/5] md:aspect-[3/4]"
      : "aspect-[16/9] md:aspect-[21/9]";

  return (
    <>
      <Navbar />
      <article className="bg-background">
        {/* Hero */}
        <section className="relative pt-28 md:pt-32 pb-12 bg-section-alt border-b border-border">
          <div className="container mx-auto px-4">
            <Link
              to="/#projects"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors mb-6">
              <ArrowLeft size={16} /> Back to projects
            </Link>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}>
              <span className="eyebrow mb-4 inline-block">
                {project.category}
              </span>
              <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-4 leading-tight">
                {project.title}
              </h1>
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-1.5">
                  <MapPin size={14} /> {project.location}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Calendar size={14} /> {project.year}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <CheckCircle2
                    size={14}
                    className={
                      project.status === "Completed" ? "text-accent" : ""
                    }
                  />
                  {project.status}
                </span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Gallery */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <motion.div
              layout
              transition={{ layout: { duration: 0.35, ease: "easeInOut" } }}
              className={`relative rounded-2xl overflow-hidden shadow-elegant bg-card transition-all duration-300 ${containerClass}`}>
              {/* Main image */}
              <div
                className={`relative overflow-hidden transition-all duration-300 ${aspectClass} ${
                  isLandscape === null ? "opacity-0" : "opacity-100"
                }`}>
                <motion.img
                  key={activeImage}
                  src={project.images[activeImage]}
                  alt={`${project.title} — view ${activeImage + 1}`}
                  className="w-full h-full object-cover"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4 }}
                />
                {project.images.length > 1 && (
                  <>
                    <button
                      onClick={() => navigateImage(-1)}
                      aria-label="Previous image"
                      className="absolute left-3 md:left-5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 backdrop-blur flex items-center justify-center text-foreground hover:bg-background transition-colors">
                      <ChevronLeft size={20} />
                    </button>
                    <button
                      onClick={() => navigateImage(1)}
                      aria-label="Next image"
                      className="absolute right-3 md:right-5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 backdrop-blur flex items-center justify-center text-foreground hover:bg-background transition-colors">
                      <ChevronRight size={20} />
                    </button>
                    <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-full bg-background/80 text-foreground text-xs font-medium">
                      {activeImage + 1} / {project.images.length}
                    </div>
                  </>
                )}
              </div>

              {/* Thumbnails — each sizes itself to its own orientation */}
              {project.images.length > 1 && (
                <div className="flex gap-2 overflow-x-auto p-3 md:p-4 bg-card border-t border-border">
                  {project.images.map((img, i) => (
                    <ThumbnailButton
                      key={i}
                      src={img}
                      active={activeImage === i}
                      onClick={() => setActiveImage(i)}
                    />
                  ))}
                </div>
              )}
            </motion.div>
          </div>
        </section>

        {/* Body */}
        <section className="pb-16 md:pb-24">
          <div className="container mx-auto px-4 grid lg:grid-cols-3 gap-10">
            {/* Main column */}
            <div className="lg:col-span-2 space-y-10">
              <div>
                <span className="eyebrow mb-3 inline-block">Overview</span>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Project summary
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {project.overview}
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div>
                <span className="eyebrow mb-3 inline-block">Scope of work</span>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                  What was delivered
                </h2>
                <ul className="space-y-3">
                  {project.scope.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-muted-foreground">
                      <CheckCircle2
                        size={18}
                        className="text-accent mt-0.5 shrink-0"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <span className="eyebrow mb-3 inline-block">
                  Structural systems
                </span>
                <div className="flex flex-wrap gap-2">
                  {project.structuralSystems.map((s) => (
                    <span
                      key={s}
                      className="px-3 py-1.5 text-sm rounded-full bg-card border border-border text-foreground">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <span className="eyebrow mb-3 inline-block">Key metrics</span>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {project.keyMetrics.map((m) => (
                    <div
                      key={m.label}
                      className="bg-card border border-border rounded-xl p-4 text-center">
                      <div className="font-display text-lg md:text-xl font-bold text-foreground">
                        {m.value}
                      </div>
                      <div className="text-[11px] uppercase tracking-wider text-muted-foreground mt-1">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="bg-card border border-border rounded-2xl p-6 shadow-soft sticky top-24">
                <h3 className="font-display text-lg font-bold text-foreground mb-5">
                  Project facts
                </h3>
                <dl className="space-y-4 text-sm">
                  <Fact
                    icon={<Calendar size={16} />}
                    label="Started"
                    value={project.startDate}
                  />
                  <Fact
                    icon={<CheckCircle2 size={16} />}
                    label="Completion"
                    value={project.completionDate}
                  />
                  <Fact
                    icon={<Clock size={16} />}
                    label="Duration"
                    value={project.duration}
                  />
                  <Fact
                    icon={<MapPin size={16} />}
                    label="Location"
                    value={project.location}
                  />
                  <Fact
                    icon={<Briefcase size={16} />}
                    label="Client"
                    value={project.client}
                  />
                  <Fact
                    icon={<Users size={16} />}
                    label="Team"
                    value={project.teamSize}
                  />
                  <Fact
                    icon={<Briefcase size={16} />}
                    label="Role"
                    value={project.role}
                  />
                </dl>
                <Link
                  to="/#contact"
                  className="mt-6 w-full inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-accent text-accent-foreground font-semibold text-sm hover:-translate-y-0.5 transition-all">
                  Let's discuss your project
                </Link>
              </div>
            </aside>
          </div>
        </section>

        {/* Prev / Next */}
        <section className="border-t border-border bg-section-alt py-10">
          <div className="container mx-auto px-4 grid sm:grid-cols-2 gap-4">
            <Link
              to={`/projects/${prev.slug}`}
              className="group bg-card border border-border rounded-2xl p-5 hover:shadow-elegant transition-all">
              <div className="flex items-center gap-2 text-xs text-muted-foreground mb-1">
                <ArrowLeft size={14} /> Previous
              </div>
              <div className="font-display text-lg font-bold text-foreground group-hover:text-accent transition-colors">
                {prev.title}
              </div>
            </Link>
            <Link
              to={`/projects/${next.slug}`}
              className="group bg-card border border-border rounded-2xl p-5 hover:shadow-elegant transition-all sm:text-right">
              <div className="flex items-center gap-2 text-xs text-muted-foreground mb-1 sm:justify-end">
                Next <ArrowRight size={14} />
              </div>
              <div className="font-display text-lg font-bold text-foreground group-hover:text-accent transition-colors">
                {next.title}
              </div>
            </Link>
          </div>
        </section>
      </article>
      <Footer />
    </>
  );
};

/** Thumbnail that independently detects and matches its own image orientation */
const ThumbnailButton = ({
  src,
  active,
  onClick,
}: {
  src: string;
  active: boolean;
  onClick: () => void;
}) => {
  const isLandscape = useImageOrientation(src);
  const sizeClass =
    isLandscape === false
      ? "w-14 h-20 md:w-16 md:h-24" // portrait thumbnail
      : "w-24 h-16 md:w-28 md:h-20"; // landscape thumbnail (also covers null/loading)

  return (
    <button
      onClick={onClick}
      className={`shrink-0 rounded-md overflow-hidden border-2 transition-all ${sizeClass} ${
        active
          ? "border-accent scale-105"
          : "border-border opacity-60 hover:opacity-100"
      }`}>
      <img src={src} alt="" className="w-full h-full object-cover" />
    </button>
  );
};

const Fact = ({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) => (
  <div className="flex items-start gap-3">
    <span className="text-accent mt-0.5">{icon}</span>
    <div className="flex-1">
      <dt className="text-[11px] uppercase tracking-wider text-muted-foreground">
        {label}
      </dt>
      <dd className="text-foreground font-medium">{value}</dd>
    </div>
  </div>
);

export default ProjectDetail;
