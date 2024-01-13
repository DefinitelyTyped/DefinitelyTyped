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
    cookies?: any[] | undefined;
    viewportSize?: number | undefined;
    timeout?: number | undefined;
    file?: string | undefined;
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
