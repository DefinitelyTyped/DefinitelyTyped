// Type definitions for sizeof 1.0
// Project: https://github.com/lyroyce/sizeof
// Definitions by: Daniel Perez Alvarez <https://github.com/unindented>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export function sizeof(object: any, pretty?: false): number;
export function sizeof(object: any, pretty: true): string;
export function format(bytes: number): string;
