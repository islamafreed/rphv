"use client"

import { useRef, useState } from "react"
import { useInView } from "@/hooks/use-in-view"
import { cn } from "@/lib/utils"
import { Car, Building, Wrench, Heart, Plus } from "lucide-react"

const sectors = [
  {
    icon: Car,
    title: "Automotive & Mobility Startups",
    description:
      "Strategic guidance for emerging businesses navigating the evolving mobility landscape with innovative business models.",
    image: "/modern-electric-car-showroom-with-sleek-design.jpg",
  },
  {
    icon: Building,
    title: "Automobile Dealerships",
    description:
      "Comprehensive solutions for single and multi-location dealerships seeking operational excellence and market leadership.",
    image: "/luxury-car-dealership-interior-professional-settin.jpg",
  },
  {
    icon: Wrench,
    title: "Multi-Brand Workshops",
    description:
      "Specialized expertise in setting up and optimizing independent service facilities serving multiple automotive brands.",
    image: "/modern-automotive-workshop-with-mechanics-working.jpg",
  },
  {
    icon: Heart,
    title: "Healthcare",
    description:
      "Process optimization and operational efficiency consulting for healthcare organizations and medical facilities.",
    image: "/modern-hospital-interior-clean-professional-health.jpg",
  },
]

export function SectorsSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { threshold: 0.1 })
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="sectors" ref={sectionRef} className="relative py-24 sm:py-32 bg-background">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={cn(
            "text-center mb-16 transition-all duration-700",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
          )}
        >
          <span className="text-primary text-sm font-semibold tracking-wider uppercase">Industries</span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            Sectors We Serve
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground text-lg text-pretty">
            Explore how we help businesses transform across diverse industries.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {sectors.map((sector, index) => (
            <SectorCard
              key={sector.title}
              sector={sector}
              index={index}
              isInView={isInView}
              isHovered={hoveredIndex === index}
              onHover={() => setHoveredIndex(index)}
              onLeave={() => setHoveredIndex(null)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function SectorCard({
  sector,
  index,
  isInView,
  isHovered,
  onHover,
  onLeave,
}: {
  sector: (typeof sectors)[0]
  index: number
  isInView: boolean
  isHovered: boolean
  onHover: () => void
  onLeave: () => void
}) {
  const Icon = sector.icon

  return (
    <div
      className={cn(
        "group relative aspect-[3/4] rounded-2xl overflow-hidden cursor-pointer transition-all duration-700",
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
      )}
      style={{ transitionDelay: `${index * 150}ms` }}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      {/* Background Image */}
      <img
        src={sector.image || "/placeholder.svg"}
        alt={sector.title}
        className={cn(
          "absolute inset-0 w-full h-full object-cover transition-transform duration-700",
          isHovered ? "scale-110" : "scale-100",
        )}
      />

      {/* Overlay */}
      <div
        className={cn(
          "absolute inset-0 transition-all duration-500",
          isHovered
            ? "bg-gradient-to-t from-background via-background/80 to-background/40"
            : "bg-gradient-to-t from-background/90 via-background/50 to-transparent",
        )}
      />

      {/* Content */}
      <div className="absolute inset-0 p-6 flex flex-col justify-end">
        <div
          className={cn(
            "w-12 h-12 rounded-xl bg-primary/20 backdrop-blur-sm flex items-center justify-center mb-4 transition-all duration-300",
            isHovered ? "bg-primary scale-110" : "",
          )}
        >
          <Icon
            className={cn(
              "w-6 h-6 transition-colors duration-300",
              isHovered ? "text-primary-foreground" : "text-primary",
            )}
          />
        </div>

        <h3 className="text-xl font-semibold text-foreground mb-2">{sector.title}</h3>

        <p
          className={cn(
            "text-sm text-muted-foreground leading-relaxed transition-all duration-500 overflow-hidden",
            isHovered ? "max-h-40 opacity-100" : "max-h-0 opacity-0",
          )}
        >
          {sector.description}
        </p>

        <div
          className={cn(
            "absolute top-4 right-4 w-10 h-10 rounded-full bg-foreground/10 backdrop-blur-sm flex items-center justify-center transition-all duration-300",
            isHovered ? "rotate-45 bg-primary" : "",
          )}
        >
          <Plus
            className={cn("w-5 h-5 transition-colors", isHovered ? "text-primary-foreground" : "text-foreground")}
          />
        </div>
      </div>
    </div>
  )
}
