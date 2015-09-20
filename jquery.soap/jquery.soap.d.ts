/// <reference path="jquery/jquery.d.ts"/>


declare module JQuerySOAP {
    interface SOAPEnvelope {
        attributes: any
        bodies: any
        headers: any
        prefix: string
        soapConfig: any
        typeOf: string
        addAttribute(name, value): void
        addBody(soapObject: SOAPObject): void
        addHeader(soapObject: SOAPObject): void
        addNamespace(name, uri): void
        toString(): string
        send(options): void
    }
    interface SOAPResponse {
        toJSON(): any
        toString(): String
        toXML(): XMLDocument
    }
    
    interface SOAPObject {
        attributes: any
        children: any
        name: string
        ns: any
        _parent: any
        value: any
        typeOf: string
        addNamespace(name, url): void
        addParameter(name, value)
        appendChild(soapObject: SOAPObject)
        attr(name, value)
        end()
        find(name)
        hasChildren()
        newChild(name)
        parent()
        toString(): string
        val(value)
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
            HTTPHeaders?: any;
            method?: string;
            namespaceQualifier?: string;
            namespaceURL?: string;
            noPrefix?: boolean;
            request?: (SOAPEnvelope: SOAPEnvelope) => void;
            soap12?: boolean;
            SOAPAction?: string;
            SOAPHeader?: any;
            statusCode?: any;
            success?: (SOAPResponse: SOAPResponse) => void;
            url?: string;
            wss?: any;
    }
    interface SOAP {
        (options?: Options): JQueryXHR;
    }
}
interface JQueryStatic {
    soap: JQuerySOAP.SOAP;
}
