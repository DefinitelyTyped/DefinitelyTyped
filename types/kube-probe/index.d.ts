import { Express } from "express";
import { ProtectionConfig } from "overload-protection";

interface Options {
    readinessUrl?: string | undefined;
    livenessUrl?: string | undefined;
    readinessCallback?: (() => void) | undefined;
    livenessCallback?: (() => void) | undefined;
    bypassProtection?: boolean | undefined;
    protectionConfig?: ProtectionConfig | undefined;
}
declare function probe(app: Express, options?: Options): void;

export = probe;
