/// <reference path="./index.d.ts" />

declare namespace Tools {
    type ValueOfRecord<R> = R extends Record<any, infer T> ? T : never;
}
