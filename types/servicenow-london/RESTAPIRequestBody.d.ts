declare namespace sn_ws {
    interface RESTAPIRequestBody {
        readonly data: any;
        readonly dataStream: object;
        readonly dataString: string;
        hasNext(): boolean;
        nextEntry(): any;
    }
}
