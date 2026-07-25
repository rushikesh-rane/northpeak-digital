Changelog

Accessibility

Added aria-label attributes to the icon-only social media links in the footer (GitHub, LinkedIn, and X/Twitter). This provides discernible names for screen readers and resolves a Lighthouse accessibility flag.

Updated the text color for .service-link, .services-link, and .footer-credit a classes, swapping them from --color-primary to --color-secondary. This resolves a contrast failure, increasing the ratio against the background from 3.66:1 to 7.43:1 (comfortably clearing the 4.5:1 AA minimum for text).

Notes:

Icon strokes (e.g., .service-icon svg, .status svg) remain set to --color-primary as they only require a 3:1 contrast ratio for graphical objects.

Retained # href placeholders for social and quick-service links (as this is a training task), but external footer credits correctly utilize target="_blank" and rel="noopener noreferrer".