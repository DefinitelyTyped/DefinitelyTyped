export function pingWithPromise(ip: string, port?: number): Promise<ServerInfo>;
export function ping(ip: string, port: number, callback: (info: ServerInfo) => any): void;

export interface ServerInfo {
    version: ServerVersion;
    players: ServerPlayers;
    description: ServerDescription;
    favicon: ServerFavicon;
    modinfo: ServerModInfo;
    ping: ServerPing;
}

export interface ServerVersion {
    name: string;
    protocol: number;
}

export interface ServerPlayers {
    online: number;
    max: number;
}

export interface ServerDescription {
    text: string;
}

export type ServerFavicon = string;

export interface ServerModInfo {
    type: string;
    modList: ServerMod[];
}

export interface ServerMod {
    modid: string;
    version: string;
}

export type ServerPing = number;
