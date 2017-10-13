// Type definitions for sprintf 0.1
// Project: https://github.com/maritz/node-sprintf
// Definitions by: Carlos Ballesteros Velasco <https://github.com/soywiz>
//                 BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// Imported from: https://github.com/soywiz/typescript-node-definitions/sprintff.d.ts

export function sprintf(fmt: string, ...args: any[]): string;
export function vsprintf(fmt: string, args: any[]): string;
