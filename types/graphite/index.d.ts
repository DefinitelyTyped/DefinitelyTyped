// Type definitions for graphite 0.1
// Project: https://github.com/felixge/node-graphite
// Definitions by: Christian Muñoz <https://github.com/ctumolosus>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

type Callback = (err: any) => void;

interface GraphiteClientProperties {
    carbon: any;
}

declare class GraphiteClient {
    constructor(properties: GraphiteClientProperties);
    static createClient(dsn: string): GraphiteClient;
    static flatten(object: any, flat?: any, prefix?: string): any;
    static appendTags(flatMetrics: any, tags: any): any;
    write(metrics: any, callback?: Callback): void;
    write(metrics: any, timestamp?: number, callback?: Callback): void;
    writeTagged(metrics: any, tags: any, callback?: Callback): void;
    writeTagged(metrics: any, tags: any, timestamp?: number, callback?: Callback): void;
    end(): void;
}

export = GraphiteClient;
