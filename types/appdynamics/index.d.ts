/**
 * Starts the profiling process.
 */
export function profile(config: ProfileParameter): void;

/**
 * appdynamics monitors your Node.js applications in production.
 */
export as namespace appdynamics;

export interface ProfileParameter {
    controllerHostName?: string;
    controllerPort?: number;
    controllerSslEnabled?: boolean;
    tierName?: string;
    nodeName?: string;
}
