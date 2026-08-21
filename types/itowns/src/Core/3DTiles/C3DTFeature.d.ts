declare class C3DTFeature {
    constructor(
        tileId: number,
        batchId: number,
        groups: Array<{ start: number; count: number }>,
        info: object, // TODO
        userData?: object,
    ); // TODO

    tileId: number;
    batchId: number;
    groups: Array<{ start: number; count: number }>;
    userData: object; // TODO
    getInfo(): object; // TODO
}

export default C3DTFeature;
