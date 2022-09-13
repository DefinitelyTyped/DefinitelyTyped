export = Controller;
declare function Controller(): void;
declare class Controller {
    private outgoingMessages_;
    private pubsub_;
    private lastUniqueId_;
    createUniqueId(location: Location): string;
    private locationFromId_;
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
    function getInstance(): Controller;
}
import Location = require('./Location.js');
