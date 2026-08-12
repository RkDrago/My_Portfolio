const Background = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">

      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1600 800"
        preserveAspectRatio="none"
      >
        <defs>

          <pattern
            id="lines"
            width="8"
            height="8"
            patternUnits="userSpaceOnUse"
            patternTransform="rotate(45)"
          >
            <line
              x1="0"
              y1="0"
              x2="0"
              y2="8"
              stroke="#ffffff"
              strokeOpacity="0.08"
              strokeWidth="2"
            />
          </pattern>

          <linearGradient
            id="gold"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#8f7650" />
            <stop offset="30%" stopColor="#f4dfaa" />
            <stop offset="50%" stopColor="#fff1c2" />
            <stop offset="70%" stopColor="#c5a66b" />
            <stop offset="100%" stopColor="#8d744d" />
          </linearGradient>

          <filter id="glow">
            <feGaussianBlur
              stdDeviation="5"
              result="blur"
            />

            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

        </defs>

        <path
          d="M-100 700 L500 -100 L600 -100 L0 700 Z"
          fill="url(#lines)"
          opacity="0.5"
        />

        <path
          d="M1000 900 L1600 100 L1700 100 L1100 900 Z"
          fill="url(#lines)"
          opacity="0.4"
        />

        <path
          d="
            M 0 365
            L 390 365
            L 750 0
            L 1080 0
            L 1450 365
            L 1600 365

            L 1600 610
            L 1450 610
            L 1080 610
            L 750 245
            L 390 610
            L 0 610
            Z
          "
          fill="url(#lines)"
          opacity="0.9"
        />


        <path
          d="
            M 0 365
            L 390 365
            L 750 0
            L 1080 0
            L 1450 365
            L 1600 365
          "
          fill="none"
          stroke="url(#gold)"
          strokeWidth="3"
          filter="url(#glow)"
        />

        <path
          d="
            M 0 610
            L 390 610
            L 750 245
            L 1080 245
            L 1450 610
            L 1600 610
          "
          fill="none"
          stroke="url(#gold)"
          strokeWidth="3"
          opacity="0.5"
        />

      </svg>

    </div>
  );
};

export default Background;