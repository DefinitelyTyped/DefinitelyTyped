// Type definitions for gulp-sass-variables 1.2
// Project: https://github.com/osaton/gulp-sass-variables
// Definitions by: DefinitelyTyped <https://github.com/DefinitelyTyped>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.7

/// <reference types="node"/>

declare function gulpSassVariables(variables?: GulpSassVariables.VariableDefinitions): NodeJS.ReadWriteStream;

declare namespace GulpSassVariables {
    interface VariableDefinitions {
        [variableName: string]: any;
    }
}

export = gulpSassVariables;
