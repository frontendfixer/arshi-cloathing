import type { ReactNode } from "react";

export function OrnateDivider({ className = "" }: { className?: string }) {
  return (
    <div
      className={`flex items-center justify-center gap-3 ${className}`}
      aria-hidden
    >
      <span className="h-px w-14 bg-gradient-to-r from-transparent to-gold sm:w-24" />
      <svg
        viewBox="0 0 48 28"
        className="h-7 w-12 text-gold"
        fill="none"
        stroke="currentColor"
      >
        <ellipse cx="24" cy="15" rx="8" ry="10" strokeWidth="1.2" />
        <path
          d="M24 4.5c1.4-2.2 4.2-2.6 5.6-1.2"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
        <path
          d="M16 15h16"
          strokeWidth="0.8"
          opacity="0.7"
          strokeLinecap="round"
        />
        <circle cx="24" cy="15" r="1.4" fill="currentColor" stroke="none" />
      </svg>
      <span className="h-px w-14 bg-gradient-to-l from-transparent to-gold sm:w-24" />
    </div>
  );
}

export function GoldCornerFrame({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`relative rounded-2xl border border-gold/70 bg-white shadow-[0_18px_50px_-28px_rgba(139,30,63,0.35)] ${className}`}
    >
      <span className="pointer-events-none absolute -left-px -top-px h-8 w-8 rounded-tl-2xl border-l-2 border-t-2 border-maroon/70" />
      <span className="pointer-events-none absolute -right-px -top-px h-8 w-8 rounded-tr-2xl border-r-2 border-t-2 border-maroon/70" />
      <span className="pointer-events-none absolute -bottom-px -left-px h-8 w-8 rounded-bl-2xl border-b-2 border-l-2 border-maroon/70" />
      <span className="pointer-events-none absolute -bottom-px -right-px h-8 w-8 rounded-br-2xl border-b-2 border-r-2 border-maroon/70" />
      {children}
    </div>
  );
}

export function FloralCorner({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 120"
      className={`pointer-events-none text-rose/25 ${className}`}
      fill="none"
      aria-hidden
    >
      <path
        d="M18 96c18-8 32-24 38-42"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <path
        d="M28 88c10-18 12-36 8-52"
        stroke="currentColor"
        strokeWidth="1"
      />
      <circle cx="36" cy="42" r="7" fill="currentColor" opacity="0.55" />
      <circle cx="52" cy="58" r="4.5" fill="currentColor" opacity="0.4" />
      <circle cx="22" cy="70" r="3.5" fill="#C9A876" opacity="0.7" />
    </svg>
  );
}
