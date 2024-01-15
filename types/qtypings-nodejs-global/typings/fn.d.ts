// /** 任意回调参数的回调函数 */
// interface QFnAnyArgs{
//     (... args:any[]):void;
// }

// /** 无回调参数的回调函数 */
// interface QFnEmptyArgs{
//     ():void;
// }

// /** 任意回调参数的回调函数, 返回类型T */
// interface QFnAnyArgsReturnT<T>{
//     (... args:any[]): T;
// }

// /** 是否成功回调函数 */
// interface QFnIsSuccess{
//     (isSuccess: boolean):void;
// }

// /** 是否成功回调函数, 第2个参数开始任意回调参数*/
// interface QFnIsSuccessAnyArgs{
//     (isSuccess: boolean, ...args: any[]):void;
// }

// /** 错误则无result，有result则无错误 */
// interface QFnErrorOrResult{
//     (err: Error | string | undefined, result?: any, ...args: any[]): void;
// }

// /** 错误描述回调 */
// interface QFnErrorDesc{
//     (errDesc: string): void;
// }