"use client"

import { useRef } from "react"
import { useInView } from "@/hooks/use-in-view"
import { cn } from "@/lib/utils"
import { Quote } from "lucide-react"

export function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { threshold: 0.1 })

  return (
    <section id="about" ref={sectionRef} className="relative py-24 sm:py-32 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Content */}
          <div
            className={cn(
              "space-y-8 transition-all duration-1000",
              isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20",
            )}
          >
            <div>
              <span className="text-primary text-sm font-semibold tracking-wider uppercase">About Us</span>
              <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance">
                Dedicated to Excellence & Growth
              </h2>
            </div>

            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                RPH Ventures is a specialized consulting firm offering techno-financial, operational, and business
                process solutions for automotive dealerships, multi-brand workshops, mobility businesses, and healthcare
                organizations.
              </p>
              <p>
                We help institutions across both sectors improve profitability, enhance efficiency, optimize resources,
                and achieve sustainable growth through structured, data-driven systems.
              </p>
            </div>

            {/* Founder Card */}
            <div className="relative p-6 rounded-2xl bg-card border border-border">
              <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/20" />
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-bold text-primary">RP</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">Er. R.P. Hazarika</h3>
                  <p className="text-sm text-primary mb-2">Chartered Engineer & Business Process Consultant</p>
                  <p className="text-sm text-muted-foreground">
                    20+ years of multidisciplinary experience in driving operational excellence, performance
                    improvement, and scalable systems across automotive and healthcare environments.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Image Grid */}
          <div
            className={cn(
              "relative transition-all duration-1000 delay-200",
              isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20",
            )}
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-[3/4] rounded-2xl overflow-hidden">
                  <img
                    src="/professional-consultant-analyzing-business-charts.jpg"
                    alt="Business analysis"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="aspect-square rounded-2xl overflow-hidden">
                  <img
                    src="/modern-office-meeting-room-with-team-discussion.jpg"
                    alt="Team meeting"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="aspect-square rounded-2xl overflow-hidden">
                  <img
                    src="/business-strategy-planning-with-digital-dashboard.jpg"
                    alt="Strategy planning"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="aspect-[3/4] rounded-2xl overflow-hidden">
                  <img
                    src="/automotive-dealership-operations-management.jpg"
                    alt="Operations management"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>

            {/* Decorative element */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-primary/5 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  )
}
