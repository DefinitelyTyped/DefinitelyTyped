import { EntityType } from "../api/frame/frame";
import { Identity } from "../identity";
import { NewConnectConfig } from "../transport/wire";
export interface Environment {
    writeToken(path: string, token: string): Promise<string>;
    retrievePort(config: NewConnectConfig): Promise<number>;
    getNextMessageId(): any;
    getRandomId(): string;
    createChildWindow(options: any): Promise<any>;
    isWindowExists(uuid: string, name: string): boolean;
    getWebWindow(identity: Identity): Window;
    getCurrentEntityIdentity(): Identity;
    getCurrentEntityType(): EntityType;
    raiseEvent(eventName: string, eventArgs: any): void;
}
export declare const notImplementedEnvErrorMsg = "Not implemented in this environment";
