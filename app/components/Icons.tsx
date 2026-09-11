type IconProps = {
  className?: string;
};

export function FacebookIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
      className={className}
    >
      <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.84c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.91h-2.34V22C18.34 21.24 22 17.08 22 12.06z" />
    </svg>
  );
}

export function SparkleIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className={className}
    >
      <path d="M12 3.5 13.4 8.8 18.5 10 13.4 11.2 12 16.5 10.6 11.2 5.5 10 10.6 8.8 12 3.5Z" />
      <path d="M18.5 15.5 19.1 17.7 21.2 18.3 19.1 18.9 18.5 21.1 17.9 18.9 15.8 18.3 17.9 17.7 18.5 15.5Z" />
      <path d="M5.8 14.2 6.2 15.8 7.8 16.2 6.2 16.6 5.8 18.2 5.4 16.6 3.8 16.2 5.4 15.8 5.8 14.2Z" />
    </svg>
  );
}

export function SareeIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className={className}
    >
      <path d="M8 4.5c2.2 1.6 5.8 1.6 8 0" />
      <path d="M8 4.5c0 3.2-1.4 6.6-3 10.2 2.4.8 5.6 1.2 7 3.8 1.4-2.6 4.6-3 7-3.8-1.6-3.6-3-7-3-10.2" />
      <path d="M12 18.5v2" />
      <path d="M9 21.5h6" />
    </svg>
  );
}

export function MirrorIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className={className}
    >
      <ellipse cx="12" cy="11" rx="6.2" ry="7.2" />
      <path d="M12 3.2c.5-.7 1.4-1.2 2.4-1" />
      <path d="M9.5 20.2h5" />
      <path d="M12 18.2v2" />
      <path d="M9.8 8.2c.8-1.2 2-1.8 3.4-1.6" />
    </svg>
  );
}

export function HeartIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className={className}
    >
      <path d="M12 19.4s-6.4-3.9-8.1-7.6C2.6 9.4 3.6 6.4 6.5 5.7c1.8-.4 3.5.4 4.5 1.8 1-1.4 2.7-2.2 4.5-1.8 2.9.7 3.9 3.7 2.6 6.1-1.7 3.7-8.1 7.6-8.1 7.6Z" />
    </svg>
  );
}

export function PinIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className={className}
    >
      <path d="M12 21s6-5.2 6-10.2A6 6 0 0 0 6 10.8C6 15.8 12 21 12 21Z" />
      <circle cx="12" cy="10.8" r="2.1" />
    </svg>
  );
}

export function MenuIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      aria-hidden
      className={className}
    >
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

export function CloseIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      aria-hidden
      className={className}
    >
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}
