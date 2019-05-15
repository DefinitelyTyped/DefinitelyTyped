// Type definitions for prometheus-gc-stats 0.6
// Project: https://github.com/SimenB/node-prometheus-gc-stats
// Definitions by: Daniel Byrne <https://github.com/danwbyrne>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// register is typeof require('prom-client').Registry which has its own .d.ts
declare function gcStats(register: any): () => void;

export = gcStats;
