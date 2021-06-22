// Type definitions for nib 1.1
// Project: https://github.com/visionmedia/nib#readme
// Definitions by: Nikita Umnov <https://github.com/NomNes>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare function nib(): (style: any) => void;

declare namespace nib {
    const version: string;
    const path: string;
}

export = nib;
