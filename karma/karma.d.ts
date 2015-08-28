// Type definitions for karma v0.12.37
// Project: https://github.com/karma-runner/karma
// Definitions by: Tanguy Krotoff <https://github.com/tkrotoff>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module 'karma' {
    // See Karma public API https://karma-runner.github.io/0.12/dev/public-api.html

    namespace karma {
        interface Karma {
            /**
             * `start` method is deprecated since 0.13. It will be removed in 0.14.
             * Please use
             * <code>
             *     server = new Server(config, [done])
             *     server.start()
             * </code>
             * instead.
             */
            server: DeprecatedServer;
            runner: Runner;
        }

        interface DeprecatedServer {
            start(options?: any, callback?: (exitCode: number) => void): void;
        }

        interface Runner {
            run(options?: any, callback?: (exitCode: number) => void): void;
        }
    }

    var karma: karma.Karma;

    export = karma;
}
