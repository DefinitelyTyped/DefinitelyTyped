// Type definitions for webpack-config-utils 2.3
// Project: https://github.com/kentcdodds/webpack-config-utils#readme
// Definitions by: Martin Hochel <https://github.com/hotell>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

/*~ You can declare properties of the module using const, let, or var */
// declare const getIfUtils: WebpackConfigUtils.GetIfUtils;
// declare const removeEmpty: WebpackConfigUtils.RemoveEmpty;
// declare const propIf: WebpackConfigUtils.PropIf;
// declare const propIfNot: WebpackConfigUtils.PropIfNot;

declare const api: WebpackConfigUtils.API;
export = api;

declare namespace WebpackConfigUtils {
    type Falsy = false | '' | undefined | null | 0;
    type DefinedObjKeys<T> = ({ [P in keyof T]: T[P] extends undefined ? never : P })[keyof T];
    type NonEmptyObject<T, P extends DefinedObjKeys<T> = DefinedObjKeys<T>> = { [PP in P]: T[PP] };

    type EnvVars = 'production' | 'prod' | 'test' | 'development' | 'dev';
    interface RemoveEmpty {
        <T>(input: Array<T | undefined>): T[];
        <T>(input: { [P in keyof T]: T[P] }): NonEmptyObject<T>;
    }
    type GetIfUtils = <E extends EnvVars | string>(
        env: { [P in E]: boolean | string } | E,
        vars?: Array<EnvVars | string>
    ) => IfUtils;
    // @TODO
    // with following defintion, generics will get flattened to base type -> string. Any ideas why or how to fix this?
    // $ExpectType "value" | "alternate"
    // propIf(true, 'value', 'alternate'); // 'value'
    //
    // type PropIf = <A, I, E>(add: A, value: I, alternate: E) => A extends Falsy ? E : I;
    // type PropIfNot = <A, I, E>(add: A, value: I, alternate: E) => A extends Falsy ? I : E;
    type PropIf = <I, E>(add: any, value: I, alternate: E) => I | E;
    type PropIfNot = PropIf;

    interface IfUtilsFn {
        <Y, N>(value: Y, alternate?: N): Y | N;
        (): boolean;
    }
    interface IfUtils {
        ifDevelopment: IfUtilsFn;
        ifNotDevelopment: IfUtilsFn;
        ifDev: IfUtilsFn;
        ifNotDev: IfUtilsFn;
        ifProduction: IfUtilsFn;
        ifNotProduction: IfUtilsFn;
        ifProd: IfUtilsFn;
        ifNotProd: IfUtilsFn;
        ifTest: IfUtilsFn;
        ifNotTest: IfUtilsFn;
        [key: string]: IfUtilsFn;
    }

    interface API {
        getIfUtils: GetIfUtils;
        removeEmpty: RemoveEmpty;
        propIf: PropIf;
        propIfNot: PropIfNot;
    }
}
