// Type definitions for Bloomrun 4.1.1
// Project: https://github.com/mcollina/bloomrun
// Definitions by: Ilham Khabibullin <https://github.com/ilhamkhabibullin>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

type Algo = (a: bloomrun.PatternSet, b: bloomrun.PatternSet) => number
type onlyPatterns = (current: bloomrun.PatternSet) => bloomrun.Pattern
type patternsAndPayloads = (current: bloomrun.PatternSet) => bloomrun.PatternAndPayload


type DefaultResult = any | null

declare namespace bloomrun {


    interface Pattern { 
        [key: string]: string | RegExp 
    }
    interface PatternAndPayload {
        pattern: Pattern,
        payload: any
    }
    interface PatternSet {
        constructor(
            pattern: Pattern,
            payload: any,
            isDeep: boolean
        ): PatternSet
    
        pattern: Pattern
        payload: any
        weight: number
    }
    

    interface Bloomrun {
        constructor(
            opts: { indexing: 'insertion' | 'depth' }
        ): Bloomrun

        _isDeep: boolean
        _buckets: Array<bloomrun.Bucket>
        _regexBucket: bloomrun.Bucket
        _defaultResult: DefaultResult
        _tree: { [key: string]: { [key: string]: Bucket } }
        _algo: Algo

        add: (pattern: Pattern, payload?: any) => Bloomrun
        remove: (pattern: Pattern, payload?: any) => Bloomrun
        lookup: (pattern: Pattern, opts?: { patterns: boolean }) => 
            | Pattern
            | PatternAndPayload
            | DefaultResult
        iterator: (obj: Pattern, opts?: { patterns: boolean, payload: boolean }) => bloomrun.Iterator
        list: (pattern: Pattern, opts?: { patterns: boolean, payload: boolean }) => Array<
            | Pattern
            | PatternAndPayload
            | { default: true, payload: DefaultResult }
            | DefaultResult
            >
        default: (payload: DefaultResult) => void
        [Symbol.iterator]: () => Pattern | PatternAndPayload
    }

    interface Iterator {
        constructor(
            parent: Bloomrun,
            obj: Pattern,
            asMatch: onlyPatterns | patternsAndPayloads
        ): Iterator

        _asMatch: onlyPatterns | patternsAndPayloads
        parent: Bloomrun
        pattern: Pattern
        buckets: Array<Bucket>
        bucket: Bucket
        visited: Set<PatternSet> | Bucket
        i: number
        k: number
        regexpBucket: Bucket
    
        nextBucket: () => Bucket
        one: () => Pattern | PatternAndPayload
        next: () => Pattern | PatternAndPayload
        [Symbol.iterator]: () => Pattern | PatternAndPayload
    }
    
    interface Bucket {
        constructor(
            parent: Bloomrun
        ): Bucket

        data: PatternSet[]
        _algo: Algo
        weight: number
        _isDeep: boolean

        add: (set: PatternSet) => Bucket
        remove: (pattern: Pattern, payload: any) => boolean

        forEach: (
            func: <T>(currentValue: T, index?: number, array?: Array<T>) => any,
            that: Bloomrun
        ) => Bucket
    }
}

export default function Bloomrun (opts?: { indexing: 'insertion' | 'depth' }): bloomrun.Bloomrun
