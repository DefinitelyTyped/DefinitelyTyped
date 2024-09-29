import { Group } from "../../objects/Group.js";
declare class BundleGroup extends Group {
    readonly isBundleGroup: true;
    readonly type: string;
    static: boolean;
    version: number;
    constructor();
    set needsUpdate(value: boolean);
}
export default BundleGroup;
