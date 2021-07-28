export = Controller;
declare function Controller(): void;
declare class Controller {
    outgoingMessages_: MessageBuffer;
    pubsub_: any;
    private lastUniqueId_;
    createUniqueId(location: Location): string;
    locationFromId_(id: string): Location;
    sendMessage(targetId: string, message: any): void;
    initSlaveComponent(
        ownerId: string | null,
        componentName: string,
        masterId: string | null,
        props: any
    ): string;
    registerComponent(component: any): void;
    unregisterComponent(component: any): void;
    getComponent(id: string): any;
    getOutgoingMessages(): Array<{
        targetId: string;
        message: any;
    }>;
    handleIncomingMessages(
        messages: Array<{
            targetId: string;
            message: any;
        }>
    ): void;
}
declare namespace Controller {
    const instance_: Controller;
    function getInstance(): Controller;
}
import MessageBuffer = require('./MessageBuffer.js');
import Location = require('./Location.js');
