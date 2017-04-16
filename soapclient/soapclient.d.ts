declare class SOAPClientParameters {
	add(name: string|number, value: string|number|boolean|Object);
	toXml();
}

declare class SOAPClient {
	invoke(url: string, method: string, parameters: SOAPClientParameters, async: boolean, callback: Function);
}
