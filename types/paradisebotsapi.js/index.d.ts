// Type definitions for paradisebotsapi.js 1.0
// Project: https://github.com/ParadiseBotList/paradisebotsapi.js#readme
// Definitions by: DefinitelyTyped <https://github.com/DefinitelyTyped>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export class get {
    constructor(id: string, auth: string);

    post(server_count: number, shard_count: number): Promise<void>;
}
