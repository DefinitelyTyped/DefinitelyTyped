import { EntityType } from "../api/frame/frame";
import { Identity } from "../identity";
import { NewConnectConfig } from "../transport/wire";
import { Environment } from "./environment";
export default class OpenFinEnvironment implements Environment {
    private raiseEventAsync;
    constructor();
    writeToken: (path: string, token: string) => Promise<string>;
    retrievePort: (config: NewConnectConfig) => Promise<number>;
    getNextMessageId: () => any;
    createChildWindow: (options: any) => Promise<any>;
    getRandomId: () => string;
    private resolveUrl;
    isWindowExists: (uuid: string, name: string) => boolean;
    getWebWindow: (identity: Identity) => Window;
    getCurrentEntityIdentity: () => Identity;
    getCurrentEntityType: () => EntityType;
    raiseEvent: (eventName: string, eventArgs: any) => void;
}
