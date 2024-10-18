/// <reference types="jest" />

import { PixelmatchOptions } from "pixelmatch";
import { Options as SSIMOptions } from "ssim.js";

export interface MatchImageSnapshotOptions {
    /**
     * If set to true, the build will not fail when the screenshots to compare have different sizes.
     * @default false
     */
    allowSizeMismatch?: boolean | undefined;
    /**
     * Sets the max number of bytes for stdout/stderr when running diff-snapshot in a child process.
     * @default 10 * 1024 * 1024 (10,485,760)
     */
    maxChildProcessBufferSizeInBytes?: number | undefined;
    /**
     * Custom config passed to 'pixelmatch' or 'ssim'
     */
    customDiffConfig?: PixelmatchOptions | Partial<SSIMOptions> | undefined;
    /**
     * The method by which images are compared.
     * `pixelmatch` does a pixel by pixel comparison, whereas `ssim` does a structural similarity comparison.
     * @default 'pixelmatch'
     */
    comparisonMethod?: "pixelmatch" | "ssim" | undefined;
    /**
     * Custom snapshots directory.
     * Absolute path of a directory to keep the snapshot in.
     */
    customSnapshotsDir?: string | undefined;
    /**
     * A custom absolute path of a directory to keep this diff in
     */
    customDiffDir?: string | undefined;
    /**
     * Store the received images separately from the composed diff images on failure.
     * This can be useful when updating baseline images from CI.
     * @default false
     */
    storeReceivedOnFailure?: boolean | undefined;
    /**
     * A custom absolute path of a directory to keep this received image in.
     */
    customReceivedDir?: string | undefined;
    /**
     * A custom postfix which is added to the snapshot name of the received image
     * @default '-received'
     */
    customReceivedPostfix?: string | undefined;
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
        | string
        | undefined;
    /**
     * Changes diff image layout direction.
     * @default 'horizontal'
     */
    diffDirection?: "horizontal" | "vertical" | undefined;
    /**
     * Either only include the difference between the baseline and the received image in the diff image, or include
     * the 3 images (following the direction set by `diffDirection`).
     * @default false
     */
    onlyDiff?: boolean | undefined;
    /**
     * This needs to be set to a existing file, like `require.resolve('./runtimeHooksPath.cjs')`.
     * This file can expose a few hooks:
     * - `onBeforeWriteToDisc`: before saving any image to the disc, this function will be called (can be used to write EXIF data to images for instance)
     * - `onBeforeWriteToDisc: (arguments: { buffer: Buffer; destination: string; testPath: string; currentTestName: string }) => Buffer`
     */
    runtimeHooksPath?: string | undefined;
    /**
     * Will output base64 string of a diff image to console in case of failed tests (in addition to creating a diff image).
     * This string can be copy-pasted to a browser address string to preview the diff for a failed test.
     * @default false
     */
    dumpDiffToConsole?: boolean | undefined;
    /**
     * Will output the image to the terminal using iTerm's Inline Images Protocol.
     * If the term is not compatible, it does the same thing as `dumpDiffToConsole`.
     * @default false
     */
    dumpInlineDiffToConsole?: boolean | undefined;
    /**
     * Removes coloring from the console output, useful if storing the results to a file.
     * @default false.
     */
    noColors?: boolean | undefined;
    /**
     * Sets the threshold that would trigger a test failure based on the failureThresholdType selected. This is different
     * to the customDiffConfig.threshold above - the customDiffConfig.threshold is the per pixel failure threshold, whereas
     * this is the failure threshold for the entire comparison.
     * @default 0.
     */
    failureThreshold?: number | undefined;
    /**
     * Sets the type of threshold that would trigger a failure.
     * @default 'pixel'.
     */
    failureThresholdType?: "pixel" | "percent" | undefined;
    /**
     * Updates a snapshot even if it passed the threshold against the existing one.
     * @default false.
     */
    updatePassedSnapshot?: boolean | undefined;
    /**
     * Applies Gaussian Blur on compared images, accepts radius in pixels as value. Useful when you have noise after
     * scaling images per different resolutions on your target website, usually setting its value to 1-2 should be
     * enough to solve that problem.
     * @default 0.
     */
    blur?: number | undefined;
    /**
     * Runs the diff in process without spawning a child process.
     * @default false.
     */
    runInProcess?: boolean | undefined;
}

/**
 * Function to be passed to jest's expect.extend.
 * Example:
 *   import { toMatchImageSnapshot } from 'jest-image-snapshot';
 *   expect.extend({ toMatchImageSnapshot });
 */
export function toMatchImageSnapshot(options?: MatchImageSnapshotOptions): { message(): string; pass: boolean };

/**
 * Configurable function that can be passed to jest's expect.extend.
 * Example:
 *   import { configureToMatchImageSnapshot } from 'jest-image-snapshot';
 *   const toMatchImageSnapshot = configureToMatchImageSnapshot({ noColors: true });
 *   expect.extend({ toMatchImageSnapshot });
 */
export function configureToMatchImageSnapshot(
    options: MatchImageSnapshotOptions,
): () => { message(): string; pass: boolean };

/**
 * Mutates original state with new state
 */
export function updateSnapshotState<TObject, TPartial>(
    originalSnapshotState: TObject,
    partialSnapshotState: TPartial,
): TObject & TPartial;

declare global {
    namespace jest {
        interface Matchers<R, T> {
            toMatchImageSnapshot(options?: MatchImageSnapshotOptions): R;
        }
    }
}
