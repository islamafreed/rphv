"use client"

import { useRef } from "react"
import { useInView } from "@/hooks/use-in-view"
import { cn } from "@/lib/utils"
import { Lightbulb, Award, LineChart, Target } from "lucide-react"

const reasons = [
  {
    icon: Lightbulb,
    title: "Process-Driven Excellence",
    description:
      "Transparent consulting methodology with structured frameworks that deliver consistent, measurable results across all engagement phases.",
  },
  {
    icon: Award,
    title: "Deep Industry Expertise",
    description:
      "Strong operational knowledge in dealership & workshop management backed by two decades of hands-on automotive sector experience.",
  },
  {
    icon: LineChart,
    title: "Modern Management Tools",
    description:
      "Cutting-edge systems and analytics platforms that provide real-time insights for informed decision-making and strategic planning.",
  },
  {
    icon: Target,
    title: "Profit-Focused Approach",
    description:
      "Practical, results-oriented strategies designed to improve bottom-line performance and drive sustainable business growth.",
  },
]

export function WhyUsSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { threshold: 0.1 })

  return (
    <section id="why-us" ref={sectionRef} className="relative py-24 sm:py-32 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image with parallax effect */}
          <div
            className={cn(
              "relative transition-all duration-1000",
              isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20",
            )}
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <img
                src="/modern-business-consulting-office-with-team-analyz.jpg"
                alt="Business consulting team"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            </div>

            {/* Floating stat card */}
            <div className="absolute -bottom-6 -right-6 bg-card border border-border rounded-2xl p-6 shadow-2xl">
              <div className="text-4xl font-bold text-primary">20+</div>
              <div className="text-sm text-muted-foreground">Years of Excellence</div>
            </div>
          </div>

          {/* Right - Content */}
          <div
            className={cn(
              "space-y-8 transition-all duration-1000 delay-200",
              isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20",
            )}
          >
            <div>
              <span className="text-primary text-sm font-semibold tracking-wider uppercase">Why Work With Us</span>
              <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance">
                A Global Approach for Sustainable Growth
              </h2>
            </div>

            <div className="grid gap-6">
              {reasons.map((reason, index) => (
                <ReasonCard key={reason.title} reason={reason} index={index} isInView={isInView} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ReasonCard({
  reason,
  index,
  isInView,
}: {
  reason: (typeof reasons)[0]
  index: number
  isInView: boolean
}) {
  const Icon = reason.icon

  return (
    <div
      className={cn(
        "group flex gap-4 p-4 rounded-xl hover:bg-card transition-all duration-500 cursor-pointer",
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
      )}
      style={{ transitionDelay: `${300 + index * 100}ms` }}
    >
      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
        <Icon className="w-6 h-6 text-primary" />
      </div>
      <div>
        <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
          {reason.title}
        </h3>
        <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{reason.description}</p>
      </div>
    </div>
  )
}
