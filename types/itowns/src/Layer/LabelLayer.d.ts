import Extent from "../Core/Geographic/Extent";
import Label from "../Core/Label";
import GeometryLayer from "./GeometryLayer";

type LabelLayerOptions = any;

declare class LabelLayer extends GeometryLayer {
    constructor(id: string, config?: LabelLayerOptions);

    readonly isLabelLayer: boolean;

    // domElement: HTMLDivElement;
    // buildExtent: boolean;
    // labelDomelement: any;
    // margin: any;

    // convert(data: FeatureCollection, extent: Extent): Label[];

    // preUpdate(): void;

    // update(context: any, layer: any, node: any, parent: any): any;

    // removeLabelsFromNodeRecursive(node: any): void;

    // removeNodeDomElement(node: any): void;
}

export default LabelLayer;
