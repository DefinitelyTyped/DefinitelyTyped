declare namespace sn_ws {
    interface RESTAPIResponseStream {
        writeStream(stream: object): void;
        writeString(data: string): void;
    }
}
