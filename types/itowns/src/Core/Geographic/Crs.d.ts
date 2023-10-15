declare enum UNIT {
    DEGREE = 1,
    METER = 2,
}

declare const _default: {
    UNIT: typeof UNIT;

    isValid(crs: string): void;

    isGeographic(crs: string): boolean;

    isMetricUnit(crs: string): boolean;

    toUnit(crs: string): UNIT | undefined;

    is4326(crs: string): boolean;

    isGeocentric(crs: string): boolean;

    reasonnableEpsilon(crs: string): number;

    formatToEPSG(crs: string): string;

    formatToTms(crs: string): string;

    isTms(crs: string): boolean;

    isEpsg(crs: string): boolean;

    tms_3857: string;

    tms_4326: string;

    defs(code: string, proj4def: string): void;
};

export default _default;
