import Serverless = require('../index');

declare namespace Service {
    interface Custom {
        [key: string]: any;
    }
}

declare class Service {
    custom: Service.Custom;

    provider: {
        compiledCloudFormationTemplate: {
            Resources: {
                [key: string]: any;
            };
            Outputs?: {
                [key: string]: any;
            };
        };

        name: string;
        stage: string;
        region: string;
        runtime?: string;
        timeout?: number;
        versionFunctions: boolean;
    };
    constructor(serverless: Serverless, data: {});

    load(rawOptions: {}): Promise<any>;
    setFunctionNames(rawOptions: {}): void;

    getServiceName(): string;
    getAllFunctions(): string[];
    getAllFunctionsNames(): string[];
    getFunction(functionName: string): Serverless.FunctionDefinition;
    getEventInFunction(eventName: string, functionName: string): Serverless.Event;
    getAllEventsInFunction(functionName: string): Serverless.Event[];

    mergeResourceArrays(): void;
    validate(): Service;

    update(data: {}): {};
}

export = Service;
