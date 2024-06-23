export = Component;
declare function Component(owner: Component): void;
declare class Component {
    constructor(owner: Component);
    private resources_;
    private controller_;
    private componentId_;
    private owner_;
    private pairId_;
    private addResource_;
    private removeResource_;
    dispose(): void;
    getComponentId(): string;
    getPairId(): string;
    private sendMessage_;
    private remoteCall_;
    handleMessage(message: any): boolean;
    getInstance(callback: (arg0: Component) => any): void;
    private handleAction_;
    private act_dispose_;
}
