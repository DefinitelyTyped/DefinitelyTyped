export interface Dictionary<T> {
    [key: string]: T;
}

export enum HttpMethod {
    Get = "get",
    Post = "post",
    Put = "put",
    Delete= "delete",
}
