declare var describe : {
    (description: string, spec: () => void): void;
    only(description: string, spec: () => void): void;
    skip(description: string, spec: () => void): void;
    timeout(ms: number);
}

declare var it: {
    (expectation: string, assertion?: () => void): void;
    (expectation: string, assertion?: (done: () => void) => void): void;
    only(expectation: string, assertion?: () => void): void;
    only(expectation: string, assertion?: (done: () => void) => void): void;
    skip(expectation: string, assertion?: () => void): void;
    skip(expectation: string, assertion?: (done: () => void) => void): void;
    timeout(ms: number);
};

declare function before(action: () => void): void;

declare function before(action: (done: () => void) => void): void;

declare function aftet(action: () => void): void;

declare function after(action: (done: () => void) => void): void;

declare function beforeEach(action: () => void): void;

declare function beforeEach(action: (done: () => void) => void): void;

declare function afterEach(action: () => void): void;

declare function afterEach(action: (done: () => void) => void): void;

