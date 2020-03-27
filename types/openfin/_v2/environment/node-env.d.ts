import { Environment } from './environment';
import { NewConnectConfig } from '../transport/wire';
import { Identity } from '../identity';
import { EntityType } from '../api/frame/frame';
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
}
