type Callback = (error: Error | null, svg: SVGElement) => void;

/**
 * Load SVG icon sprites safely and asynchronously
 */
declare function loadIcons(svgURL: string, callback: Callback): void;

export as namespace loadIcons;
export = loadIcons;
