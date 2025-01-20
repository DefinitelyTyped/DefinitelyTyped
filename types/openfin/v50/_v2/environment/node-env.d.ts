import { EntityType } from "../api/frame/frame";
import { Identity } from "../identity";
import { NewConnectConfig } from "../transport/wire";
import { Environment } from "./environment";
export default class NodeEnvironment implements Environment {
    private messageCounter;
    writeToken: (path: string, token: string) => Promise<string>;
    retrievePort: (config: NewConnectConfig) => Promise<number>;
    getNextMessageId: () => any;
    createChildWindow: (options: any) => Promise<any>;
    getRandomId: () => string;
    isWindowExists: (uuid: string, name: string) => boolean;
    getWebWindow: (identity: Identity) => Window;
    getCurrentEntityIdentity: () => Identity;
    getCurrentEntityType: () => EntityType;
    raiseEvent: (eventName: string, eventArgs: any) => void;
}
