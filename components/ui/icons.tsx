type IconProps = {
  className?: string;
};

export function ArrowIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 12h13" stroke="currentColor" strokeWidth="1.7" strokeLinecap="square" />
      <path d="m13 6 6 6-6 6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="square" />
    </svg>
  );
}

export function PhoneIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M7.5 4h3l1.5 5-2.2 1.4a13.4 13.4 0 0 0 4.8 4.8L16 13l5 1.5v3A2.5 2.5 0 0 1 18.2 20C10.3 19.5 4.5 13.7 4 5.8A2.5 2.5 0 0 1 6.5 4h1Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}

export function InstagramIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="4" y="4" width="16" height="16" rx="4" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="3.4" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="16.8" cy="7.2" r="1" fill="currentColor" />
    </svg>
  );
}

export function FacebookIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M14 8.2h2.4V4.4c-.4-.1-1.8-.2-3.4-.2-3.4 0-5.7 2.1-5.7 6v3.4H3.6V18h3.7v5h4.5v-5h3.5l.6-4.4h-4.1v-3c0-1.3.4-2.4 2.2-2.4Z" />
    </svg>
  );
}

export function BlueprintMark({ className = "h-10 w-10" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <path d="M24 3 41 13v22L24 45 7 35V13L24 3Z" stroke="currentColor" strokeWidth="1.7" />
      <path d="M24 9 36 16v14l-12 7-12-7V16L24 9Z" stroke="currentColor" strokeWidth="1.7" />
      <path d="M24 9v12l10 6M24 21l-10 6M24 37V25" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  );
}
