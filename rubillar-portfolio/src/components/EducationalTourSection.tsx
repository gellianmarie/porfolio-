import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, type SyntheticEvent } from "react";
import { SectionHeading } from "./SectionHeading";
import { Button } from "./ui/button";

/* Load ALL tour images from assets */
const tourModules = import.meta.glob(
  "/src/assets/photo_*.jpg",
  { eager: true }
) as Record<string, { default: string }>;

const tourImages = Object.keys(tourModules)
  .sort()
  .map((key) => tourModules[key].default);

export const EducationalTourSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [orientations, setOrientations] = useState<
    Record<number, "landscape" | "portrait">
  >({});

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % tourImages.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + tourImages.length) % tourImages.length
    );
  };

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

  return (
    <section id="educational-tour" className="section-padding">
      <div className="container-luxury">
        <SectionHeading
          label="Journal"
          title="Educational Tour"
          subtitle="A visual documentation of enriching educational experiences and explorations."
        />

        <div className="relative max-w-5xl mx-auto">
          {/* Slider */}
          <div className="relative aspect-[16/10] bg-card border border-border overflow-hidden group flex items-center justify-center">
            {/* Image */}
            <div
              className={`w-full h-full flex items-center justify-center ${
                orientation === "portrait"
                  ? "px-24 md:px-40"
                  : "px-6"
              }`}
            >
              <img
                src={tourImages[currentIndex]}
                alt={`Educational Tour ${currentIndex + 1}`}
                onLoad={(e) =>
                  handleImageLoad(e, currentIndex)
                }
                className="w-full h-full object-contain"
              />
            </div>

            {/* Navigation */}
            <Button
              variant="ghost"
              size="icon"
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/30 backdrop-blur-sm border border-border hover:border-primary/40 opacity-0 group-hover:opacity-100 transition"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/30 backdrop-blur-sm border border-border hover:border-primary/40 opacity-0 group-hover:opacity-100 transition"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </Button>
          </div>

          {/* Pagination */}
          <div className="flex justify-center gap-3 mt-8">
            {tourImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-primary w-8"
                    : "bg-border w-2 hover:bg-primary/50"
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
