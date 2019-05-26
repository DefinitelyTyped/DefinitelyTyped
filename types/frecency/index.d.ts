// // Type definitions for frecency 1.3
// // Project: https://github.com/mixmaxhq/frecency#readme
// // Definitions by: My Self <https://github.com/me>
// // Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

type idAttrFn = (result: string) => string
export default class Frecency<T = any> {
    constructor(constructOpts: {
        key: string
        idAttribute?: string | idAttrFn
        timeStampsLimit?: number
        recentSelectionsLimit?: number
        storageProvider?: object
        exactQueryMatchWeight?: number
        subQueryMatchWeight?: number
        recentSelectionsMatchWeight?: number
    })
    save: (arg: { searchQuery: T; selectedId: string }) => void
    sort:
        | ((arg: { searchQuery: T; searchResults: T[] }) => T[])
        | ((arg: { searchQuery: T; searchResults: T[]; keepScores?: boolean }) => (T & { _frecencyScore?: number })[])
}
