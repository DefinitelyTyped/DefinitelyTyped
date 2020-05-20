interface SpecReporter extends Detox.CircusTestEventListenerBase {
    // These are not publicly used, but are defined in order to overlap with the jasmine.CustomReporter interface (which is a weak interface)
    suiteStarted: () => void;
    suiteDone: () => void;
    specDone: () => void;
    specStarted: () => void;
}

declare const specReporter: SpecReporter;

export = specReporter;
