// Type definitions for terminal-image 0.1
// Project: https://github.com/sindresorhus/terminal-image#readme
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

export function buffer(imageBuffer: Buffer): Promise<string>;
export function file(filePath: string): Promise<string>;
