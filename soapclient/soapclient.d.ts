// Type definitions for JavaScript SOAP Client
// Project: http://javascriptsoapclient.codeplex.com/
// Definitions by: xDreamCoding <https://github.com/xdreamcoding/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare class SOAPClientParameters {
	public add(name: string|number, value: string|number|boolean|Object): SOAPClientParameters;
	public toXml(): string;
}

interface SOAPClient {
	invoke(url: string, method: string, parameters: SOAPClientParameters, async: boolean, callback?: (response: any) => any): any;
}

declare var SOAPClient: SOAPClient;
