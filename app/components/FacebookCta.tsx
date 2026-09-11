import type { ReactNode } from "react";
import { FACEBOOK_URL } from "@/app/lib/constants";

type FacebookCtaProps = {
  children: ReactNode;
  className?: string;
  ariaLabel?: string;
};

export function FacebookCta({
  children,
  className,
  ariaLabel,
}: FacebookCtaProps) {
  return (
    <a
      href={FACEBOOK_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      aria-label={ariaLabel}
    >
      {children}
    </a>
  );
}

export const ctaPrimaryClass =
  "inline-flex items-center justify-center gap-2 rounded-full bg-maroon px-6 py-3 text-[0.95rem] font-semibold text-white shadow-[0_8px_24px_-8px_rgba(139,30,63,0.55)] transition hover:bg-rose hover:shadow-[0_10px_28px_-8px_rgba(184,50,116,0.5)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold";
