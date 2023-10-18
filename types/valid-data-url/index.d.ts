export as namespace validDataUrl;

declare const validDataUrl: {
    (candidate: string): boolean;
    regex: RegExp;
};

export = validDataUrl;
