// Type definitions for locate-chrome 0.1
// Project: https://github.com/davidtheclark/locate-chrome
// Definitions by: Ben Houston <https://github.com/bhouston>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// locate-chrome.d.ts
declare function locateChrome(cb?: (path: string) => void): Promise<string>;

export = locateChrome;
