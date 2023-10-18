type Style = "esv-long" | "esv-short" | "niv-long" | "niv-short" | "niv-shortest" | "nlt-long" | "nlt-short";
declare function osisToEn(style: Style, osis: string, context?: string): string;
export = osisToEn;
