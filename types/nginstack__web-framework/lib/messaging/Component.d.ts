export = Component;
declare function Component(owner: Component): void;
declare class Component {
    constructor(owner: Component);
    resources_: {
        [x: string]: Component;
    };
    controller_: Controller;
    componentId_: string;
    owner_: string;
    private pairId_;
    private addResource_;
    private removeResource_;
    dispose(): void;
    getComponentId(): string;
    getPairId(): string;
    sendMessage_(id: string, message: any): void;
    remoteCall_(action: string, ...args: any[]): void;
    handleMessage(message: any): boolean;
    getInstance(callback: (arg0: Component) => any): void;
    handleAction_(action: string, args: any[]): void;
    private act_dispose_;
}
import Controller = require('./Controller.js');
