// Type definitions for Bloomrun 4.1.1
// Project: https://github.com/mcollina/bloomrun
// Definitions by: Ilham Khabibullin <https://github.com/ilhamkhabibullin>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace bloomrun {

    interface Bloomrun {
        constructor(opts): any
      
        _isDeep
        _buckets: Array<bloomrun.Bucket>
        _regexBucket: bloomrun.Bucket
        _defaultResult
        _tree
        _algo
      
        default: (payload) => void
        add: (pattern, payload) => Bloomrun
        remove: (pattern, payload?) => Bloomrun
        lookup: (pattern, opts) => any
        list: (pattern, opts?) => Array<any>
        iterator: (obj, opts) => bloomrun.Iterator
        [Symbol.iterator]: () => any
    }
    
    interface Iterator {
        constructor(parent, obj, asMatch): any
        _asMatch
        parent
        pattern
        buckets: Array<Bucket>
        visited
        i
        k
        regexpBucket
    
        nextBucket: () => void
        one: () => void
        next: () => void
        [Symbol.iterator]: () => void
    }
    
    interface Bucket {
        constructor(parent): any
    
        data
        _algo
        weight
        _isDeep
    
        add: (set) => Bucket
        remove: (pattern, payload) => boolean
        forEach: (func, that) => Bucket
    }    
}

export default function Bloomrun (opts): bloomrun.Bloomrun
