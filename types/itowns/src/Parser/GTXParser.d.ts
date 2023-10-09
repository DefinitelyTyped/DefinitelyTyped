import GeoidGrid from "../Core/Geographic/GeoidGrid";

declare namespace _default {
    interface ParsingOptions {
        in?: {
            crs?: string;
            dataType: "float" | "double";
        };
        out?: {};
    }

    function parse(gtx: ArrayBuffer, options?: {
        in?: ParsingOptions;
    }): Promise<GeoidGrid>;
}
export default _default;
