export = MasterComponent;
declare function MasterComponent(parent: Component, opt_props?: any): void;
declare class MasterComponent {
    constructor(parent: Component, opt_props?: any);
    pairId_: any;
    private pairName_;
    dispose(): void;
}
import Component = require('./Component.js');
