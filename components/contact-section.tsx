"use client"

import type React from "react"

import { useRef, useState } from "react"
import { useInView } from "@/hooks/use-in-view"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, Send, Building2 } from "lucide-react"

const offices = [
  {
    name: "Corporate Office",
    address: "5th Floor, DLF Two Horizon Centre, DLF Phase 5, Sector 43, Golf Course Road, Gurugram, Haryana – 122002",
    city: "Gurgaon",
  },
  {
    name: "Registered Office",
    address: "4B, The Terraces, Tripura Road, Jayanagar, Guwahati, Assam - 781028",
    city: "Guwahati",
  },
]

export function ContactSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { threshold: 0.1 })
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    organization: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(formState)
    // Reset form after submission
    setFormState({
      firstName: "",
      lastName: "",
      email: "",
      organization: "",
      message: "",
    })
  }

  return (
    <section id="contact" ref={sectionRef} className="relative py-16 sm:py-24 lg:py-32 bg-background">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={cn(
            "text-center mb-12 sm:mb-16 transition-all duration-700",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
          )}
        >
          <span className="text-primary text-sm font-semibold tracking-wider uppercase">Contact</span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            Ready to Transform Your Business?
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground text-base sm:text-lg text-pretty">
            Let's start planning. Reach out to discuss how we can help you achieve operational excellence.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
          {/* Contact Info */}
          <div
            className={cn(
              "space-y-8 transition-all duration-1000",
              isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20",
            )}
          >
            <div className="space-y-4 sm:space-y-6">
              <h3 className="text-lg sm:text-xl font-semibold text-foreground">Ask us anything</h3>
              <p className="text-muted-foreground text-sm sm:text-base">
                Are you a company seeking consulting services, a dealership looking to optimize operations, or simply
                interested in what we're building? Let's connect.
              </p>

              <div className="flex flex-col gap-4">
                <a
                  href="tel:+918011017917"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group p-2 rounded hover:bg-secondary/30"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors flex-shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-sm sm:text-base font-medium">+91-8011017917</span>
                </a>
                <a
                  href="mailto:rphazarika@rphv.in"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group p-2 rounded hover:bg-secondary/30"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors flex-shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-sm sm:text-base font-medium break-all">rphazarika@rphv.in</span>
                </a>
              </div>
            </div>

            {/* Office Locations */}
            <div className="space-y-4">
              <h3 className="text-lg sm:text-xl font-semibold text-foreground">Our Offices</h3>
              {offices.map((office, index) => (
                <div
                  key={office.name}
                  className={cn(
                    "p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 text-sm sm:text-base",
                    isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
                  )}
                  style={{ transitionDelay: `${300 + index * 100}ms` }}
                >
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Building2 className="w-5 h-5 text-primary" />
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2 mb-1 flex-wrap">
                        <h4 className="font-semibold text-foreground">{office.name}</h4>
                        <span className="text-xs text-primary bg-primary/10 px-2 py-0.5 rounded-full whitespace-nowrap">
                          {office.city}
                        </span>
                      </div>
                      <p className="text-muted-foreground text-xs sm:text-sm break-words">{office.address}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div
            className={cn(
              "transition-all duration-1000 delay-200",
              isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20",
            )}
          >
            <form onSubmit={handleSubmit} className="space-y-6 p-6 sm:p-8 rounded-2xl bg-card border border-border">
              <h3 className="text-lg sm:text-xl font-semibold text-foreground">Send us a message</h3>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">First Name</label>
                  <Input
                    placeholder="John"
                    value={formState.firstName}
                    onChange={(e) => setFormState({ ...formState, firstName: e.target.value })}
                    className="bg-secondary border-border focus:border-primary text-sm"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Last Name</label>
                  <Input
                    placeholder="Doe"
                    value={formState.lastName}
                    onChange={(e) => setFormState({ ...formState, lastName: e.target.value })}
                    className="bg-secondary border-border focus:border-primary text-sm"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Email</label>
                <Input
                  type="email"
                  placeholder="john@company.com"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  className="bg-secondary border-border focus:border-primary text-sm"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Organization</label>
                <Input
                  placeholder="Your Company"
                  value={formState.organization}
                  onChange={(e) => setFormState({ ...formState, organization: e.target.value })}
                  className="bg-secondary border-border focus:border-primary text-sm"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Message</label>
                <Textarea
                  placeholder="Tell us about your project..."
                  rows={4}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="bg-secondary border-border focus:border-primary resize-none text-sm"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 group text-sm sm:text-base"
              >
                Send Message
                <Send className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
