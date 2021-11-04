// Type definitions for loadicons 1.0
// Project: https://github.com/adobe/loadIcons
// Definitions by: Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

type Callback = (error: Error | null, svg: SVGElement) => void;

/**
 * Load SVG icon sprites safely and asynchronously
 */
declare function loadIcons(svgURL: string, callback: Callback): void;

export as namespace loadIcons;
export = loadIcons;
