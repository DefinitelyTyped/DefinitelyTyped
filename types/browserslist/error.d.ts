declare class BrowserslistError extends Error {
    constructor(message: any);
    browserslist: true;
}

export = BrowserslistError;
