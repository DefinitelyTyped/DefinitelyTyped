// Type definitions for sha256-file 1.0
// Project: https://github.com/so-ta/sha256-file
// Definitions by: Florian Imdahl <https://github.com/ffflorian>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace sha256File {
    type CallbackFunction = (error: Error | null, sum: string) => void;
}

declare function sha256File(filename: string, callback: sha256File.CallbackFunction): void;
declare function sha256File(filename: string): string;

export = sha256File;
