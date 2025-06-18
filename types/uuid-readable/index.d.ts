declare function check(readable: string, uuid: string): boolean;
declare function generate(uuid?: string): string;
declare function inverse(readable: string): string;
declare function short(uuid: string): string;

export { check, generate, inverse, short };
