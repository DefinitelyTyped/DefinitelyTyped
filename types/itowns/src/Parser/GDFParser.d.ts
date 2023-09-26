import GeoidGrid from "../Core/Geographic/GeoidGrid";

declare namespace _default {
    interface ParsingOptions {
        in?: { crs?: string };
        out?: {};
    }

    function parse(gdf: string, options?: ParsingOptions): Promise<GeoidGrid>;
}
export default _default;
