"use client"

import { ArrowUpRight } from "lucide-react"
import { RPHLogo } from "@/components/rph-logo"

const footerLinks = {
  navigation: [
    { label: "Services", href: "#services" },
    { label: "Why Us", href: "#why-us" },
    { label: "Sectors", href: "#sectors" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ],
  sectors: [
    { label: "Automotive", href: "#sectors" },
    { label: "Healthcare", href: "#sectors" },
    { label: "Mobility Startups", href: "#sectors" },
    { label: "Workshops", href: "#sectors" },
  ],
}

export function Footer() {
  return (
    <footer className="relative bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand - Use new logo component */}
          <div className="lg:col-span-2 space-y-6">
            <a href="#">
              <RPHLogo size="lg" />
            </a>
            <p className="text-muted-foreground max-w-md leading-relaxed">
              Specialized consulting firm offering techno-financial, operational, and business process solutions for
              sustainable growth.
            </p>

            {/* Large Logo Text - Updated to use new primary color */}
            <div className="pt-8">
              <svg viewBox="0 0 300 80" className="w-full max-w-md h-auto opacity-10">
                <text
                  x="0"
                  y="60"
                  className="fill-primary"
                  style={{ fontSize: "60px", fontWeight: "bold", fontFamily: "system-ui" }}
                >
                  RPHV
                </text>
              </svg>
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-3">
              {footerLinks.navigation.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Sectors */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider">Sectors</h4>
            <ul className="space-y-3">
              {footerLinks.sectors.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} RPH Ventures. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-xs text-muted-foreground">Guwahati | Gurgaon</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
