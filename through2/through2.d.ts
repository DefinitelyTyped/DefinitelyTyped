interface IThroughTransform<T> {
    (chunk: T, encoding: string, callback: () => void): any;
}

interface IThrough2 {
    <T>(transform: IThroughTransform<T>): any;
    obj<T>(transform: IThroughTransform<T>): any;
}

declare var __IThrough2: IThrough2;
declare module "through2" {
    export = __IThrough2;
}