// Type definitions for settings 0.1
// Project: https://github.com/mgutz/node-settings
// Definitions by: Shrey Jain <https://github.com/shreyjain1994>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

// This wierd looking class definition is necessary since the function that the module
// exposes NEEDS (will throw error otherwise) to be called with the `new` keyword
// BUT returns a random object...not an instance of the class
declare class Settings {
    constructor(pathOrModule: Settings.PathOrModule, options?: Settings.Options);

    [setting: string]: any;
}

declare namespace Settings {
    interface Options {
        env?: string;
        root?: string;
        defaults?: any;
    }

    type PathOrModule = string |
        {
            forceEnv?: string,
            common: any, // error is thrown if 'common' object is not provided
            [envName: string]: any
        };
}
export = Settings;
