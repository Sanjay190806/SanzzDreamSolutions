import React from "react";

const SvgIcon = ({ name, className = "h-6 w-6" }) => {
  const props = {
    className,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true"
  };

  const icons = {
    video: (
      <svg {...props}>
        <rect x="3" y="5" width="14" height="14" rx="3" />
        <path d="m17 9 4-2.5v11L17 15" />
        <path d="m8 10 4 2-4 2v-4z" />
      </svg>
    ),
    photo: (
      <svg {...props}>
        <rect x="3" y="4" width="18" height="16" rx="3" />
        <circle cx="9" cy="10" r="2" />
        <path d="m21 16-5-5L5 20" />
      </svg>
    ),
    data: (
      <svg {...props}>
        <path d="M4 19V5" />
        <path d="M4 19h16" />
        <path d="M8 15v-4" />
        <path d="M12 15V8" />
        <path d="M16 15v-7" />
      </svg>
    ),
    frontend: (
      <svg {...props}>
        <rect x="3" y="4" width="18" height="16" rx="3" />
        <path d="M8 9 5.5 12 8 15" />
        <path d="m16 9 2.5 3L16 15" />
        <path d="m13 8-2 8" />
      </svg>
    ),
    presentation: (
      <svg {...props}>
        <rect x="4" y="4" width="16" height="11" rx="2" />
        <path d="M12 15v5" />
        <path d="m8 20 4-3 4 3" />
        <path d="M8 9h4" />
        <path d="M8 12h8" />
      </svg>
    ),
    spreadsheet: (
      <svg {...props}>
        <rect x="4" y="3" width="16" height="18" rx="2" />
        <path d="M4 8h16" />
        <path d="M4 13h16" />
        <path d="M9 8v13" />
        <path d="M15 8v13" />
      </svg>
    ),
    document: (
      <svg {...props}>
        <path d="M7 3h7l4 4v14H7z" />
        <path d="M14 3v5h5" />
        <path d="M9 12h6" />
        <path d="M9 16h6" />
        <path d="M9 19h4" />
      </svg>
    ),
    check: (
      <svg {...props}>
        <path d="m20 6-11 11-5-5" />
      </svg>
    ),
    arrow: (
      <svg {...props}>
        <path d="M5 12h14" />
        <path d="m13 6 6 6-6 6" />
      </svg>
    ),
    spark: (
      <svg {...props}>
        <path d="M12 2 14 8l6 2-6 2-2 6-2-6-6-2 6-2 2-6z" />
        <path d="M19 16v4" />
        <path d="M17 18h4" />
      </svg>
    ),
    menu: (
      <svg {...props}>
        <path d="M4 6h16" />
        <path d="M4 12h16" />
        <path d="M4 18h16" />
      </svg>
    ),
    close: (
      <svg {...props}>
        <path d="M18 6 6 18" />
        <path d="m6 6 12 12" />
      </svg>
    ),
    mail: (
      <svg {...props}>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </svg>
    ),
    chat: (
      <svg {...props}>
        <path d="M21 11.5a8.4 8.4 0 0 1-9 8.4 8.8 8.8 0 0 1-3.8-.9L3 20l1.1-4.8A8.2 8.2 0 1 1 21 11.5z" />
      </svg>
    ),
    sun: (
      <svg {...props}>
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2" />
        <path d="M12 20v2" />
        <path d="M4.93 4.93l1.41 1.41" />
        <path d="M17.66 17.66l1.41 1.41" />
        <path d="M2 12h2" />
        <path d="M20 12h2" />
        <path d="M6.34 17.66l-1.41 1.41" />
        <path d="M19.07 4.93l-1.41 1.41" />
      </svg>
    ),
    moon: (
      <svg {...props}>
        <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
      </svg>
    )
  };

  return icons[name] || icons.spark;
};

export default SvgIcon;
