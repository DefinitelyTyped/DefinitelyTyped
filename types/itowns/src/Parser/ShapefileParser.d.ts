declare namespace _default {
    function parse(data: {
        shp: ArrayBuffer;
        shx: ArrayBuffer;
        dbf: ArrayBuffer;
        prj?: string;
    }, options?: any): Promise<any>; // TODO: FeatureCollection
}
export default _default;
