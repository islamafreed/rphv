"use client"

import { useRef } from "react"
import { useInView } from "@/hooks/use-in-view"
import { cn } from "@/lib/utils"
import { Search, BarChart3, Package, Building2, Settings, Users, GraduationCap, Workflow } from "lucide-react"

const services = [
  {
    icon: Search,
    title: "Operational Audit & Performance Turnaround",
    description:
      "Full-spectrum operational audit with revenue & cost gap identification, action plans with measurable outcomes, and MIS review systems.",
  },
  {
    icon: BarChart3,
    title: "Balanced Scorecard Implementation",
    description:
      "KPI frameworks for all departments, daily/weekly/monthly review structure, and performance accountability systems.",
  },
  {
    icon: Package,
    title: "Inventory & Supply Chain Optimisation",
    description:
      "Inventory audit & stock accuracy, ageing & dead stock control, ordering discipline & forecasting, warehouse optimization.",
  },
  {
    icon: Building2,
    title: "Multi-Unit Operations Setup",
    description:
      "End-to-end workshop conversion, SOP development, manpower planning, and profitability modeling for sustainable operations.",
  },
  {
    icon: Workflow,
    title: "Service Process Engineering",
    description:
      "Workflow optimization, TAT improvement, quality & CSI enhancement, and streamlined claim process management.",
  },
  {
    icon: Users,
    title: "Customer Experience Consulting",
    description:
      "Customer journey design, feedback & retention systems, communication standards, and response protocols.",
  },
  {
    icon: GraduationCap,
    title: "Training & Skill Development",
    description:
      "Comprehensive technical & functional training, leadership capability development, and department-wise skill enhancement.",
  },
  {
    icon: Settings,
    title: "Process-Driven Solutions",
    description:
      "Transparent consulting methodology with structured frameworks that deliver consistent, measurable results.",
  },
]

export function ServicesSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { threshold: 0.1 })

  return (
    <section id="services" ref={sectionRef} className="relative py-24 sm:py-32 bg-background">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={cn(
            "text-center mb-16 transition-all duration-700",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
          )}
        >
          <span className="text-primary text-sm font-semibold tracking-wider uppercase">What We Do</span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            Core Consulting Services
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground text-lg text-pretty">
            Our collection of services spans various needs at every stage of the transformation process.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ServiceCard({
  service,
  index,
  isInView,
}: {
  service: (typeof services)[0]
  index: number
  isInView: boolean
}) {
  const Icon = service.icon

  return (
    <div
      className={cn(
        "group relative p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-xl hover:shadow-primary/5 cursor-pointer",
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
      )}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative z-10">
        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
          <Icon className="w-6 h-6 text-primary" />
        </div>

        <h3 className="text-lg font-semibold text-card-foreground mb-2 group-hover:text-primary transition-colors duration-300">
          {service.title}
        </h3>

        <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>

        <div className="mt-4 flex items-center text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-[-10px] group-hover:translate-x-0">
          Learn more
          <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </div>
    </div>
  )
}
