// Type definitions for uuid-readable 0.0
// Project: https://github.com/Debdut/uuid-readable#readme
// Definitions by: Florian Imdahl <https://github.com/ffflorian>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare function check(readable: string, uuid: string): boolean;
declare function generate(uuid?: string): string;
declare function inverse(readable: string): string;
declare function short(uuid: string): string;

export { check, generate, inverse, short };
