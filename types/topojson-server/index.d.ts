// Type definitions for topojson-server 3.0
// Project: https://github.com/topojson/topojson-server
// Definitions by: Ricardo Mello <https://github.com/ricmello>
//                 Zhutian Chen <https://github.com/chenzhutian>
//                 denisname <https://github.com/denisname>
//                 Russell Porter <https://github.com/russellporter>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.5

import * as GeoJSON from "geojson";
import * as TopoJSON from "topojson-specification";

export function topology(objects: {[k: string]: GeoJSON.GeoJsonObject}, quantization?: number): TopoJSON.Topology;
