// Type definitions for non-npm package dom-view-transitions-browser 1.0
// Project: https://drafts.csswg.org/css-view-transitions-1/
// Definitions by: Jake Archibald <https://github.com/jakearchibald>
//                 Thomas Wilkinson <https://github.com/tbondwilkinson>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface Document {
    startViewTransition(updateCallback: () => Promise<void> | void): ViewTransition;
}

interface ViewTransition {
    finished: Promise<void>;
    ready: Promise<void>;
    updateCallbackDone: Promise<void>;
    skipTransition(): void;
}

interface CSSStyleDeclaration {
  viewTransitionName: string;
}
