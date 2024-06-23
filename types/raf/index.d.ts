declare const raf: {
    (callback: (timestamp: number) => void): number;
    cancel: (handle: number) => void;
    polyfill: (globalObject?: any) => void;
};

export = raf;
