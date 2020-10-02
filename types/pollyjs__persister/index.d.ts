// Type definitions for @pollyjs/persister 4.3
// Project: https://github.com/netflix/pollyjs/tree/master/packages/@pollyjs/persister
// Definitions by: feinoujc <https://github.com/feinoujc>
//                 silverchen <https://github.com/silverchen>
//                 Offir Golan <https://github.com/offirgolan>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export default class Persister {
    static readonly id: string;
    static readonly type: string;
    readonly options: { [key: string]: any };
    persist(): Promise<void>;
}
