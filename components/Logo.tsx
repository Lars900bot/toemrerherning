import config from "@/lib/site-config";

export default function Logo() {
  return (
    <div className="flex items-center gap-2">
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="36" height="36" rx="8" fill="#f97316"/>
        <path d="M8 20l8-8 3 3-8 8-3-3z" fill="white"/>
        <path d="M19 9l4 4-2 2-4-4 2-2z" fill="white"/>
        <rect x="22" y="6" width="8" height="5" rx="1" fill="white" transform="rotate(45 22 6)"/>
      </svg>
      <div>
        <div className="text-white font-bold text-lg leading-tight">{config.companyName}</div>
        <div className="text-orange-300 text-xs leading-tight">Professionelt tømrerarbejde i {config.by}</div>
      </div>
    </div>
  );
}
