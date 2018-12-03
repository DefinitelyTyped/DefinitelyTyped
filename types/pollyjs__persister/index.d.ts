// Type definitions for @pollyjs/persister 1.3
// Project: https://github.com/netflix/pollyjs/tree/master/packages/@pollyjs/persister
// Definitions by: feinoujc <https://github.com/feinoujc>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export default class Persister {
    static readonly name: string;
    static readonly type: string;
    persist(): Promise<void>;
}
