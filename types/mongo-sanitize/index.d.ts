// Type definitions for mongo-sanitize 1.0
// Project: https://github.com/vkarpov15/mongo-sanitize
// Definitions by: Cedric Cazin <https://github.com/CedricCazin>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

export function sanitize<T extends object>(v: T): T;

export as namespace mongoSanitize;
