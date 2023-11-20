/// <reference types="jquery"/>

declare namespace JQuerySOAP {
    interface SOAPEnvelope {
        attributes: Object;
        bodies: Array<SOAPObject>;
        headers: Array<SOAPObject>;
        prefix: string;
        soapConfig: any;
        typeOf: string;
        addAttribute(name: String, value: string): void;
        addAttribute(name: String, value: number): void;
        addBody(soapObject: SOAPObject): void;
        addHeader(soapObject: SOAPObject): void;
        addNamespace(name: String, uri: string): void;
        toString(): string;
        send(options: Options): void;
    }
    interface SOAPResponse {
        toJSON(): any;
        toString(): String;
        toXML(): XMLDocument;
    }

    interface SOAPObject {
        attributes: Object;
        children: Array<SOAPObject>;
        name: string;
        ns: Object;
        _parent: SOAPObject;
        value: any;
        typeOf: string;
        addNamespace(name: String, url: string): void;
        addParameter(name: String, value: string): void;
        addParameter(name: String, value: number): void;
        appendChild(soapObject: SOAPObject): SOAPObject;
        attr(name: string, value: string): Object;
        attr(name: string, value: number): Object;
        end(): SOAPObject;
        find(name: string): SOAPObject;
        hasChildren(): boolean;
        newChild(name: string): SOAPObject;
        parent(): SOAPObject;
        toString(): string;
        val(value: string): SOAPObject;
        val(value: number): SOAPObject;
    }
    interface Options {
        appendMethodToURL?: boolean | undefined;
        async?: boolean | undefined;
        beforeSend?: ((SOAPEnvelope: SOAPEnvelope) => void) | undefined;
        context?: any;
        data?: Object | undefined;
        envAttributes?: any;
        elementName?: string | undefined;
        enableLogging?: boolean | undefined;
        error?: ((SOAPResponse: SOAPResponse) => void) | undefined;
        HTTPHeaders?: Object | undefined;
        method?: string | undefined;
        namespaceQualifier?: string | undefined;
        namespaceURL?: string | undefined;
        noPrefix?: boolean | undefined;
        request?: ((SOAPEnvelope: SOAPEnvelope) => void) | undefined;
        soap12?: boolean | undefined;
        SOAPAction?: string | undefined;
        SOAPHeader?: Object | undefined;
        statusCode?: Object | undefined;
        success?: ((SOAPResponse: SOAPResponse) => void) | undefined;
        timeout?: number | undefined;
        url?: string | undefined;
        wss?: Object | undefined;
    }
    interface SOAP {
        (options?: Options): JQueryXHR;
    }
}
interface JQueryStatic {
    soap: JQuerySOAP.SOAP;
}
