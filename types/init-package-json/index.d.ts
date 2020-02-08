// Type definitions for init-package-json 1.10
// Project: https://github.com/npm/init-package-json#readme
// Definitions by: Kyle Farnung <https://github.com/kfarnung>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace init_package_json {
    interface Config {
        [key: string]: any;
        get(k: string): any;
    }

    function yes(conf: Config): boolean;
}

declare function init_package_json(
    dir: string,
    input: string,
    config: init_package_json.Config | {},
    cb: (err: any, data: any) => void): void;

declare function init_package_json(
    dir: string,
    input: string,
    cb: (err: any, data: any) => void): void;

export = init_package_json;
