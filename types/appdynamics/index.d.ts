// Type definitions for appdynamics 21.8
// Project: https://www.appdynamics.com/supported-technologies/nodejs
// Definitions by: Justin Vos <https://github.com/justinvos>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

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
