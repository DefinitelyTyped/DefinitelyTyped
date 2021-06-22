// Type definitions for gulp-json-validator 1.2
// Project: https://github.com/jackyjieliu/gulp-json-validator
// Definitions by: Peter Safranek <https://github.com/pe8ter>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

interface GulpJsonValidatorOptions {
    allowDuplicatedKeys?: boolean;
}

declare function gulpJsonValidator(option?: GulpJsonValidatorOptions): NodeJS.ReadWriteStream;

export = gulpJsonValidator;
