import { IQueryable } from "./queryable";
import { IRequestContext } from "./pipeline";
export declare type IHybrid<R = any, T = any> = T & {
    (this: T, ...args: any[]): Promise<R>;
};
export declare type IInvoker<R> = (this: IQueryable<any>, ...args: any[]) => Promise<R>;
export declare const invokableFactory: <R>(constructor: new (...args: any[]) => any) => (...args: any[]) => R;
export interface IInvokable<R = any> {
    <T = R>(options?: Partial<IRequestContext<T>>): Promise<T>;
}
//# sourceMappingURL=invokable-binder.d.ts.map