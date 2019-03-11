declare class BrowserslistError extends Error {
    constructor(message: any);
    browserslist: boolean;
}

export = BrowserslistError;
