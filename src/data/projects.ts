import project1 from "@/assets/p1.jpg";
import project11 from "@/assets/p11.png";
import project12 from "@/assets/p12.png";
import project16 from "@/assets/p16.png";
import project2 from "@/assets/p21.png";
import project22 from "@/assets/p22.png";
import project23 from "@/assets/p23.png";
import project24 from "@/assets/p24.png";
import project3 from "@/assets/p3.png";
import project31 from "@/assets/p31.jpeg";
import project32 from "@/assets/p32.jpeg";
import project33 from "@/assets/p33.jpeg";
import project34 from "@/assets/p34.jpeg";
import project35 from "@/assets/p35.jpeg";
import project36 from "@/assets/p36.jpeg";
import project4 from "@/assets/p4.png";
import project41 from "@/assets/p41.png";
import project42 from "@/assets/p42.png";
import project5 from "@/assets/p5.png";
import project51 from "@/assets/p51.png";
import project52 from "@/assets/p52.png";
import project53 from "@/assets/p53.png";
import project54 from "@/assets/p54.png";
import project6 from "@/assets/p6.png";
import project61 from "@/assets/p61.png";
import project62 from "@/assets/p62.png";
import project63 from "@/assets/p63.png";
import project7 from "@/assets/p7.png";
import project71 from "@/assets/p71.png";
import project8 from "@/assets/p8.png";
import project81 from "@/assets/p81.png";

