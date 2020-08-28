// Type definitions for probe-image-size 5.0
// Project: https://github.com/nodeca/probe-image-size#readme
// Definitions by: Jinesh Shah <https://github.com/jineshshah36>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare function probe(source: string, opts?: probe.ProbeOptions): Promise<probe.ProbeResult>;

declare namespace probe {
    interface ProbeResult {
        width: number;
        height: number;
        length: number;
        type: string;
        mime: string;
        wUnits: string;
        hUnits: string;
        url: string;
    }

    interface ProbeOptions {
        retries?: number;
        timeout?: number;
    }
}

export = probe;
