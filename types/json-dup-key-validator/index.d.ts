// Type definitions for json-dup-key-validator 1.0
// Project: https://github.com/jackyjieliu/json-dup-key-validator
// Definitions by: Jamie Magee <https://github.com/JamieMagee>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export function validate(jsonString: string, allowDuplicatedKeys?: boolean): string | undefined;
export function parse(jsonString: string, allowDuplicatedKeys?: boolean): object;
