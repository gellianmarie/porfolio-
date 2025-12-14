import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import {
  useEffect,
  useState,
  type SyntheticEvent,
} from "react";
import { SectionHeading } from "./SectionHeading";
import { Button } from "./ui/button";

// Auto-import all journal images
const journalModules = import.meta.glob(
  "/src/assets/journal*.jpg",
  { eager: true }
) as Record<string, { default: string }>;

const journalUrls = Object.keys(journalModules)
  .sort()
  .map((k) => journalModules[k].default);

type Reflection = {
  id: number;
  quote: string;
  context: string;
  observation: string;
  insight: string;
};

const reflections: Reflection[] = [
  {
    id: 1,
    quote:
      "UP BUSINESS INCUBATOR FOR IT",
    context: "CEBU",
    observation: "The UP Business Incubator for IT in Cebu helps new business to grow especially in tech and creative fields. Mr. Jason Nieva, the manager, explained how startups often lack business skills and proper workspace. They offer support like mentoring, training, and help with finance and intellectual property some startups like Arka, OMG, Feme-Nova, and student-led projects. The incubator also runs internship programs across Cebu, Visayas, and Mindanao.",
    insight: "Startups need help beyond just ideas because staring a business is hard without guidance and resources. Good ideas often come from daily frustrations or talking to people with different vews. The 3R's - Remix, Recombne, and Reinvent, are smart ways to create new products or services. AI tools can make work easier by helping with coding data and personalized systems. Building a startups can turn school projects into real world impact and future careers.",
  },
  {
    id: 2,
    quote:
      "DYNATA PHILIPPINES, INC.",
    context: "CEBU",
    observation: "Dynata Philippines, Inc. is a market research company that collects data to help businesses make informed decisions. Mr. Anton Lim and Ms. Valerie discussed workplace safety, and facility operations. They explained OSH Law (RA11058) and related DO like DO198-19 and DO252-25 safety tips included hazard awareness, emegency procedures like RACE and having a GO-Bag. Dyanta evacuation plan uses color-coded flags for each floors. Sir Jake shared how their tech team supports global operations wth 24/7 system monitoring.",
    insight: "Workplace safety laws help protect employees from risks and hazards. Knowing emergency procedure like RACE can save lives during fire incidents. A GO-Bag s important for quick evacuation during emergencies. Large companies like Dynata need strong IT systems and global support teams. Safety and tech operations work together to keep people and systems secure.",
  },
  {
    id: 3,
    quote:
      "RIVANT IT CEBU",
    context: "CEBU",
    observation:
      "Sir Kevin focuses on building innovative ways to further develop their skills. They provide lecture and onhand training in Cybersecurity, Network Engineering, Development.",
    insight: "Rivant IT Cebu focuses on building IT professionals by offering on-hand skills based training. Rivan IT Cebu teaches students by providing in-depth knowledge.",
  },
  {
    id: 4,
    quote:
      "MATA TECHNOLOGIES, INC.",
    context: "CEBU",
    observation: "Mr. Kemuel Tantuan introduced MATA Technologies, Inc. and explained the meaning behind its name. The Company offers creative and tech services lie AR/VR 360 media, e-commerce, and web development. They're worked with brands like kirstin ess hair. using platforms like WorkPress, Webflow, and Shopify. Their team uses programming languages, like Java, C++, Python, TypeScript, and JavaScript. They offer flexible internship with remote work options and a global innovative team.",
    insight: "MATA combines creativity and technology to build modern digital experiences. Honesty and integrity are core values in their work culture. They use various tools and platforms to meet different client needs. Tech careers can be flexible, remote, and open to diverse values. Innovation thrives when teams are global, creative, and open to new ideas.",
  },
  {
    id: 5,
    quote:
      "T.A.R.S.I.E.R. 117",
    context: "BOHOL",
    observation:
      "Tarsier 117 is a search and rescue unit in Bohol that helps people during emergencies. Tarsier 117 covers 47 muncipalities in Bohol and 1 city with 109 barangays with a population of 1.3 million. They operat 48 hotlines connected to police stations for emergencies response. EO No. 5 2010 abd EO No.7 2011 guide their operations. Their system includes weather monitoring, CCTV, and emergency tracking.",
    insight:
      "Local government units need strong system to handle emergencies and public safety. Having multiple hotlines helps respond quickly to different areas. Planning workshops with partners like JICA improve disaster readiness. Monitoring tools like CCTV and weather system are key for early warning and response. Clear evacuation plans and coordination across LGUs help protect communities during crises.",
  },
];

