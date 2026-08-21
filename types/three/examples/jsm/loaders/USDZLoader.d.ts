import { LoadingManager } from "three";
import { USDLoader } from "./USDLoader.js";

/**
 * @deprecated USDZLoader has been deprecated. Please use USDLoader instead.
 */
declare class USDZLoader extends USDLoader {
    /**
     * @deprecated USDZLoader has been deprecated. Please use USDLoader instead.
     */
    constructor(manager?: LoadingManager);
}

export { USDZLoader };
