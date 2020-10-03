// Type definitions for kube-probe 1.0
// Project: https://github.com/nodeshift/kube-probe
// Definitions by: Ash McBride <https://github.com/emacsified>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
import { Express } from 'express';

interface Options {
    readinessUrl?: string;
    livenessUrl?: string;
    readinessCallback: () => void;
    livenessCallback: () => void;
    bypassProtection: boolean;
    protectionConfig: Record<string, unknown>;
}
declare function probe(app: Express, options?: Options): void;

export = probe;
