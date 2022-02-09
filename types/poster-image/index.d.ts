// Type definitions for poster-image 1.1
// Project: https://github.com/herrmannplatz/poster-image#readme
// Definitions by: Florian Keller <https://github.com/ffflorian>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare function poster(file: File | Blob): Promise<Blob>;

export = poster;
export as namespace poster;