export const ReflectionsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showJournal, setShowJournal] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [fullscreenIndex, setFullscreenIndex] = useState<number | null>(null);

  const [orientations, setOrientations] = useState<
    Record<number, "landscape" | "portrait">
  >({});

  const nextSlide = () => {
    setCurrentIndex((p) => (p + 1) % reflections.length);
  };

  const prevSlide = () => {
    setCurrentIndex((p) => (p - 1 + reflections.length) % reflections.length);
  };

  // Keyboard left/right navigation
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") nextSlide();
      if (e.key === "ArrowLeft") prevSlide();
      if (e.key === "Escape") setFullscreenIndex(null);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  // Auto-slide (pause on hover)
  useEffect(() => {
    if (hovered) return;
    const timer = setInterval(nextSlide, 8000);
    return () => clearInterval(timer);
  }, [hovered]);

  const handleImageLoad = (
    e: SyntheticEvent<HTMLImageElement>,
    index: number
  ) => {
    const img = e.currentTarget;
    setOrientations((prev) => ({
      ...prev,
      [index]:
        img.naturalWidth >= img.naturalHeight
          ? "landscape"
          : "portrait",
    }));
  };

  const orientation = orientations[currentIndex] ?? "landscape";
  const currentReflection = reflections[currentIndex];
  const currentJournal = journalUrls[currentIndex];

  return (
    <section
      id="reflections"
      className="section-padding bg-charcoal-light/30"
    >
      <div className="container-luxury">
        <SectionHeading
          label="Insights"
          title="Learning Journal"
          subtitle="CEBU-BOHOL EDUCATIONAL TOUR 2025: A compilation of reflections and insights gathered during the enriching educational tour across Cebu and Bohol."
        />

        <div
          className="max-w-4xl mx-auto"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="relative bg-card border border-border p-6 md:p-8 text-center"
            >
              {/* Journal Image */}
              <div
                className={`mx-auto mb-6 overflow-hidden cursor-pointer ${
                  orientation === "landscape"
                    ? "w-full aspect-[16/9]"
                    : "w-64 aspect-[3/4]"
                }`}
                onClick={() => setFullscreenIndex(currentIndex)}
              >
                <img
                  src={currentJournal}
                  onLoad={(e) =>
                    handleImageLoad(e, currentIndex)
                  }
                  className="w-full h-full object-cover"
                  alt={`Journal ${currentIndex + 1}`}
                />
              </div>

              <Quote className="w-10 h-10 text-primary/40 mx-auto mb-4" />

              <p className="text-primary text-xs tracking-[0.3em] uppercase mb-4">
                {currentReflection.context}
              </p>

              <blockquote className="font-display text-xl md:text-2xl lg:text-3xl italic">
                “{currentReflection.quote}”
              </blockquote>

              {/* Controls */}
              <div className="flex justify-center gap-6 mt-8">
                <Button size="icon" variant="ghost" onClick={prevSlide}>
                  <ChevronLeft />
                </Button>

                <Button
                  variant="royal"
                  size="sm"
                  onClick={() =>
                    setShowJournal((s) => !s)
                  }
                >
                  {showJournal ? "Hide Journal" : "View Journal"}
                </Button>

                <Button size="icon" variant="ghost" onClick={nextSlide}>
                  <ChevronRight />
                </Button>
              </div>

              {/* Expandable Journal */}
              <AnimatePresence>
                {showJournal && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-8 text-left border border-border p-6"
                  >
                    <h4 className="text-xl mb-2">
                      Observation
                    </h4>
                    <p className="mb-4 text-muted-foreground">
                      {currentReflection.observation}
                    </p>

                    <h4 className="text-xl mb-2">
                      Insight
                    </h4>
                    <p className="text-muted-foreground">
                      {currentReflection.insight}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </AnimatePresence>

          {/* Progress */}
          <div className="mt-8 h-px bg-border relative">
            <div
              className="absolute h-full bg-primary transition-all duration-500"
              style={{
                width: `${
                  ((currentIndex + 1) /
                    reflections.length) *
                  100
                }%`,
              }}
            />
          </div>
        </div>
      </div>

      {/* Fullscreen Modal */}
      <AnimatePresence>
        {fullscreenIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          >
            <div className="relative">
              <img
                src={journalUrls[fullscreenIndex]}
                className="max-w-[80vw] max-h-[80vh] object-contain rounded-xl shadow-2xl"
              />

              <button
                onClick={() => setFullscreenIndex(null)}
                className="absolute -top-4 -right-4 bg-white/90 text-black rounded-full w-10 h-10 flex items-center justify-center shadow-lg hover:bg-white"
              >
                ✕
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
