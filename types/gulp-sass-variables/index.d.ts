/// <reference types="node"/>

declare function gulpSassVariables(variables?: GulpSassVariables.VariableDefinitions): NodeJS.ReadWriteStream;

declare namespace GulpSassVariables {
    interface VariableDefinitions {
        [variableName: string]: any;
    }
}

export = gulpSassVariables;
