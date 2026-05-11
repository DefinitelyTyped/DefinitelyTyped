/// <reference types="node" />

interface GulpJsonValidatorOptions {
    allowDuplicatedKeys?: boolean | undefined;
}

declare function gulpJsonValidator(option?: GulpJsonValidatorOptions): NodeJS.ReadWriteStream;

export = gulpJsonValidator;
