"use client"

export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `
            linear-gradient(to right, hsl(var(--primary)) 1px, transparent 1px),
            linear-gradient(to bottom, hsl(var(--primary)) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Animated gradient orbs */}
      <div
        className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full opacity-[0.08] animate-float-slow"
        style={{
          background: "radial-gradient(circle, hsl(var(--primary)) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      <div
        className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full opacity-[0.06] animate-float-medium"
        style={{
          background: "radial-gradient(circle, hsl(var(--accent)) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      <div
        className="absolute top-1/2 left-1/2 w-[700px] h-[700px] rounded-full opacity-[0.05] animate-float-fast"
        style={{
          background: "radial-gradient(circle, hsl(var(--primary)) 0%, transparent 70%)",
          filter: "blur(80px)",
          transform: "translate(-50%, -50%)",
        }}
      />

      {/* Diagonal lines accent */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            hsl(var(--primary)),
            hsl(var(--primary)) 2px,
            transparent 2px,
            transparent 60px
          )`,
        }}
      />
    </div>
  )
}
