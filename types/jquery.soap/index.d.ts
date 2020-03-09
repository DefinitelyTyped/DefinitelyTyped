// Type definitions for jQuery.SOAP 1.7
// Project: https://github.com/doedje/jquery.soap
// Definitions by: Roland Greim <https://github.com/tigerxy>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped/
// TypeScript Version: 2.3

/// <reference types="jquery"/>

declare namespace JQuerySOAP {
    interface SOAPEnvelope {
        attributes: Object
        bodies: Array<SOAPObject>
        headers: Array<SOAPObject>
        prefix: string
        soapConfig: any
        typeOf: string
        addAttribute(name: String, value: string): void
        addAttribute(name: String, value: number): void
        addBody(soapObject: SOAPObject): void
        addHeader(soapObject: SOAPObject): void
        addNamespace(name: String, uri: string): void
        toString(): string
        send(options: Options): void
    }
    interface SOAPResponse {
        toJSON(): any
        toString(): String
        toXML(): XMLDocument
    }

    interface SOAPObject {
        attributes: Object
        children: Array<SOAPObject>
        name: string
        ns: Object
        _parent: SOAPObject
        value: any
        typeOf: string
        addNamespace(name: String, url: string): void
        addParameter(name: String, value: string): void
        addParameter(name: String, value: number): void
        appendChild(soapObject: SOAPObject): SOAPObject
        attr(name: string, value: string): Object
        attr(name: string, value: number): Object
        end(): SOAPObject
        find(name: string): SOAPObject
        hasChildren(): boolean
        newChild(name: string): SOAPObject
        parent(): SOAPObject
        toString(): string
        val(value: string): SOAPObject
        val(value: number): SOAPObject
    }
    interface Options {
        appendMethodToURL?: boolean;
        async?: boolean;
        beforeSend?: (SOAPEnvelope: SOAPEnvelope) => void;
        context?: any;
        data?: Object;
        envAttributes?: any;
        elementName?: string;
        enableLogging?: boolean;
        error?: (SOAPResponse: SOAPResponse) => void;
        HTTPHeaders?: Object;
        method?: string;
        namespaceQualifier?: string;
        namespaceURL?: string;
        noPrefix?: boolean;
        request?: (SOAPEnvelope: SOAPEnvelope) => void;
        soap12?: boolean;
        SOAPAction?: string;
        SOAPHeader?: Object;
        statusCode?: Object;
        success?: (SOAPResponse: SOAPResponse) => void;
        timeout?: number;
        url?: string;
        wss?: Object;
    }
    interface SOAP {
        (options?: Options): JQueryXHR;
    }
}
interface JQueryStatic {
    soap: JQuerySOAP.SOAP;
}
