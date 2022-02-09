// Type definitions for @cyberblast/config 0.0
// Project: https://github.com/cyberblast/config
// Definitions by: cyberblast <https://github.com/cyberblast>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export class Config {
    constructor(filePath: string);
    load(): Promise<{ [key: string]: any; }>;
    settings: { [key: string]: any; };
}
