declare function _exports(options: {
    springCoeff?: number | undefined;
    springLength?: number | undefined;
}): {
    /**
     * Upsates forces acting on a spring
     */
    update: (spring: any) => void;
};
export = _exports;
