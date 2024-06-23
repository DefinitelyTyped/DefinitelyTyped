declare const RelayError: {
    create(name: string, messageFormat: string, ...messageParams: Array<string | number | boolean>): Error;
    createWarning(name: string, messageFormat: string, ...messageParams: Array<string | number | boolean>): Error;
};

export default RelayError;
