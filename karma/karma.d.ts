// Type definitions for karma v0.12.37
// Project: https://github.com/karma-runner/karma
// Definitions by: Tanguy Krotoff <https://github.com/tkrotoff>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module 'karma' {
    // See Karma public API https://karma-runner.github.io/0.12/dev/public-api.html

    interface IKarmaServer {
        start(options?: any, callback?: (exitCode: number) => void): void;
    }

    interface IKarmaRunner {
        run(options?: any, callback?: (exitCode: number) => void): void;
    }

    interface IKarma {
        server: IKarmaServer;
        runner: IKarmaRunner;
    }

    var karma: IKarma;
    export = karma;
}
