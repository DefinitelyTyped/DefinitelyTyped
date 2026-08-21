interface Document {
    startViewTransition(updateCallback: () => Promise<void> | void): ViewTransition;
}

interface ViewTransition {
    readonly ready: Promise<void>;
    readonly finished: Promise<void>;
    readonly updateCallbackDone: Promise<void>;
    skipTransition(): void;
}

interface CSSStyleDeclaration {
    viewTransitionName: string;
}
