// import EntwinePointTileNode from "../Core/EntwinePointTileNode";
import Extent from "../Core/Geographic/Extent";
import PointCloudLayer, { PointCloudLayerOptions } from "./PointCloudLayer";

export interface EntwinePointTileLayerOptions extends PointCloudLayerOptions {}

declare class EntwinePointTileLayer extends PointCloudLayer {
    constructor(id: string, config: PointCloudLayerOptions);

    readonly isEntwinePointTileLayer: boolean;

    root: /* EntwinePointTileNode */ any;
    extent: Extent;

    get spacing(): number;
}

export default EntwinePointTileLayer;
