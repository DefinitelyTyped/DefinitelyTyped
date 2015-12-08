// Type definitions for gulp-jshint
// Project: https://github.com/spalger/gulp-jshint
// Definitions by: Louis Grignon <https://github.com/lgrignon/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../node/node.d.ts"/>

declare module "gulp-jshint" {
    function GulpJSHint(options?: IGulpJSHintOptions): NodeJS.ReadWriteStream;

    interface IGulpJSHintOptions {
        /**
         * When false do not lookup .jshintrc files. See the JSHint docs for more info. 
         * Default true.
         */
        lookup?: boolean;

        /**
         * Either the name of a module to use for linting the code or a linting function itself. This enables using an alternate (but jshint compatible) linter like "jsxhint".
         * Default is "jshint"
         */
        linter?: string;
    }

    namespace GulpJSHint { 
        function reporter(kind: (string | Object)): NodeJS.ReadWriteStream;
    }
    export = GulpJSHint;
}
