import C3DTilesTypes from "./C3DTilesTypes";

declare class C3DTileset {
    constructor(json: any, baseURL: string, registeredExtensions: any); // TODO

    type: C3DTilesTypes;
    asset: any; // TODO
    properties: any; // TODO
    geometricError: number;
    extensionsUsed: string[];
    extensionsRequired: string[];
    tiles: any[]; // TODO
    extensions?: any; // TODO

    parseTiles(tile: object, baseURL: string, parent: object, registeredExtensions: object): void; // TODO
    extendTileset(tileset: any, nodeId: any, baseURL: any, registeredExtensions: any): void; // TODO
}

export default C3DTileset;
