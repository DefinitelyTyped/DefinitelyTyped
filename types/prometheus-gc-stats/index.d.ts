declare namespace prometheusGcStats {
    interface Config {
        prefix?: string | undefined;
    }
}

// register is typeof require('prom-client').Registry which has its own .d.ts
declare function gcStats(register: any, config?: prometheusGcStats.Config): () => void;

export = gcStats;
