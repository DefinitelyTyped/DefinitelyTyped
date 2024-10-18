import { RemoteValue } from "./remoteValue";

interface Source {
    realm: string;
    context?: string;
}

declare class Message {
    private _channel: string;
    private _data: RemoteValue;
    private _source: Source;

    constructor(
        channel: string,
        data: RemoteValue,
        source: Source,
    );

    get channel(): string;

    get data(): RemoteValue;

    get source(): Source;
}

declare class source {
    private _browsingContextId: string | null;
    private _realmId: string;

    constructor(
        source: Source,
    );

    get browsingContextId(): string | null;

    get realmId(): string;
}
