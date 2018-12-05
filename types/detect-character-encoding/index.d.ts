// Type definitions for detect-character-encoding 0.7
// Project: https://github.com/sonicdoe/detect-character-encoding#readme
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node"/>

export = detectCharacterEncoding;

declare function detectCharacterEncoding(buf: Buffer): detectCharacterEncoding.Result | null;

declare namespace detectCharacterEncoding {
    interface Result {
        encoding: string;
        confidence: number;
    }
}
