// Type definitions for package-info 3.0
// Project: https://github.com/AlessandroMinoccheri/package-info#readme
// Definitions by: Florian Keller <https://github.com/ffflorian>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace info {
    interface Package {
        author: string;
        description: string;
        homepage: string;
        license: string;
        name: string;
        version: string;
    }
}

declare function info(name: string): Promise<info.Package>;

export = info;
