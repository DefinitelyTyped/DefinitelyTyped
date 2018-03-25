// Type definitions for Istanbul v0.4.0
// Project: https://github.com/gotwarlost/istanbul
// Definitions by: Tanguy Krotoff <https://github.com/tkrotoff>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped


declare namespace istanbul {
    interface Istanbul {
        new (options?: any): Istanbul;
        Collector: Collector;
        config: Config;
        ContentWriter: ContentWriter;
        FileWriter: FileWriter;
        hook: Hook;
        Instrumenter: Instrumenter;
        Report: Report;
        Reporter: Reporter;
        Store: Store;
        utils: ObjectUtils;
        VERSION: string;
        Writer: Writer;
    }

    interface Collector {
        new (options?: any): Collector;
        add(coverage: any, testName?: string): void;
        getFinalCoverage(): any;
    }

    interface Config {
    }

    interface ContentWriter {
    }

    interface FileWriter {
    }

    interface Hook {
    }

    interface Instrumenter {
        new (options?: any): Instrumenter;
        instrumentSync(code: string, filename: string): string;
    }

    interface Report {
    }

    interface Configuration {
        new (obj: any, overrides: any): Configuration;
    }

    interface Reporter {
        new (cfg?: Configuration, dir?: string): Reporter;
        add(fmt: string): void;
        addAll(fmts: Array<string>): void;
        write(collector: Collector, sync: boolean, callback: Function): void;
    }

    interface Store {
    }

    interface ObjectUtils {
    }

    interface Writer {
    }
}

declare var istanbul: istanbul.Istanbul;

export = istanbul;
