"use client"

import { cn } from "@/lib/utils"

interface RPHLogoProps {
  className?: string
  size?: "sm" | "md" | "lg" | "xl"
  showText?: boolean
  animated?: boolean
}

export function RPHLogo({ className, size = "md", showText = true, animated = true }: RPHLogoProps) {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-12 h-12",
    xl: "w-16 h-16",
  }

  const textSizeClasses = {
    sm: "text-lg",
    md: "text-xl",
    lg: "text-2xl",
    xl: "text-3xl",
  }

  const primaryColor = "hsl(var(--primary))"
  const accentColor = "hsl(var(--accent))"
  const foregroundColor = "hsl(var(--foreground))"

  return (
    <div className={cn("flex items-center gap-3 group", className)}>
      <div
        className={cn(
          "relative flex items-center justify-center rounded-xl overflow-hidden",
          sizeClasses[size],
          animated && "transition-transform group-hover:scale-110 duration-300",
        )}
      >
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-accent" />

        {/* Animated shine effect */}
        {animated && (
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
        )}

        {/* Logo SVG - Using direct color values instead of CSS classes */}
        <svg viewBox="0 0 40 40" className="relative z-10 w-3/4 h-3/4" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Abstract R shape with connected nodes */}
          <path
            d="M12 8h10c4 0 7 3 7 7s-3 7-7 7h-4l8 10"
            stroke="white"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path d="M12 8v24" stroke="white" strokeWidth="3" strokeLinecap="round" />
          {/* Connection nodes representing network/ventures */}
          <circle cx="22" cy="15" r="2" fill="currentColor" style={{ color: accentColor }} />
          <circle cx="12" cy="20" r="2" fill="white" />
          <circle cx="26" cy="32" r="2" fill="currentColor" style={{ color: accentColor }} />
        </svg>
      </div>

      {showText && (
        <div className="flex flex-col">
          <span className={cn("font-bold tracking-tight text-foreground", textSizeClasses[size])}>
            RPH<span className="text-primary">Ventures</span>
          </span>
          {size === "lg" || size === "xl" ? (
            <span className="text-xs text-muted-foreground tracking-widest uppercase">Strategic Consulting</span>
          ) : null}
        </div>
      )}
    </div>
  )
}

// Icon-only version for favicon/small spaces
export function RPHLogoIcon({ className, size = "md" }: { className?: string; size?: "sm" | "md" | "lg" }) {
  const sizeClasses = {
    sm: "w-6 h-6",
    md: "w-8 h-8",
    lg: "w-10 h-10",
  }

  return (
    <div
      className={cn(
        "relative flex items-center justify-center rounded-lg overflow-hidden",
        sizeClasses[size],
        className,
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-accent" />
      <svg viewBox="0 0 40 40" className="relative z-10 w-3/4 h-3/4" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M12 8h10c4 0 7 3 7 7s-3 7-7 7h-4l8 10"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M12 8v24" stroke="white" strokeWidth="3" strokeLinecap="round" />
        <circle cx="22" cy="15" r="2" fill="rgb(217 119 6)" />
        <circle cx="12" cy="20" r="2" fill="white" />
        <circle cx="26" cy="32" r="2" fill="rgb(217 119 6)" />
      </svg>
    </div>
  )
}
