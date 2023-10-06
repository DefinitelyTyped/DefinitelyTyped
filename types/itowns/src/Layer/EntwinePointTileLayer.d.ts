// import EntwinePointTileNode from "../Core/EntwinePointTileNode";
import Extent from "../Core/Geographic/Extent";
import PointCloudLayer, { PointCloudLayerOptions } from "./PointCloudLayer";

declare class EntwinePointTileLayer extends PointCloudLayer {
    constructor(id: string, config: PointCloudLayerOptions);

    readonly isEntwinePointTileLayer: boolean;

    root: /* EntwinePointTileNode */ any;
    extent: Extent;

    get spacing(): number;
}

export default EntwinePointTileLayer;
