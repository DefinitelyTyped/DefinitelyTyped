// Type definitions for Bloomrun 4.1.1
// Project: https://github.com/mcollina/bloomrun
// Definitions by: Ilham Khabibullin <https://github.com/ilhamkhabibullin>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

type Algo = (a: { weight: number } | any, b: { weight: number } | any) => number
type Pattern = { [key: string]: any }

type onlyPatterns = (current) => Pattern

type patternsAndPayloads = (current) => {
    pattern: Pattern,
    payload: any
}

interface PatternSet {
    constructor(pattern: Pattern, payload: any, isDeep: boolean): PatternSet
    pattern: Pattern | any
    payload: Pattern | any
    weight: number
}

declare namespace bloomrun {

    interface Bloomrun {
        constructor(opts: { indexing: 'insertion' | 'depth' }): Bloomrun

        _isDeep: boolean
        _buckets: Array<bloomrun.Bucket>
        _regexBucket: bloomrun.Bucket
        _defaultResult: null | any
        _tree: any
        _algo: Algo

        default: (payload: any) => void
        add: (pattern: Pattern, payload: any) => Bloomrun
        remove: (pattern: Pattern, payload?: any) => Bloomrun
        lookup: (pattern: Pattern, opts: { patterns: boolean }) => any
        list: (pattern: Pattern, opts?: { patterns: boolean, payload: boolean }) => Array<any>
        iterator: (obj: any | null, opts: { patterns: boolean, payload: boolean }) => bloomrun.Iterator
        [Symbol.iterator]: () => any
    }
    
    interface Iterator {
        constructor(parent: Bloomrun, obj: Pattern, asMatch: onlyPatterns | patternsAndPayloads): Iterator

        _asMatch: onlyPatterns | patternsAndPayloads
        parent: Bloomrun
        pattern: Pattern
        buckets: Array<Bucket>
        visited: Set<any> | any
        i: number
        k: number
        regexpBucket: Bucket
    
        nextBucket: () => void
        one: () => any
        next: () => any
        [Symbol.iterator]: () => any
    }
    
    interface Bucket {
        constructor(parent: Bloomrun): Bucket
    
        data: any[]
        _algo: Algo
        weight: number
        _isDeep: boolean
    
        add: (set) => Bucket
        remove: (pattern: Pattern, payload: any) => boolean
        forEach: (func: <T>(currentValue: T, index?: number, array?: Array<T>) => any, that: Bloomrun) => Bucket
    }
}

export default function Bloomrun (opts: { indexing: 'insertion' | 'depth' }): bloomrun.Bloomrun
