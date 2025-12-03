export function ArrowRight({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
    </svg>
  )
}

export function Check({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  )
}

export function ArrowDown({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
    </svg>
  )
}

export function Clock({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2m6-2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  )
}

export function Loader2({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  )
}

export function Zap({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none">
      <defs>
        <linearGradient id="zapGradient3D" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="hsl(220 90% 76%)" />
          <stop offset="50%" stopColor="hsl(220 90% 56%)" />
          <stop offset="100%" stopColor="hsl(220 90% 36%)" />
        </linearGradient>
        <filter id="zapShadow">
          <feDropShadow dx="0" dy="2" stdDeviation="2" floodOpacity="0.3" />
        </filter>
      </defs>
      {/* Lightning bolt with 3D effect */}
      <path d="M36 4 L20 32 L28 32 L24 60 L48 24 L38 24 L44 4 Z" fill="url(#zapGradient3D)" filter="url(#zapShadow)" />
      {/* Highlight */}
      <path d="M40 8 L38 12 L42 12 Z" fill="white" opacity="0.6" />
      {/* Inner glow */}
      <path d="M35 8 L24 30 L30 30 L27 52 L44 26 L36 26 L41 8 Z" fill="hsl(220 90% 86%)" opacity="0.3" />
    </svg>
  )
}

