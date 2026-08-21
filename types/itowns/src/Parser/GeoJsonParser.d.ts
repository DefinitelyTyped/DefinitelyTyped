import { FeatureCollection } from "../Core/Feature";

export interface ParsingOptions {
    in: {
        crs?: string;
    };
    out: any;
}

declare namespace _default {
    function parse(json: string, options?: ParsingOptions): Promise<FeatureCollection>;
}
export default _default;
