// Type definitions for protractor-console-plugin 0.1
// Project: https://github.com/angular/protractor-console-plugin
// Definitions by: Adam Kwiatek <https://github.com/akwiatek>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface Config {
    failOnWarning?: boolean;
    failOnError?: boolean;
    logWarnings?: boolean;
    exclude?: Array<string | RegExp>;
}
