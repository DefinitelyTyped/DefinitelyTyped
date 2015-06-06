// Type definitions for collections
// Project: https://github.com/ttowncompiled/DefinitelyTyped
// Definitions by: Ian Riley <https://github.com/ttowncompiled>
// Definitions: https://github.com/borisyankov/DefinitelyTyped


// an Assortment allows a variety of types, and each object can be referenced
// by number or by string.
interface Assortment {
    [key: number]: any;
    [key: string]: any;
}

// a Collection only allows a single type, and each object can be referenced
// by number or by string.
interface Collection<T> {
    [key: number]: T;
    [key: string]: T;
}

// a Dictionary allows a variety of types, but each object must be referenced by string.
interface Dictionary {
    [key: string]: any;
}

// a Thesaurus only allows a single type, but each object must be referenced by string.
interface Thesaurus<T> {
    [key: string]: T;
}

// an object that allows a variety of types, but each object is referenced by number
// is: any[]
// an object that allows only a single type, but each object is referenced by number
// is: T[]
