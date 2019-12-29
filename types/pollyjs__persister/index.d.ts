// Type definitions for @pollyjs/persister 2.0
// Project: https://github.com/netflix/pollyjs/tree/master/packages/@pollyjs/persister
// Definitions by: feinoujc <https://github.com/feinoujc>
//                 silverchen <https://github.com/silverchen>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export default class Persister {
    static readonly name: string;
    static readonly type: string;
    readonly options: any;
    persist(): Promise<void>;
}
