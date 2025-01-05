import { Object3D } from "three";

/**
 * @deprecated The module has been deprecated and will be removed with r172. Please migrate to
 * https://github.com/takahirox/three-mmd-loader instead.
 */
export class MMDExporter {
    constructor();

    parseVpd(skin: Object3D, outputShiftJis: boolean, useOriginalBones: boolean): [] | Uint8Array;
}
