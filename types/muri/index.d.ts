export = Muri;

declare function Muri(uri: string): Muri.ParsedUri;

declare namespace Muri {
    interface ParsedUri {
        db: string;
        hosts: Host[];
        options: any;
        auth?: {
            user: string;
            pass?: string | undefined;
        } | undefined;
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
