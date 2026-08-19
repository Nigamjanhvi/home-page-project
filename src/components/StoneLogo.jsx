export default function StoneLogo({ className = "h-8 w-10" }) {
  return (
    <svg className={className} viewBox="0 0 56 44" role="img" aria-label="Cairn logo">
      <rect x="7" y="29" width="42" height="9" rx="4.5" fill="#E8604C" />
      <rect x="12" y="18" width="32" height="9" rx="4.5" fill="#1F1F1D" opacity="0.88" />
      <rect x="18" y="7" width="20" height="9" rx="4.5" fill="#6B6862" opacity="0.78" />
    </svg>
  );
}
