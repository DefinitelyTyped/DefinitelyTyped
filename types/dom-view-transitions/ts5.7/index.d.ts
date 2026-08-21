interface Document {
    startViewTransition(updateCallback: () => Promise<void> | void): ViewTransition;
}

interface ViewTransition {
    readonly ready: Promise<undefined>;
    readonly finished: Promise<undefined>;
    readonly updateCallbackDone: Promise<undefined>;
    skipTransition(): void;
}

interface CSSStyleDeclaration {
    viewTransitionName: string;
}
