export function OctarineBrandLogo({ className = "", size = 40 }: { className?: string; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        {/* Gradients for each petal - iridescent colors */}
        <linearGradient id="petal1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#B4E4E8" stopOpacity="0.9" />
          <stop offset="50%" stopColor="#D4C4F0" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#F0D4B4" stopOpacity="0.7" />
        </linearGradient>

        <linearGradient id="petal2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#D4C4F0" stopOpacity="0.9" />
          <stop offset="50%" stopColor="#F0D4B4" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#B4E4E8" stopOpacity="0.7" />
        </linearGradient>

        <linearGradient id="petal3" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F0D4B4" stopOpacity="0.9" />
          <stop offset="50%" stopColor="#B4E4E8" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#D4C4F0" stopOpacity="0.7" />
        </linearGradient>

        <linearGradient id="petal4" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#B4E4E8" stopOpacity="0.9" />
          <stop offset="50%" stopColor="#F0D4B4" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#D4C4F0" stopOpacity="0.7" />
        </linearGradient>

        <linearGradient id="petal5" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#D4C4F0" stopOpacity="0.9" />
          <stop offset="50%" stopColor="#B4E4E8" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#F0D4B4" stopOpacity="0.7" />
        </linearGradient>

        <linearGradient id="petal6" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F0D4B4" stopOpacity="0.9" />
          <stop offset="50%" stopColor="#D4C4F0" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#B4E4E8" stopOpacity="0.7" />
        </linearGradient>

        {/* Glow effect filter */}
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* Pearlescent highlight gradient */}
        <radialGradient id="highlight">
          <stop offset="0%" stopColor="white" stopOpacity="0.6" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Sparkle particles around the logo */}
      <circle cx="40" cy="50" r="1.5" fill="#F0D4B4" opacity="0.8" />
      <circle cx="160" cy="60" r="1" fill="#B4E4E8" opacity="0.7" />
      <circle cx="30" cy="100" r="2" fill="#D4C4F0" opacity="0.6" />
      <circle cx="170" cy="110" r="1.5" fill="#F0D4B4" opacity="0.8" />
      <circle cx="50" cy="150" r="1" fill="#B4E4E8" opacity="0.7" />
      <circle cx="150" cy="140" r="2" fill="#D4C4F0" opacity="0.7" />
      <circle cx="100" cy="30" r="1.5" fill="#F0D4B4" opacity="0.6" />
      <circle cx="100" cy="170" r="1" fill="#B4E4E8" opacity="0.8" />
      <circle cx="65" cy="45" r="1" fill="#D4C4F0" opacity="0.5" />
      <circle cx="135" cy="155" r="1.5" fill="#F0D4B4" opacity="0.7" />

      {/* Six-petal pinwheel - curved teardrop shapes rotating around center */}
      <g filter="url(#glow)">
        {/* Petal 1 - Top */}
        <path
          d="M100,100 Q100,60 115,55 Q120,53 120,60 Q115,80 100,100 Z"
          fill="url(#petal1)"
          stroke="white"
          strokeWidth="0.5"
          opacity="0.95"
        />

        {/* Petal 2 - Top Right */}
        <path
          d="M100,100 Q130,75 145,80 Q148,82 145,88 Q125,95 100,100 Z"
          fill="url(#petal2)"
          stroke="white"
          strokeWidth="0.5"
          opacity="0.95"
        />

        {/* Petal 3 - Bottom Right */}
        <path
          d="M100,100 Q130,125 125,145 Q123,150 118,145 Q105,125 100,100 Z"
          fill="url(#petal3)"
          stroke="white"
          strokeWidth="0.5"
          opacity="0.95"
        />

        {/* Petal 4 - Bottom */}
        <path
          d="M100,100 Q100,140 85,145 Q80,147 80,140 Q85,120 100,100 Z"
          fill="url(#petal4)"
          stroke="white"
          strokeWidth="0.5"
          opacity="0.95"
        />

        {/* Petal 5 - Bottom Left */}
        <path
          d="M100,100 Q70,125 55,120 Q52,118 55,112 Q75,105 100,100 Z"
          fill="url(#petal5)"
          stroke="white"
          strokeWidth="0.5"
          opacity="0.95"
        />

        {/* Petal 6 - Top Left */}
        <path
          d="M100,100 Q70,75 75,55 Q77,50 82,55 Q95,75 100,100 Z"
          fill="url(#petal6)"
          stroke="white"
          strokeWidth="0.5"
          opacity="0.95"
        />
      </g>

      {/* Pearlescent highlights on petals for glass effect */}
      <ellipse cx="110" cy="70" rx="8" ry="15" fill="url(#highlight)" opacity="0.4" />
      <ellipse cx="130" cy="90" rx="12" ry="8" fill="url(#highlight)" opacity="0.3" />
      <ellipse cx="115" cy="130" rx="10" ry="12" fill="url(#highlight)" opacity="0.35" />
      <ellipse cx="85" cy="130" rx="8" ry="10" fill="url(#highlight)" opacity="0.4" />
      <ellipse cx="70" cy="95" rx="10" ry="8" fill="url(#highlight)" opacity="0.3" />
      <ellipse cx="85" cy="65" rx="12" ry="10" fill="url(#highlight)" opacity="0.35" />

      {/* Central glow */}
      <circle cx="100" cy="100" r="8" fill="url(#highlight)" opacity="0.5" />
    </svg>
  )
}
