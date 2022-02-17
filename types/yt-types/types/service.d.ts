/*
Interface request generic method definition
*/

interface HttpReqest<P, R> {
    (params: P): Promise<HttpResponseProps<R>>;
}

interface HttpResponseProps<R> {
    result: boolean;
    msg?: string;
    kind?: string;
    data: R;
}
