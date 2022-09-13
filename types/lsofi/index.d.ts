// Type definitions for lsofi 1.0
// Project: https://github.com/marionebl/lsofi#readme
// Definitions by: oof2win2 <https://github.com/oof2win2>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare function lsofi(port: number): Promise<number | null>;
export = lsofi;
