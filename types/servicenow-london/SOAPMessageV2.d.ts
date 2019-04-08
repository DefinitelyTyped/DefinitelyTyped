declare namespace sn_ws {
    class SOAPMessageV2 {
        constructor();
        constructor(soapMessage: string, soapFunction: string);
        execute(): SOAPResponseV2;
        executeAsync(): SOAPResponseV2;
        setHttpMethod(method: string): void;
        setHttpTimeout(timeoutMs: number): void;
        setBasicAuth(userName: string, userPass: string): void;
        setMutualAuth(profileName: string): void;
        setEccCorrelator(correlator: string): void;
        setEccParameter(name: string, value: string): void;
        setEndpoint(endpoint: string): void;
        setMIDServer(midServer: string): void;
        setRequestBody(body: string): void;
        setRequestHeader(name: string, value: string): void;
        setSOAPAction(soapAction: string): void;
        setStringParameter(name: string, value: string): void;
        setStringParameterNoEscape(name: string, value: string): void;
        setWSSecurity(
            keystoreId: string,
            keystoreAlias: string,
            keystorePassword: string,
            certificateId: string
        ): void;
        getRequestBody(): string;
        getEndpoint(): string;
        getRequestHeader(headerName: string): string;
        getRequestHeaders(): object;
    }
}
