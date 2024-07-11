import { FeatureCollection } from "../Core/Feature";

export interface ParsingOptions {
    in: any;
    out: any;
}

declare namespace _default {
    function parse(kmlFile: XMLDocument, options: ParsingOptions): Promise<FeatureCollection>;
}
export default _default;
