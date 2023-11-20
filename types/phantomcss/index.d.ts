/// <reference types="resemblejs" />
import { Casper } from "casperjs";

declare global {
    namespace PhantomCSS {
        interface PhantomCSS {
            init(options: PhantomCSSOptions): void;
            update(options: PhantomCSSOptions): void;

            /**
             * Take a screenshot of the targeted HTML element
             * FileName is required if addIteratorToImage option is set to false
             */
            screenshot(target: string, fileName?: string): void;

            /**
             * Take a screenshot of the targeted HTML element
             * FileName is required if addIteratorToImage option is set to false
             */
            screenshot(target: ClipRect, fileName?: string): void;
            /**
             * Take a screenshot of the targeted HTML element
             * FileName is required if addIteratorToImage option is set to false
             */
            screenshot(target: string, timeToWait: number, hideSelector: string, fileName?: string): void;

            compareAll(exclude: string): void;
            compareAll(exclude: string, diffList: string[], include: string): void;
            compareMatched(match: string, exclude: string): void;
            compareMatched(match: RegExp, exclude: RegExp): void;
            /**
             * Explicitly define what files you want to compare
             */
            compareExplicit(list: string[]): void;
            /**
             * Compare image diffs generated in this test run only
             */
            compareSession(list?: any[]): void;
            compareFiles(baseFile: string, diffFiles: string): PhantomCSSTest;
            waitForTests(tests: PhantomCSSTest[]): void;
            done(): void;
            /**
             * Turn off CSS transitions and jQuery animations
             */
            turnOffAnimations(): void;
            getExitStatus(): number;
            /**
             * Get a list of image diffs generated in this test run
             */
            getCreatedDiffFiles(): Array<string>;
        }

        interface PhantomCSSTest {
            filename?: string | undefined;
            error?: boolean | undefined;
            fail?: boolean | undefined;
            success?: boolean | undefined;
            failFile?: string | undefined;
            mismatch?: any;
        }

        interface PhantomCSSOptions {
            /**
          Rebase is useful when you want to create new baseline
          images without manually deleting the files
          casperjs demo/test.js --rebase
      */
            rebase?: any;
            /**
        A reference to a particular Casper instance. Required for SlimerJS.
       */
            casper?: Casper | undefined;
            /**
      libraryRoot is relative to this file and must point to your phantomcss folder (not lib or node_modules). If you are using NPM, this will be './node_modules/phantomcss'.
      */
            libraryRoot?: string | undefined;

            screenshotRoot?: string | undefined;
            /**
      By default, failure images are put in the './failures' folder.
      If failedComparisonsRoot is set to false a separate folder will
      not be created but failure images can still be found alongside
      the original and new images.
      */
            failedComparisonsRoot?: string | undefined;

            /**
      You might want to keep master/baseline images in a completely
      different folder to the diffs/failures.  Useful when working
      with version control systems. By default this resolves to the
      screenshotRoot folder.
      */
            comparisonResultRoot?: string | undefined;

            /**
      Don't add count number to images. If set to false (default), a filename is
      required when capturing screenshots.
      */
            addIteratorToImage: boolean;

            /**
      Remove results directory tree after run.  Use in conjunction
      with failedComparisonsRoot to see failed comparisons.
      */
            cleanupComparisonImages?: boolean | undefined;

            /**
             * Don't add label to generated failure image
             */
            addLabelToFailedImage?: boolean | undefined;
            /**
             * Change the output screenshot filenames for your specific
             * integration
             */
            fileNameGetter?: ((rootPath: string, fileName?: string) => string) | undefined;

            /**
      Mismatch tolerance defaults to  0.05%. Increasing this value
      will decrease test coverage
      */
            mismatchTolerance?: number | undefined;

            onPass?: ((test: PhantomCSSTest) => void) | undefined;
            onFail?: ((test: PhantomCSSTest) => void) | undefined;
            onTimeout?: ((test: PhantomCSSTest) => void) | undefined;
            onComplete?: ((tests: PhantomCSSTest[], noOfFails: number, noOfErrors: number) => void) | undefined;
            /**
      Called when creating new baseline images
      */
            onNewImage?: ((test: PhantomCSSTest) => void) | undefined;

            /**
     Prefix the screenshot number to the filename, instead of suffixing it
     */
            prefixCount?: boolean | undefined;

            hideElements?: string | undefined;
            outputSettings?: resemble.OutputSettings | undefined;
        }
    }
}
