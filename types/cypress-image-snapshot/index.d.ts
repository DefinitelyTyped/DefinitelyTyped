// Type definitions for cypress-image-snapshot 3.1
// Project: https://github.com/palmerhq/cypress-image-snapshot
// Definitions by: Alex Kessock <https://github.com/Keysox>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface Options {
    customSnapshotsDir?: string;
    customDiffDir?: string;
    failureThreshold?: number;
    failureThresholdType?: 'percent' | 'number';
    customDiffConfig?: {
        threshold: number;
    };
    capture?: 'viewport';
}

declare global {
    namespace Cypress {
        interface Chainable {
            matchImageSnapshot(nameOrOptions?: string | Options): void;
            matchImageSnapshot(name: string, options: Options): void;
        }
    }
}
