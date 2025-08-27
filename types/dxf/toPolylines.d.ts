import * as Information from "./Information";
import { Box } from "./Utils";

export interface PolylineExport {
    bbox: Box;
    polylines: Information.Polyline[];
}

export default function toPolylines(parsed: Information.FileInfo): PolylineExport;
