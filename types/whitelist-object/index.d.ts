export = whitelistObject;

declare function whitelistObject(
    object: { [key: string]: any },
    keys: ReadonlyArray<string>,
    shallow?: boolean,
): { [key: string]: any };
