interface OctarineLogoProps {
  variant?: "light" | "dark"
  size?: "sm" | "md" | "lg"
}

export function OctarineLogo({ variant = "dark", size = "md" }: OctarineLogoProps) {
  const sizeClasses = {
    sm: "text-lg",
    md: "text-xl",
    lg: "text-2xl",
  }

  const textColor = variant === "light" ? "text-white" : "text-foreground"

  return <div className={`font-bold ${sizeClasses[size]} ${textColor}`}>Octarine</div>
}
