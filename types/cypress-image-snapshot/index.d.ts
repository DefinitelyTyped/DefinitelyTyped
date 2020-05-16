// Type definitions for cypress-image-snapshot 3.1
// Project: https://github.com/palmerhq/cypress-image-snapshot
// Definitions by: Alex Kessock <https://github.com/Keysox>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface Options
    extends Partial<
        {
            blackout: string[];
            capture: 'runner' | 'viewport' | 'fullPage';
            clip: { x: number; y: number; width: number; height: number };
            disableTimersAndAnimations: boolean;
            padding: number | [number] | [number, number] | [number, number, number] | [number, number, number, number];
            scale: boolean;
            beforeScreenshot(doc: Document): void;
            afterScreenshot(doc: Document): void;
        } & {
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
