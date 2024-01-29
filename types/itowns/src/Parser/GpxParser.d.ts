import { FeatureCollection } from "../Core/Feature";

export interface ParsingOptions {
    in: {
        crs: string;
    };
    out: any;
}

declare namespace _default {
    function parse(gpxFile: XMLDocument, options: ParsingOptions): Promise<FeatureCollection>;
}
export default _default;
