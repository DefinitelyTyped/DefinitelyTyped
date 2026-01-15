export = ServerComponent;
declare function ServerComponent(parent: Component, opt_props?: any): void;
declare class ServerComponent {
    constructor(parent: Component, opt_props?: any);
    private pairId_;
    private pairName_;
    dispose(): void;
}
import Component = require("./Component.js");
