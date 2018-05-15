// Type definitions for muri 1.3
// Project: https://github.com/aheckmann/muri
// Definitions by: jloveridge <https://github.com/jloveridge>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = Muri;

declare function Muri(uri: string): Muri.ParsedUri;

declare namespace Muri {
    interface ParsedUri {
        db: string;
        hosts: Host[];
        options: any;
        auth?: {
            user: string;
            pass?: string;
        };
    }

    interface DefaultHost {
        host: string;
        port: number;
    }

    interface SocketHost {
        ipc: string;
    }

    type Host = DefaultHost | SocketHost;
}
