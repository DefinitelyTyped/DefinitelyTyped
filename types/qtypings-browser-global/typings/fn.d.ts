/** 任意回调参数的回调函数 */
// eslint-disable-next-line @typescript-eslint/naming-convention @definitelytyped/strict-export-declare-modifiers
interface QFnAnyArgs{
    // eslint-disable-next-line @definitelytyped/no-any-union
    (... args:any[]):void;
}

/** 无回调参数的回调函数 */
// eslint-disable-next-line @typescript-eslint/naming-convention @definitelytyped/strict-export-declare-modifiers
interface QFnEmptyArgs{
    ():void;
}

/** 任意回调参数的回调函数, 返回类型T */
// eslint-disable-next-line @typescript-eslint/naming-convention @definitelytyped/strict-export-declare-modifiers
interface QFnAnyArgsReturnT<T>{
    // eslint-disable-next-line @definitelytyped/no-any-union
    (... args:any[]): T;
}

/** 是否成功回调函数 */
// eslint-disable-next-line @typescript-eslint/naming-convention @definitelytyped/strict-export-declare-modifiers
interface QFnIsSuccess{
    (isSuccess: boolean):void;
}

/** 是否成功回调函数, 第2个参数开始任意回调参数*/
// eslint-disable-next-line @typescript-eslint/naming-convention @definitelytyped/strict-export-declare-modifiers
interface QFnIsSuccessAnyArgs{
    // eslint-disable-next-line @definitelytyped/no-any-union
    (isSuccess: boolean, ...args: any[]):void;
}

/** 错误则无result，有result则无错误 */
// eslint-disable-next-line @typescript-eslint/naming-convention @definitelytyped/strict-export-declare-modifiers
interface QFnErrorOrResult{
    // eslint-disable-next-line @definitelytyped/no-any-union
    (err: Error | any | void, result?: any, ...args: any[]): void;
}

/** 错误描述回调 */
// eslint-disable-next-line @typescript-eslint/naming-convention @definitelytyped/strict-export-declare-modifiers
interface QFnErrorDesc{
    (errDesc: string): void;
}