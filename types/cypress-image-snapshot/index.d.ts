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
            /**
             * If set to true, the build will not fail when the screenshots to compare have different sizes.
             * @default false
             */
            allowSizeMismatch?: boolean;
            /**
             * The method by which images are compared.
             * `pixelmatch` does a pixel by pixel comparison, whereas `ssim` does a structural similarity comparison.
             * @default 'pixelmatch'
             */
            comparisonMethod?: 'pixelmatch' | 'ssim';
            /**
             * Custom config passed to 'pixelmatch' or 'ssim'
             */
            customDiffConfig?: {
                readonly threshold?: number;
                readonly includeAA?: boolean;
            };
            /**
             * Custom snapshots directory.
             * Absolute path of a directory to keep the snapshot in.
             */
            customSnapshotsDir?: string;
            /**
             * A custom absolute path of a directory to keep this diff in
             */
            customDiffDir?: string;
            /**
             * A custom name to give this snapshot. If not provided, one is computed automatically. When a function is provided
             * it is called with an object containing testPath, currentTestName, counter and defaultIdentifier as its first
             * argument. The function must return an identifier to use for the snapshot.
             */
            customSnapshotIdentifier?:
                | ((parameters: {
                      testPath: string;
                      currentTestName: string;
                      counter: number;
                      defaultIdentifier: string;
                  }) => string)
                | string;
            /**
             * Changes diff image layout direction.
             * @default 'horizontal'
             */
            diffDirection?: 'horizontal' | 'vertical';
            /**
             * Will output base64 string of a diff image to console in case of failed tests (in addition to creating a diff image).
             * This string can be copy-pasted to a browser address string to preview the diff for a failed test.
             * @default false
             */
            dumpDiffToConsole?: boolean;
            /**
             * Removes coloring from the console output, useful if storing the results to a file.
             * @default false.
             */
            noColors?: boolean;
            /**
             * Sets the threshold that would trigger a test failure based on the failureThresholdType selected. This is different
             * to the customDiffConfig.threshold above - the customDiffConfig.threshold is the per pixel failure threshold, whereas
             * this is the failure threshold for the entire comparison.
             * @default 0.
             */
            failureThreshold?: number;
            /**
             * Sets the type of threshold that would trigger a failure.
             * @default 'pixel'.
             */
            failureThresholdType?: 'pixel' | 'percent';
            /**
             * Updates a snapshot even if it passed the threshold against the existing one.
             * @default false.
             */
            updatePassedSnapshot?: boolean;
            /**
             * Applies Gaussian Blur on compared images, accepts radius in pixels as value. Useful when you have noise after
             * scaling images per different resolutions on your target website, usually setting its value to 1-2 should be
             * enough to solve that problem.
             * @default 0.
             */
            blur?: number;
            /**
             * Runs the diff in process without spawning a child process.
             * @default false.
             */
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
