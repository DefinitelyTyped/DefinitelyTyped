declare namespace sn_ws {
    interface SOAPResponseV2 {
        getAllHeaders(): [{ name: string; value: string }];
        getBody(): string;
        getCookies(): { size: () => number; get: (index: number) => string };
        getErrorCode(): number;
        getErrorMessage(): string;
        getHeader(name: string): string;
        getHeaders(): object;
        getStatusCode(): number;
        haveError(): boolean;
        waitForResponse(timeoutSecs: number): void;
    }
}
