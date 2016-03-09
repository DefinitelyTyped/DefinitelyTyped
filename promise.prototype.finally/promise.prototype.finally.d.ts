declare module 'es6-promise/dist/es6-promise' {
    export interface Promise <R> {
      finally?<U>(onFinally?: () => U | Promise<U>): Promise<U>;
    }
}
