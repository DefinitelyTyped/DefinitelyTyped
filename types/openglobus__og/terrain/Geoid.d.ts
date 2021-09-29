export class Geoid {
    static loadModel(url: any): Promise<{
        scale: number;
        offset: number;
        width: number;
        height: number;
        rlonres: number;
        rlatres: number;
        i: number;
        rawfile: Uint8Array;
    }>;
    constructor(options?: {});
    model: any;
    src: any;
    _cached_ix: any;
    _cached_iy: number;
    _v00: number;
    _v01: number;
    _v10: number;
    _v11: number;
    _t: any;
    setModel(model: any): void;
    _rawval(ix: any, iy: any): number;
    getHeightLonLat(lonlat: any): any;
    getHeight(lon: any, lat: any): any;
}
