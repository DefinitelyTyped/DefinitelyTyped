declare namespace sn_ws {
    interface RESTAPIResponse {
        getStreamWriter(): RESTAPIResponseStream;
        setBody(body: any): void;
        setHeaders(headers: any): void;
        setLocation(location: string): void;
        setStatus(status: number): void;
        setHeader(header: string, value: string): void;
        setContentType(contentType: string): void;
        setError(error: any): void;
    }
}
