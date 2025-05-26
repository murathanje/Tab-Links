import { useId, SVGProps } from "react";

import { cn } from "@/lib/utils";

// Define maps for variants and intensities
const intensityMap = {
  light: {
    opacity: "opacity-15",
    color: "text-primary",
    dotSize: 0.8,
    dotWidth: 18,
  },
  medium: {
    opacity: "opacity-25",
    color: "text-primary",
    dotSize: 1.0,
    dotWidth: 22,
  },
  strong: {
    opacity: "opacity-35",
    color: "text-primary",
    dotSize: 1.2,
    dotWidth: 26,
  },
};

const variantMap = {
  left: {
    position: "absolute left-0 top-0 w-1/2 h-full",
    mask: "[mask-image:linear-gradient(to_right,white,transparent)]",
  },
  right: {
    position: "absolute right-0 top-0 w-1/2 h-full",
    mask: "[mask-image:linear-gradient(to_left,white,transparent)]",
  },
  center: {
    position: "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full",
    mask: "[mask-image:radial-gradient(ellipse_at_center,white_70%,transparent_100%)]",
  },
  full: {
    position: "absolute inset-0",
    mask: "",
  },
};

interface DotPatternProps {
  width?: number;
  height?: number;
  x?: number;
  y?: number;
  cx?: number;
  cy?: number;
  cr?: number;
  className?: string;
  variant?: keyof typeof variantMap;
  intensity?: keyof typeof intensityMap;
}

function DotPattern({
  width: propWidth,
  height: propHeight,
  x = 0,
  y = 0,
  cx: propCx,
  cy: propCy,
  cr: propCr,
  className,
  variant,
  intensity,
  ...props
}: DotPatternProps & SVGProps<SVGSVGElement>) {
  const id = useId();

  const intensitySettings = intensity ? intensityMap[intensity] : null;
  const variantSettings = variant ? variantMap[variant] : null;

  // Determine final values, giving precedence to direct props
  const width = propWidth ?? intensitySettings?.dotWidth ?? 16;
  const height = propHeight ?? intensitySettings?.dotWidth ?? 16;
  const cx = propCx ?? intensitySettings?.dotSize ?? 1;
  const cy = propCy ?? intensitySettings?.dotSize ?? 1;
  const cr = propCr ?? intensitySettings?.dotSize ?? 1;

  const svgClassName = cn(
    "pointer-events-none", // Base class
    variantSettings ? variantSettings.position : "absolute inset-0 h-full w-full", // Default to full if no variant
    variantSettings?.mask,
    intensitySettings?.opacity,
    // Use fill- based on intensity color, or default. The original fill was fill-neutral-400/80
    intensitySettings ? intensitySettings.color.replace("text-", "fill-") : "fill-neutral-400/80",
    // Ensure -z-10 is applied if it was part of SectionDotPattern's common classes
    (variant || intensity) && "pointer-events-none -z-10",
    className, // Allow overriding or extending via prop
  );

  return (
    <svg
      aria-hidden="true"
      className={svgClassName}
      {...props}
    >
      <defs>
        <pattern
          id={id}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          patternContentUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <circle id="pattern-circle" cx={cx} cy={cy} r={cr} />
        </pattern>
      </defs>
      <rect width="100%" height="100%" strokeWidth={0} fill={`url(#${id})`} />
    </svg>
  );
}

export { DotPattern };
