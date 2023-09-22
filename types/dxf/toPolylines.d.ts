import * as Information from "./Information";

export interface PolylineExport { bbox: Box, polylines: Information.Polyline[] }


export default function toPolylines(parsed: Information.FileInfo): PolylineExport;