export function Shield({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none">
      <defs>
        <linearGradient id="shieldGradient3D" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="hsl(220 90% 76%)" />
          <stop offset="30%" stopColor="hsl(220 90% 66%)" />
          <stop offset="70%" stopColor="hsl(220 90% 46%)" />
          <stop offset="100%" stopColor="hsl(220 90% 36%)" />
        </linearGradient>
        <filter id="shieldShadow">
          <feDropShadow dx="0" dy="3" stdDeviation="3" floodOpacity="0.4" />
        </filter>
      </defs>
      {/* Shield base with 3D depth */}
      <path
        d="M32 8 L12 16 L12 32 C12 44 18 52 32 58 C46 52 52 44 52 32 L52 16 Z"
        fill="url(#shieldGradient3D)"
        filter="url(#shieldShadow)"
      />
      {/* Shield border */}
      <path
        d="M32 8 L12 16 L12 32 C12 44 18 52 32 58 C46 52 52 44 52 32 L52 16 Z"
        fill="none"
        stroke="hsl(220 90% 26%)"
        strokeWidth="0.5"
      />
      {/* Glossy highlight */}
      <path
        d="M32 10 L16 16 L16 32 C16 40 20 46 28 50"
        fill="none"
        stroke="white"
        strokeWidth="2"
        opacity="0.4"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function Shield3DGlossy({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 110" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        {/* Main shield gradient with multiple depth stops */}
        <linearGradient id="medievalShieldGradient" x1="30%" y1="10%" x2="70%" y2="100%">
          <stop offset="0%" stopColor="hsl(220 90% 78%)" />
          <stop offset="15%" stopColor="hsl(220 90% 72%)" />
          <stop offset="35%" stopColor="hsl(220 90% 62%)" />
          <stop offset="60%" stopColor="hsl(220 90% 50%)" />
          <stop offset="85%" stopColor="hsl(220 90% 42%)" />
          <stop offset="100%" stopColor="hsl(220 90% 36%)" />
        </linearGradient>

        <linearGradient id="rimLightGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="hsl(220 90% 85%)" stopOpacity="0" />
          <stop offset="10%" stopColor="hsl(220 90% 85%)" stopOpacity="0.4" />
          <stop offset="50%" stopColor="hsl(220 90% 85%)" stopOpacity="0.5" />
          <stop offset="90%" stopColor="hsl(220 90% 85%)" stopOpacity="0.4" />
          <stop offset="100%" stopColor="hsl(220 90% 85%)" stopOpacity="0" />
        </linearGradient>

        {/* Inner shadow for depth */}
        <filter id="innerShieldShadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="2" />
          <feOffset dx="0" dy="2" result="offsetblur" />
          <feComponentTransfer>
            <feFuncA type="linear" slope="0.5" />
          </feComponentTransfer>
          <feComposite in2="SourceAlpha" operator="arithmetic" k2="-1" k3="1" />
        </filter>

        {/* Outer glow/shadow for 3D lift */}
        <filter id="shieldOuterGlow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="4" />
          <feOffset dx="0" dy="4" result="offsetblur" />
          <feComponentTransfer>
            <feFuncA type="linear" slope="0.5" />
          </feComponentTransfer>
          <feMerge>
            <feMergeNode />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Medieval shield shape with pointed bottom */}
      <path
        d="M 50 10 
           C 50 10, 20 15, 15 20
           C 10 25, 10 35, 10 50
           C 10 70, 15 85, 25 95
           C 35 105, 45 108, 50 110
           C 55 108, 65 105, 75 95
           C 85 85, 90 70, 90 50
           C 90 35, 90 25, 85 20
           C 80 15, 50 10, 50 10 Z"
        fill="url(#medievalShieldGradient)"
        filter="url(#shieldOuterGlow)"
      />

      {/* Inner shadow layer for depth dimension */}
      <path
        d="M 50 14
           C 50 14, 24 18, 20 23
           C 16 28, 16 38, 16 50
           C 16 68, 20 82, 29 91
           C 38 100, 46 103, 50 105
           C 54 103, 62 100, 71 91
           C 80 82, 84 68, 84 50
           C 84 38, 84 28, 80 23
           C 76 18, 50 14, 50 14 Z"
        fill="black"
        opacity="0.15"
        filter="url(#innerShieldShadow)"
      />

      {/* 8-pointed Octarine star burst with diamond-shaped rays */}
      <g transform="translate(50, 55) scale(0.25)">
        <g transform="rotate(0)">
          <path d="M 0 -15 L 9 -33 L 0 -45 L -9 -33 Z" fill="white" opacity="0.95" />
        </g>
        <g transform="rotate(45)">
          <path d="M 0 -15 L 9 -33 L 0 -45 L -9 -33 Z" fill="white" opacity="0.95" />
        </g>
        <g transform="rotate(90)">
          <path d="M 0 -15 L 9 -33 L 0 -45 L -9 -33 Z" fill="white" opacity="0.95" />
        </g>
        <g transform="rotate(135)">
          <path d="M 0 -15 L 9 -33 L 0 -45 L -9 -33 Z" fill="white" opacity="0.95" />
        </g>
        <g transform="rotate(180)">
          <path d="M 0 -15 L 9 -33 L 0 -45 L -9 -33 Z" fill="white" opacity="0.95" />
        </g>
        <g transform="rotate(225)">
          <path d="M 0 -15 L 9 -33 L 0 -45 L -9 -33 Z" fill="white" opacity="0.95" />
        </g>
        <g transform="rotate(270)">
          <path d="M 0 -15 L 9 -33 L 0 -45 L -9 -33 Z" fill="white" opacity="0.95" />
        </g>
        <g transform="rotate(315)">
          <path d="M 0 -15 L 9 -33 L 0 -45 L -9 -33 Z" fill="white" opacity="0.95" />
        </g>
      </g>

      <path
        d="M 50 10
           C 50 10, 20 15, 15 20
           C 10 25, 10 35, 10 50
           C 10 70, 15 85, 25 95"
        fill="none"
        stroke="url(#rimLightGradient)"
        strokeWidth="2.5"
        strokeLinecap="round"
        opacity="0.5"
      />

      <path
        d="M 30 15
           C 35 12, 45 11, 50 10
           C 55 11, 65 12, 70 15"
        fill="none"
        stroke="hsl(220 90% 85%)"
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.3"
      />

      <path
        d="M 50 10
           C 50 10, 80 15, 85 20
           C 90 25, 90 35, 90 50
           C 90 65, 88 77, 82 88"
        fill="none"
        stroke="hsl(220 90% 85%)"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.15"
      />
    </svg>
  )
}

export function FileCheck({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none">
      <defs>
        <linearGradient id="fileGradient3D" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="hsl(220 90% 76%)" />
          <stop offset="50%" stopColor="hsl(220 90% 56%)" />
          <stop offset="100%" stopColor="hsl(220 90% 36%)" />
        </linearGradient>
        <filter id="fileShadow">
          <feDropShadow dx="0" dy="2" stdDeviation="2" floodOpacity="0.3" />
        </filter>
      </defs>
      {/* Document base */}
      <path
        d="M16 8 C16 6 17 4 18 4 L40 4 L52 16 L52 56 C52 58 51 60 48 60 L18 60 C17 60 16 58 16 56 Z"
        fill="url(#fileGradient3D)"
        filter="url(#fileShadow)"
      />
      {/* Folded corner */}
      <path d="M40 4 L40 16 L52 16" fill="hsl(220 90% 46%)" opacity="0.6" />
      {/* Glossy highlight */}
      <path d="M20 8 L20 52" stroke="white" strokeWidth="2" opacity="0.3" strokeLinecap="round" />
      {/* Check mark */}
      <path d="M26 34 L32 40 L42 28" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function Wallet({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none">
      <defs>
        <linearGradient id="walletGradient3D" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="hsl(220 90% 76%)" />
          <stop offset="50%" stopColor="hsl(220 90% 56%)" />
          <stop offset="100%" stopColor="hsl(220 90% 36%)" />
        </linearGradient>
        <filter id="walletShadow">
          <feDropShadow dx="0" dy="2" stdDeviation="2" floodOpacity="0.3" />
        </filter>
      </defs>
      {/* Wallet body */}
      <rect x="8" y="16" width="48" height="36" rx="4" fill="url(#walletGradient3D)" filter="url(#walletShadow)" />
      {/* Card slot line */}
      <path d="M8 28 L56 28" stroke="hsl(220 90% 26%)" strokeWidth="1" opacity="0.3" />
      {/* Wallet clasp */}
      <rect x="42" y="36" width="10" height="10" rx="5" fill="hsl(220 90% 36%)" />
      <circle cx="47" cy="41" r="3" fill="white" />
      {/* Glossy highlight */}
      <path d="M12 20 L52 20" stroke="white" strokeWidth="2" opacity="0.4" strokeLinecap="round" />
    </svg>
  )
}

export function Twitter({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

export function Route({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none">
      <defs>
        <linearGradient id="routeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="hsl(220 90% 66%)" />
          <stop offset="50%" stopColor="hsl(220 90% 56%)" />
          <stop offset="100%" stopColor="hsl(220 90% 46%)" />
        </linearGradient>
      </defs>
      <circle cx="12" cy="32" r="8" fill="url(#routeGradient)" stroke="hsl(220 90% 36%)" strokeWidth="1" />
      <circle cx="52" cy="32" r="8" fill="url(#routeGradient)" stroke="hsl(220 90% 36%)" strokeWidth="1" />
      <path d="M20 32 Q32 12 44 32" stroke="url(#routeGradient)" strokeWidth="3" fill="none" strokeLinecap="round" />
      <path d="M20 32 Q32 52 44 32" stroke="url(#routeGradient)" strokeWidth="3" fill="none" strokeLinecap="round" />
      <circle cx="32" cy="20" r="4" fill="white" opacity="0.9" />
      <circle cx="32" cy="44" r="4" fill="white" opacity="0.9" />
    </svg>
  )
}

export function Target({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none">
      <defs>
        <linearGradient id="targetGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="hsl(220 90% 66%)" />
          <stop offset="50%" stopColor="hsl(220 90% 56%)" />
          <stop offset="100%" stopColor="hsl(220 90% 46%)" />
        </linearGradient>
      </defs>
      <circle
        cx="32"
        cy="32"
        r="28"
        fill="url(#targetGradient)"
        opacity="0.2"
        stroke="hsl(220 90% 56%)"
        strokeWidth="1"
      />
      <circle
        cx="32"
        cy="32"
        r="20"
        fill="url(#targetGradient)"
        opacity="0.4"
        stroke="hsl(220 90% 46%)"
        strokeWidth="1"
      />
      <circle
        cx="32"
        cy="32"
        r="12"
        fill="url(#targetGradient)"
        opacity="0.6"
        stroke="hsl(220 90% 36%)"
        strokeWidth="1"
      />
      <circle cx="32" cy="32" r="6" fill="url(#targetGradient)" stroke="hsl(220 90% 26%)" strokeWidth="1" />
      <path d="M32 6 L32 58 M6 32 L58 32" stroke="white" strokeWidth="2" opacity="0.3" />
      <circle cx="32" cy="32" r="3" fill="white" />
    </svg>
  )
}

export function TargetPriceIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="targetPriceGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="hsl(220 90% 66%)" />
          <stop offset="100%" stopColor="hsl(220 90% 50%)" />
        </linearGradient>
      </defs>

      {/* Concentric circles - centered bullseye target */}
      <circle cx="32" cy="32" r="24" fill="none" stroke="hsl(220 90% 60%)" strokeWidth="3.5" />
      <circle cx="32" cy="32" r="18" fill="none" stroke="hsl(220 90% 55%)" strokeWidth="3.5" />
      <circle cx="32" cy="32" r="12" fill="none" stroke="hsl(220 90% 50%)" strokeWidth="3.5" />
      <circle cx="32" cy="32" r="6" fill="none" stroke="hsl(220 90% 45%)" strokeWidth="3.5" />

      {/* Center bullseye dot */}
      <circle cx="32" cy="32" r="3" fill="hsl(220 90% 50%)" />
    </svg>
  )
}

export function Gauge({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none">
      <defs>
        <linearGradient id="gaugeGradient3D" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="hsl(220 90% 76%)" />
          <stop offset="50%" stopColor="hsl(220 90% 56%)" />
          <stop offset="100%" stopColor="hsl(220 90% 46%)" />
        </linearGradient>
        <filter id="gaugeShadow">
          <feDropShadow dx="0" dy="2" stdDeviation="2" floodOpacity="0.3" />
        </filter>
      </defs>
      {/* Gauge outer ring */}
      <path
        d="M 32 52 A 20 20 0 1 1 32 12"
        stroke="url(#gaugeGradient3D)"
        strokeWidth="6"
        fill="none"
        strokeLinecap="round"
        filter="url(#gaugeShadow)"
      />
      {/* Gauge markers */}
      <circle cx="32" cy="12" r="2" fill="hsl(220 90% 56%)" />
      <circle cx="12" cy="32" r="2" fill="hsl(220 90% 56%)" />
      <circle cx="52" cy="32" r="2" fill="hsl(220 90% 56%)" />
      <circle cx="18" cy="18" r="2" fill="hsl(220 90% 56%)" />
      <circle cx="46" cy="18" r="2" fill="hsl(220 90% 56%)" />
      {/* Center hub */}
      <circle cx="32" cy="32" r="6" fill="url(#gaugeGradient3D)" filter="url(#gaugeShadow)" />
      {/* Needle pointing to zero (perfect execution) */}
      <path d="M 32 32 L 48 18" stroke="white" strokeWidth="3" strokeLinecap="round" filter="url(#gaugeShadow)" />
      {/* Glossy highlight */}
      <path
        d="M 30 14 A 18 18 0 0 1 46 20"
        stroke="white"
        strokeWidth="2"
        opacity="0.4"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function Rocket({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none">
      <defs>
        <linearGradient id="rocketBodyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="hsl(220 90% 66%)" />
          <stop offset="50%" stopColor="hsl(220 90% 56%)" />
          <stop offset="100%" stopColor="hsl(220 90% 46%)" />
        </linearGradient>
        <linearGradient id="rocketFlameGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="hsl(220 90% 76%)" />
          <stop offset="50%" stopColor="hsl(220 90% 66%)" />
          <stop offset="100%" stopColor="hsl(220 90% 56%)" />
        </linearGradient>
        <filter id="rocketShadow">
          <feDropShadow dx="0" dy="2" stdDeviation="2" floodOpacity="0.3" />
        </filter>
      </defs>

      {/* Exhaust flames - three clean vertical bars */}
      <rect x="18" y="50" width="4" height="10" rx="1" fill="url(#rocketFlameGradient)" />
      <rect x="22" y="50" width="4" height="12" rx="1" fill="url(#rocketFlameGradient)" />
      <rect x="26" y="50" width="4" height="10" rx="1" fill="url(#rocketFlameGradient)" />
      <rect x="34" y="50" width="4" height="10" rx="1" fill="url(#rocketFlameGradient)" />
      <rect x="38" y="50" width="4" height="12" rx="1" fill="url(#rocketFlameGradient)" />
      <rect x="42" y="50" width="4" height="10" rx="1" fill="url(#rocketFlameGradient)" />

      {/* Left fin */}
      <path d="M22 36 L12 48 L22 48 Z" fill="url(#rocketBodyGradient)" filter="url(#rocketShadow)" />

      {/* Right fin */}
      <path d="M42 36 L52 48 L42 48 Z" fill="url(#rocketBodyGradient)" filter="url(#rocketShadow)" />

      {/* Main rocket body - clean rounded rectangle */}
      <rect x="22" y="18" width="20" height="32" rx="2" fill="url(#rocketBodyGradient)" filter="url(#rocketShadow)" />

      {/* Nose cone - pointed triangle */}
      <path d="M32 6 L42 18 L22 18 Z" fill="url(#rocketBodyGradient)" filter="url(#rocketShadow)" />

      {/* Window - clean circle in the middle */}
      <circle cx="32" cy="28" r="5" fill="white" opacity="0.9" />
      <circle cx="32" cy="28" r="4" fill="hsl(220 90% 96%)" />

      {/* Bottom exhaust area - darker section */}
      <rect x="22" y="44" width="20" height="6" fill="hsl(220 90% 36%)" />
    </svg>
  )
}

export function TargetBullseyeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Outer ring */}
      <circle cx="15" cy="12" r="8" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.3" />
      {/* Middle ring */}
      <circle cx="15" cy="12" r="5.5" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
      {/* Inner ring */}
      <circle cx="15" cy="12" r="3" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.7" />
      {/* Bullseye center */}
      <circle cx="15" cy="12" r="1.2" fill="currentColor" />
      {/* Arrow shaft pointing right into target */}
      <line x1="2" y1="12" x2="14" y2="12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      {/* Arrow head pointing right - top fletching */}
      <line
        x1="14"
        y1="12"
        x2="11.5"
        y2="9.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Arrow head pointing right - bottom fletching */}
      <line
        x1="14"
        y1="12"
        x2="11.5"
        y2="14.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function ShieldWithCheck({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none">
      <defs>
        <linearGradient id="shieldCheckGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="hsl(220 90% 76%)" />
          <stop offset="30%" stopColor="hsl(220 90% 66%)" />
          <stop offset="70%" stopColor="hsl(220 90% 46%)" />
          <stop offset="100%" stopColor="hsl(220 90% 36%)" />
        </linearGradient>
        <filter id="shieldCheckShadow">
          <feDropShadow dx="0" dy="3" stdDeviation="3" floodOpacity="0.4" />
        </filter>
      </defs>
      {/* Shield base */}
      <path
        d="M32 8 L12 16 L12 32 C12 44 18 52 32 58 C46 52 52 44 52 32 L52 16 Z"
        fill="url(#shieldCheckGradient)"
        filter="url(#shieldCheckShadow)"
      />
      {/* Shield border */}
      <path
        d="M32 8 L12 16 L12 32 C12 44 18 52 32 58 C46 52 52 44 52 32 L52 16 Z"
        fill="none"
        stroke="hsl(220 90% 26%)"
        strokeWidth="0.5"
      />
      {/* Glossy highlight */}
      <path
        d="M32 10 L16 16 L16 32 C16 40 20 46 28 50"
        fill="none"
        stroke="white"
        strokeWidth="2"
        opacity="0.4"
        strokeLinecap="round"
      />
      {/* Checkmark */}
      <path
        d="M24 32 L30 38 L42 26"
        stroke="white"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  )
}
