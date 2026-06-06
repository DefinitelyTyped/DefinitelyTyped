declare function locateChrome(cb?: (path: string | null) => void): Promise<string | null>;

export = locateChrome;
