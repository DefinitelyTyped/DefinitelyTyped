// Type definitions for php-serialize 3.0
// Project: https://github.com/steelbrain/php-serialize
// Definitions by: Changhui Lee <https://github.com/blurfx>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.7

export function isSerialized(givenItem: any, strict?: any): any;

export function serialize(item: any, scope?: any, givenOptions?: SerializeOptions): string;

export function unserialize(item: any, scope?: any, givenOptions?: any): any;
