export = whitelistObject;

declare function whitelistObject(
    object: { [key: string]: any },
    keys: readonly string[],
    shallow?: boolean,
): { [key: string]: any };
