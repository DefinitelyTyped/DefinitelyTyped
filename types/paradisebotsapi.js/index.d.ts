export class get {
    constructor(id: string, auth: string);

    post(server_count: number, shard_count: number): Promise<void>;
}
