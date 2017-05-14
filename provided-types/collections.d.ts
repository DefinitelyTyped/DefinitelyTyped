// Type definitions for a provided set of basic collection types
// Project: https://github.com/borisyankov/DefinitelyTyped
// Definitions by: Ian Riley <https://github.com/ttowncompiled>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

// a Book allows a variety of types, but each object must be referenced by number.
interface Book {
    [key: number]: any;
}

// a Dictionary allows a variety of types, but each object must be referenced by string.
interface Dictionary {
    [key: string]: any;
}

// a Table only allows a single type, and each object must be referenced by number
interface Table<T> {
    [key: number]: T;
}

// a Thesaurus only allows a single type, and each object must be referenced by string.
interface Thesaurus<T> {
    [key: string]: T;
}

// an object that allows a variety of types that can be referenced by number or string is any[]
// an object that allows a single type, but can be referenced by number or string is T[]
