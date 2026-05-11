export namespace S2 {
    function LatLngToXYZ(latLng: S2.L.LatLng): [number, number, number];
    function XYZToLatLng(xyz: readonly [number, number, number]): S2.L.LatLng;
    function XYZToFaceUV(xyz: readonly [number, number, number]): [number, [number, number]];
    function FaceUVToXYZ(face: number, uv: readonly [number, number]): [number, number, number];
    function STToUV(st: readonly [number, number]): [number, number];
    function UVToST(uv: readonly [number, number]): [number, number];
    function STToIJ(st: readonly [number, number], order: number): [number, number];
    function IJToST(ij: readonly [number, number], order: number, offsets: readonly [number, number]): [number, number];
    function latLngToNeighborKeys(lat: number, lng: number, level: number): [string, string, string, string];
    const FACE_BITS: number;
    const MAX_LEVEL: number;
    const POS_BITS: number;
    function facePosLevelToId(faceN: number, posS: string, levelN?: number): string;
    function fromFacePosLevel(faceN: number, posS: string, levelN?: number): string;

    function keyToId(key: string): string;
    function toId(key: string): string;
    function toCellId(key: string): string;
    function fromKey(key: string): string;

    function idToKey(idS: string): string;
    function toKey(idS: string): string;
    function fromId(idS: string): string;
    function fromCellId(idS: string): string;
    function toHilbertQuadkey(idS: string): string;

    function keyToLatLng(key: string): S2.L.LatLng;
    function idToLatLng(id: string): S2.L.LatLng;
    function latLngToKey(lat: number, lng: number, level: number): string;
    function latLngToQuadkey(lat: number, lng: number, level: number): string;
    function stepKey(key: string, num: number): string;
    function prevKey(key: string): string;
    function nextKey(key: string): string;

    interface S2Cell {
        face: number;
        ij: [number, number];
        level: number;
        toString(): string;
        getLatLng(): S2.L.LatLng;
        getCornerLatLngs(): [S2.L.LatLng, S2.L.LatLng, S2.L.LatLng, S2.L.LatLng];
        getFaceAndQuads(): [number, number[]];
        toHilbertQuadkey(): string;
        getNeighbors(): [S2Cell, S2Cell, S2Cell, S2Cell];
    }
}

export namespace S2.L {
    function LatLng(rawLat: number, rawLng: number, noWrap?: boolean): LatLng;
    interface LatLng {
        lat: number;
        lng: number;
    }
}

export namespace S2.L.LatLng {
    const DEG_TO_RAD: number;
    const RAD_TO_DEG: number;
}

export namespace S2.S2Cell {
    function FromHilbertQuadKey(hilbertQuadkey: string): S2.S2Cell;
    function FromLatLng(latLng: S2.L.LatLng, level: number): S2.S2Cell;
    function FromFaceIJ(face: number, ij: readonly [number, number], level: number): S2.S2Cell;
    function latLngToNeighborKeys(lat: number, lng: number, level: number): [string, string, string, string];
    function facePosLevelToId(faceN: number, posS: string, levelN?: number): string;

    function keyToId(key: string): string;

    function toHilbertQuadkey(idS: string): string;
    function toKey(idS: string): string;
    function idToKey(idS: string): string;

    function keyToLatLng(key: string): S2.L.LatLng;
    function idToLatLng(id: string): S2.L.LatLng;
    function latLngToKey(lat: number, lng: number, level: number): string;
    function prevKey(key: string): string;
    function nextKey(key: string): string;
}
