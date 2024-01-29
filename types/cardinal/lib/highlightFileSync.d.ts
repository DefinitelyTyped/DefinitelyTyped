import type { CardinalOptions } from "../index";

declare function highlightFileSync(fullPath: string, opts?: CardinalOptions): string;
export = highlightFileSync;
