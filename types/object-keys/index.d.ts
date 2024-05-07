declare function objectKeys(object: object): string[];

declare namespace objectKeys {
    function shim(): typeof objectKeys;
}

export = objectKeys;
