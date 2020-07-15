// Type definitions for PhantomCSS 0.11.1
// Project: https://github.com/Huddle/PhantomCSS
// Definitions by: Amaury Bauzac <https://github.com/abauzac>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

/// <reference types="resemblejs" />
import { Casper } from 'casperjs';

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
      filename?: string;
      error?: boolean;
      fail?: boolean;
      success?: boolean;
      failFile?: string;
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
      casper?: Casper;
      /**
      libraryRoot is relative to this file and must point to your phantomcss folder (not lib or node_modules). If you are using NPM, this will be './node_modules/phantomcss'.
      */
      libraryRoot?: string;

      screenshotRoot?: string;
      /**
      By default, failure images are put in the './failures' folder.
      If failedComparisonsRoot is set to false a separate folder will
      not be created but failure images can still be found alongside
      the original and new images.
      */
      failedComparisonsRoot?: string;

      /**
      You might want to keep master/baseline images in a completely
      different folder to the diffs/failures.  Useful when working
      with version control systems. By default this resolves to the
      screenshotRoot folder.
      */
      comparisonResultRoot?: string;

      /**
      Don't add count number to images. If set to false (default), a filename is
      required when capturing screenshots.
      */
      addIteratorToImage: boolean;

      /**
      Remove results directory tree after run.  Use in conjunction
      with failedComparisonsRoot to see failed comparisons.
      */
      cleanupComparisonImages?: boolean;

      /**
       * Don't add label to generated failure image
       */
      addLabelToFailedImage?: boolean;
      /**
      * Change the output screenshot filenames for your specific
      * integration
      */
      fileNameGetter?: (rootPath: string, fileName?: string) => string;

      /**
      Mismatch tolerance defaults to  0.05%. Increasing this value
      will decrease test coverage
      */
      mismatchTolerance?: number;

      onPass?: (test: PhantomCSSTest) => void;
      onFail?: (test: PhantomCSSTest) => void;
      onTimeout?: (test: PhantomCSSTest) => void;
      onComplete?: (tests: PhantomCSSTest[], noOfFails: number, noOfErrors: number) => void;
      /**
      Called when creating new baseline images
      */
      onNewImage?: (test: PhantomCSSTest) => void;

      /**
     Prefix the screenshot number to the filename, instead of suffixing it
     */
      prefixCount?: boolean;

      hideElements?: string;
      outputSettings?: resemble.OutputSettings;
    }

  }
}
