// Type definitions for mocha-phantomjs v3.5.0
// Project: http://metaskills.net/mocha-phantomjs/
// Definitions by: Erik Schierboom <https://github.com/ErikSchierboom>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface MochaPhantomJsWindowOptions extends Window {
    env: any;
    failures: number;
    ended: boolean;
    started: boolean;
    run(): void;
}

interface Window {
    mochaPhantomJS(): MochaPhantomJsWindowOptions;
}

interface MochaPhantomJSOptions {
    headers?: any;
    cookies?: any[];
    viewportSize?: number;
    timeout?: number;
    file?: string;
}

interface MochaPhantomJS {
    url: string;
    columns: number;
    mochaStartWait: number;
    startTime: Date;
    output: any;
    
    run(): void;
    customizeMocha(options: MochaPhantomJSOptions): void;    
}

declare var mochaPhantomJS: MochaPhantomJS;
