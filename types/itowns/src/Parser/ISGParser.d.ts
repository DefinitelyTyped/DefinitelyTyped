import GeoidGrid from "../Core/Geographic/GeoidGrid";

declare namespace _default {
    interface ParsingOptions {
        in?: {
            crs?: string;
        };
        out?: {};
    }

    function parse(isg: string, options?: {
        in?: ParsingOptions;
    }): Promise<GeoidGrid>;
}
export default _default;
