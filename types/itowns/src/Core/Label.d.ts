import * as THREE from "three";
import Coordinates from "./Geographic/Coordinates";
import Style from "./Style";

declare class Label extends THREE.Object3D {
    constructor(
        content: string | Element,
        coordinates: Coordinates,
        style?: Style,
        sprites?: any,
    );

    readonly isLabel: boolean;

    // content: Element;
    // // TODO positon: THREE.Vector3
    // padding: number;
    // coordinates: Coordinates;
    // order: number;

    // projectedPosition: {
    //     x: number;
    //     y: number;
    // };
    // boundaries: {
    //     left: number;
    //     right: number;
    //     top: number;
    //     bottom: number;
    // };
    // baseContent: string | Element;
    // anchor: any;
    // styleOffset: any;
    // icon: any;
    // iconOffset: {
    //     left: number;
    //     right: number;
    //     top: number;
    //     bottom: number;
    // };
    // zoom: {
    //     min: any;
    //     max: any;
    // };
    // updateProjectedPosition(x: number, y: number): void;
    // updateCSSPosition(): void;
    // initDimensions(): void;
    // offset: {
    //     left: any;
    //     top: any;
    // } | undefined;
    // update3dPosition(crs: any): void;
    // updateElevationFromLayer(layer: any): true | undefined;
    // updateHorizonCullingPoint(): void;
}
export default Label;
