import certificate1 from "@/assets/certificate-1.jpg";
import certificateMysql from "@/assets/certificate-mysql.jpg";
import { SectionHeading } from "./SectionHeading";

const certificates = [
  {
    image: certificateMysql,
    title: "MySQL Information Management",
    issuer: "CodeChum - CC105",
    year: "2025",
    description: "Certificate of Completion in Information Management with a score of 780/1130.",
  },
  {
    image: certificate1,
    title: "Certificate of Achievement",
    issuer: "HCDC",
    year: "2025",
    description: "Cebu-Bohol Educational Tour 2025.",
  },
];

export const CertificatesSection = () => {
  return (
    <section id="certificates" className="section-padding bg-charcoal-light/30">
      <div className="container-luxury">
        <SectionHeading
          label="Achievements"
          title="Certificates"
          subtitle="A testament to dedication, perseverance, and the pursuit of excellence throughout my journey."
        />

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {certificates.map((cert, index) => (
            <div
              key={cert.title}
              className="group relative bg-card border border-border hover:border-primary/40 overflow-hidden transition-all duration-500 hover-glow"
              style={{ 
                animationDelay: `${index * 0.15}s`,
              }}
            >
              {/* Certificate Image */}
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={cert.image} 
                  alt={cert.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-6 space-y-3">
                <div className="flex items-baseline justify-between">
                  <h3 className="font-serif text-xl text-foreground group-hover:text-primary transition-colors duration-300">
                    {cert.title}
                  </h3>
                  <span className="text-primary/60 text-sm font-sans">{cert.year}</span>
                </div>
                
                <p className="text-primary text-sm tracking-wider uppercase font-sans">
                  {cert.issuer}
                </p>
                
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {cert.description}
                </p>
              </div>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 w-0 h-px bg-primary transition-all duration-500 group-hover:w-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
