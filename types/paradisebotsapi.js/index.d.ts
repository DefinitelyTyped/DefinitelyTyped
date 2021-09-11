// Type definitions for paradisebotsapi.js 1.0
// Project: https://github.com/ParadiseBotList/paradisebotsapi.js#readme
// Definitions by: Yoshida Tomio <https://github.com/1chiSensei>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export class get {
    constructor(id: string, auth: string);

    post(server_count: number, shard_count: number): Promise<void>;
}
