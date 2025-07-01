export = GlobalAction;
declare function GlobalAction(name: string): void;
declare class GlobalAction {
    constructor(name: string);
    private name_;
    onShow: Adapter;
    params: Record<string, string | number | boolean | Date>;
    activity: string | null;
    caption: string;
    enabled: boolean;
    hasPermissionControl: boolean;
    defaultKeyParamName: string;
    help: string;
    hint: string;
    interaction: string | null;
    name: string;
    targetKey: number | null;
    visible: boolean;
    addParameter(param: { name: string; value: string | number | boolean | Date | null }): void;
    getParameter(paramName: string): {
        name: string;
        value: string | number | boolean | Date | null;
    };
    getParameters(): any;
    clone(): GlobalAction;
}
import Adapter = require("@nginstack/engine/lib/event/Adapter.js");
