declare function _exports(bodies: any, settings: any): {
    box: {
        x1: number;
        y1: number;
        x2: number;
        y2: number;
    };
    update: () => void;
    reset: () => void;
    getBestNewPosition: (neighbors: any) => {
        x: number;
        y: number;
    };
};
export = _exports;
