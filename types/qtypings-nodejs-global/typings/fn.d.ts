/** 任意回调参数的回调函数 */
declare interface IQFnAnyArgs{
    (... args:any[]):void;
}

/** 无回调参数的回调函数 */
declare interface IQFnEmptyArgs{
    ():void;
}

/** 任意回调参数的回调函数, 返回类型T */
declare interface IQFnAnyArgsReturnT<T>{
    (... args:any[]): T;
}

/** 是否成功回调函数 */
declare interface IQFnIsSuccess{
    (isSuccess: boolean):void;
}

/** 是否成功回调函数, 第2个参数开始任意回调参数*/
declare interface IQFnIsSuccessAnyArgs{
    (isSuccess: boolean, ...args: any[]):void;
}

/** 错误则无result，有result则无错误 */
declare interface IQFnErrorOrResult{
    (err: Error | any | void, result?: any, ...args: any[]): void;
}

/** 错误描述回调 */
declare interface IQFnErrorDesc{
    (errDesc: string): void;
}