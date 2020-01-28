// Type definitions for cypress-image-snapshot 3.1
// Project: https://github.com/palmerhq/cypress-image-snapshot
// Definitions by: Alex Kessock <https://github.com/Keysox>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="Cypress" />

export interface Options
    extends Partial<
        Cypress.ScreenshotOptions & {
            customDiffConfig?: {
                readonly threshold?: number;
                readonly includeAA?: boolean;
            };
            customSnapshotsDir?: string;
            customDiffDir?: string;
            customSnapshotIdentifier?:
                | ((parameters: {
                      testPath: string;
                      currentTestName: string;
                      counter: number;
                      defaultIdentifier: string;
                  }) => string)
                | string;
            diffDirection?: 'horizontal' | 'vertical';
            noColors?: boolean;
            failureThreshold?: number;
            failureThresholdType?: 'pixel' | 'percent';
            updatePassedSnapshot?: boolean;
            blur?: number;
            runInProcess?: boolean;
        }
    > {}

declare global {
    namespace Cypress {
        interface Chainable {
            matchImageSnapshot(nameOrOptions?: string | Options): void;
            matchImageSnapshot(name: string, options: Options): void;
        }
    }
}
