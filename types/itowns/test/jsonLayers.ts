interface TileMatrixSetLimit {
    minTileRow: number;
    maxTileRow: number;
    minTileCol: number;
    maxTileCol: number;
}

export interface IgnMNTHighres {
    id: string;
    noDataValue: number;
    clampValues: {
        min: number;
    };
    updateStrategy: {
        type: 1;
        options: {
            groups: number[];
        };
    };
    source: {
        url: string;
        crs: string;
        format: string;
        attribution: {
            name: string;
            url: string;
        };
        name: string;
        tileMatrixSet: string;
        tileMatrixSetLimits: Record<number, TileMatrixSetLimit>;
    };
}

export interface OpenSM {
    id: string;
    source: {
        crs: string;
        isInverted: boolean;
        format: string;
        url: string;
        attribution: {
            name: string;
            url: string;
        };
        tileMatrixSet: string;
    };
}

export interface Ortho {
    id: string;
    source: {
        url: string;
        crs: string;
        networkOptions: {
            crossOrigin: "anonymous";
        };
        format: string;
        attribution: {
            name: string;
            url: string;
        };
        name: string;
        tileMatrixSet: string;
        tileMatrixSetLimits: Record<number, TileMatrixSetLimit>;
    };
}

export interface WorldDTM {
    id: string;
    noDataValue: number;
    updateStrategy: {
        type: 1;
        options: {
            groups: number[];
        };
    };
    source: {
        format: string;
        crs: string;
        url: string;
        name: string;
        tileMatrixSet: string;
        tileMatrixSetLimits: Record<number, TileMatrixSetLimit>;
    };
}