export type Project = {
  slug: string;
  images: string[];
  title: string;
  category: string;
  location: string;
  year: string;
  startDate: string;
  completionDate: string;
  status: "Completed" | "Ongoing" | "On Hold";
  client: string;
  role: string;
  duration: string;
  teamSize: string;
  description: string;
  overview: string;
  scope: string[];
  structuralSystems: string[];
  metrics: string;
  keyMetrics: { label: string; value: string }[];
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "promenade-mall-mombasa",
    images: [project1, project11, project12, project16],
    title: "Promenade Mall Mombasa",
    category: "Commercial",
    location: "Mombasa, Kenya",
    year: "2022",
    startDate: "March 2021",
    completionDate: "November 2022",
    status: "Completed",
    client: "Promenade Developments Ltd.",
    role: "Lead Structural Engineer",
    duration: "20 months",
    teamSize: "12 engineers",
    description:
      "Multipurpose mall — concept & preliminary design, technical design of foundations, building frame, slabs, retaining walls, underground water tanks, waste water treatment, steel trusses, purlins, and shop front support systems.",
    overview:
      "A landmark coastal retail destination integrating four levels of premium retail and office space. The design balances coastal climate resilience with elegant architectural expression, providing a flexible structural grid that supports varied tenant fit-outs.",
    scope: [
      "Concept and preliminary structural design",
      "Reinforced concrete foundations and superstructure",
      "Underground water tanks and waste water treatment structures",
      "Steel roof trusses, purlins and shop front support",
      "Retaining wall systems and basement waterproofing strategy",
    ],
    structuralSystems: [
      "Reinforced Concrete Frame",
      "Steel Roof Trusses",
      "Raft Foundations",
    ],
    metrics: "15,000 m² GFA · 4 Levels · Retail & Office",
    keyMetrics: [
      { label: "Gross Floor Area", value: "15,000 m²" },
      { label: "Levels", value: "4" },
      { label: "Programme", value: "Retail & Office" },
      { label: "Foundation", value: "Raft" },
    ],
    featured: true,
  },
  {
    slug: "reflection-villas-lavington",
    images: [project2, project22, project23, project24],
    title: "Reflection Villas Lavington",
    category: "Residential",
    location: "Nairobi, Kenya",
    year: "2023",
    startDate: "January 2022",
    completionDate: "August 2023",
    status: "Completed",
    client: "Reflection Properties",
    role: "Structural Engineer of Record",
    duration: "19 months",
    teamSize: "6 engineers",
    description:
      "6-unit modern residential development — full structural design, concept through technical design of all RC, masonry and steel elements, construction drawing supervision, and site inspection.",
    overview:
      "An exclusive gated community of six contemporary villas in Lavington, Nairobi. The structural design emphasises open-plan layouts and double-height living spaces while maintaining cost efficiency and constructability.",
    scope: [
      "Full structural design from concept to technical drawings",
      "RC, masonry and steel element design",
      "Construction drawing review and supervision",
      "Periodic site inspections and quality assurance",
    ],
    structuralSystems: ["RC Frame", "Masonry Infill", "Steel Roof"],
    metrics: "6 Units · Premium Finish · Gated Community",
    keyMetrics: [
      { label: "Units", value: "6" },
      { label: "Finish", value: "Premium" },
      { label: "Type", value: "Gated Community" },
      { label: "Storeys", value: "2 + Mezzanine" },
    ],
  },
  {
    slug: "vision-city-rwanda",
    images: [
      project3,
      project31,
      project32,
      project33,
      project34,
      project35,
      project36,
    ],
    title: "Vision City Rwanda",
    category: "Mixed-Use",
    location: "Kigali, Rwanda",
    year: "2021",
    startDate: "June 2019",
    completionDate: "December 2021",
    status: "Completed",
    client: "Government of Rwanda — Vision City",
    role: "Structural & Civil Consultant",
    duration: "30 months",
    teamSize: "20+ engineers",
    description:
      "Major mixed-use urban development project involving structural engineering, roads, drainage, and utility infrastructure.",
    overview:
      "Vision City is a flagship master-planned community in Kigali. The engineering team delivered structural design for residential blocks alongside large-scale civil infrastructure: roads, drainage, water and waste networks.",
    scope: [
      "Structural engineering for residential blocks",
      "Road geometric and pavement design",
      "Storm water drainage and detention systems",
      "Water reticulation and waste water utilities",
    ],
    structuralSystems: [
      "RC Frame",
      "Composite Slabs",
      "Reinforced Earth Retaining Walls",
    ],
    metrics: "Master Plan · Multi-Phase · Urban Scale",
    keyMetrics: [
      { label: "Scale", value: "Urban" },
      { label: "Phases", value: "Multi-Phase" },
      { label: "Discipline", value: "Structures + Civils" },
      { label: "Scope", value: "Master Plan" },
    ],
  },
  {
    slug: "erbil-airport-cargo-terminal",
    images: [project4, project41, project42],
    title: "Erbil International Airport Air Cargo Terminal",
    category: "Aviation",
    location: "Erbil, Iraq",
    year: "2023",
    startDate: "April 2022",
    completionDate: "October 2023",
    status: "Completed",
    client: "Erbil International Airport Authority",
    role: "Structural & Civil Designer",
    duration: "18 months",
    teamSize: "10 engineers",
    description:
      "Air cargo terminal concept design — structural design and civil engineering works at Erbil International Airport.",
    overview:
      "A high-throughput air cargo terminal designed for long clear spans, heavy equipment loads and stringent airside operational requirements. The steel-framed envelope sits over a reinforced concrete substructure tuned for local seismic and soil conditions.",
    scope: [
      "Concept and detailed structural design of cargo terminal",
      "Long-span steel roof structure",
      "Heavy-duty industrial slab-on-grade",
      "Airside civil works and pavement coordination",
    ],
    structuralSystems: [
      "Long-span Steel Frame",
      "RC Substructure",
      "Industrial Slab-on-Grade",
    ],
    metrics: "Steel Structure · Airside Works · 8,000 m²",
    keyMetrics: [
      { label: "Floor Area", value: "8,000 m²" },
      { label: "Structure", value: "Steel" },
      { label: "Span", value: "Long-span Roof" },
      { label: "Sector", value: "Aviation" },
    ],
  },
  {
    slug: "ughe-rwanda",
    images: [project5, project51, project52, project53, project54],
    title: "UGHE Rwanda",
    category: "Institutional",
    location: "Butaro, Rwanda",
    year: "2020",
    startDate: "February 2018",
    completionDate: "September 2020",
    status: "Completed",
    client: "University of Global Health Equity",
    role: "Structural Engineer",
    duration: "31 months",
    teamSize: "15 engineers",
    description:
      "University of Global Health Equity campus development — structural and civil engineering for academic and residential facilities.",
    overview:
      "A purpose-built campus on a hillside site in Butaro. Engineering challenges included steep terrain, locally sourced stone construction, and seamless integration of academic, healthcare and residential typologies.",
    scope: [
      "Structural design of academic blocks, dormitories and clinic",
      "Hillside retaining structures and site civils",
      "Locally sourced stone and RC composite design",
      "Sustainable construction detailing",
    ],
    structuralSystems: [
      "RC Frame",
      "Stone Masonry",
      "Hillside Retaining Walls",
    ],
    metrics: "Campus Scale · Academic · Healthcare",
    keyMetrics: [
      { label: "Scale", value: "Campus" },
      { label: "Use", value: "Academic + Health" },
      { label: "Site", value: "Hillside" },
      { label: "Materials", value: "Local Stone + RC" },
    ],
  },
  {
    slug: "catchup-rwanda",
    images: [project6, project61, project62, project63],
    title: "Catchup Rwanda",
    category: "Mixed-Use",
    location: "Kigali, Rwanda",
    year: "2024",
    startDate: "May 2023",
    completionDate: "Ongoing — expected Q4 2025",
    status: "Ongoing",
    client: "Catchup Holdings",
    role: "Lead Structural Engineer",
    duration: "Ongoing",
    teamSize: "8 engineers",
    description:
      "Mixed-use development project in Kigali featuring residential and commercial spaces with modern structural design and sustainable infrastructure.",
    overview:
      "A contemporary multi-storey mixed-use block combining ground-floor retail with upper-level residential apartments. The structural strategy prioritises construction speed and material efficiency.",
    scope: [
      "Concept and technical structural design",
      "Sustainable foundation strategy",
      "Coordination with MEP and architecture",
      "Construction stage support",
    ],
    structuralSystems: ["RC Flat Slabs", "Shear Walls", "Pad Foundations"],
    metrics: "Mixed-Use · Multi-Storey · Urban Development",
    keyMetrics: [
      { label: "Programme", value: "Mixed-Use" },
      { label: "Type", value: "Multi-Storey" },
      { label: "Stage", value: "Construction" },
      { label: "Sustainability", value: "Yes" },
    ],
  },
  {
    slug: "kigali-finance-business-square",
    images: [project7, project71],
    title: "Kigali Finance & Business Square",
    category: "Commercial",
    location: "Kigali, Rwanda",
    year: "2022",
    startDate: "August 2019",
    completionDate: "December 2022",
    status: "Completed",
    client: "Kigali Finance Holdings",
    role: "Senior Structural Engineer",
    duration: "40 months",
    teamSize: "25+ engineers",
    description:
      "Highrise development: 28-storey office tower, 26-storey hotel tower, and 7-storey conference block. Post-tension slabs, detailed design of columns, bases, flat slabs, retaining walls, shear walls, ramps, staircases, and suspended swimming pool.",
    overview:
      "A landmark twin-tower mixed-use complex in central Kigali combining premium office, hospitality and conference facilities. The post-tensioned floor plates enable column-free interiors, while a coupled shear-wall core resists lateral loads.",
    scope: [
      "Post-tensioned flat slab design",
      "Column, base and shear wall detailed design",
      "Retaining walls, ramps and staircases",
      "Suspended swimming pool structural design",
      "Construction stage engineering and review",
    ],
    structuralSystems: [
      "Post-Tensioned Slabs",
      "RC Shear Wall Core",
      "Deep Pile Foundations",
    ],
    metrics: "28 Storeys · Post-Tension · Twin Towers",
    keyMetrics: [
      { label: "Tallest Tower", value: "28 Storeys" },
      { label: "Hotel Tower", value: "26 Storeys" },
      { label: "Conference Block", value: "7 Storeys" },
      { label: "Slab System", value: "Post-Tensioned" },
    ],
  },
  {
    slug: "the-mist-tilisi",
    images: [project8, project81],
    title: "The Mist Tilisi",
    category: "Residential",
    location: "Nairobi, Kenya",
    year: "2022",
    startDate: "January 2021",
    completionDate: "December 2022",
    status: "Ongoing",
    client: "Tilisi Developments",
    role: "Structural Engineer of Record",
    duration: "24 months",
    teamSize: "8 engineers",
    description:
      "The Mist is an architectural masterpiece with picturesque facade and communal amenities blending meticulously with 6 different types of 3 & 4 bedroom Villas crafted to offer a lavish living experience.",
    overview:
      "The Mist Tilisi is a premium villa development offering six distinct villa typologies, each designed to deliver a lavish residential experience. The structural design accommodates varied floor plan configurations across the 3 and 4 bedroom units while ensuring a consistent architectural language through the picturesque facade and shared communal amenities.",
    scope: [
      "Full structural design across 6 villa typologies",
      "RC frame and masonry structural systems",
      "Foundation design for varied unit configurations",
      "Communal amenity structures including pool and landscaping support",
      "Construction drawing production and site inspection",
    ],
    structuralSystems: ["RC Frame", "Masonry Infill", "Strip Foundations"],
    metrics: "6 Villa Types · 3 & 4 Bed · Luxury Residential",
    keyMetrics: [
      { label: "Villa Types", value: "6" },
      { label: "Bedrooms", value: "3 & 4 Bed" },
      { label: "Programme", value: "Luxury Residential" },
      { label: "Amenities", value: "Communal" },
    ],
  },
];

export const getProjectBySlug = (slug: string) =>
  projects.find((p) => p.slug === slug);
