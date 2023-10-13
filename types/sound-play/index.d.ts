// Type definitions for sound-play 1.1
// Project: https://github.com/leharry/sound-play
// Definitions by: Brenek Harrison <https://github.com/BrenekH>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

export function play(path: string, volume?: number): Promise<{ stdout: string | Buffer; stdin: string | Buffer }>;
