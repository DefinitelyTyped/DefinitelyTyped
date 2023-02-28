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
            Outputs?:
                | {
                      [key: string]: any;
                  }
                | undefined;
        };

        name: string;
        stackTags?: { [key: string]: any };
        stage: string;
        region: string;
        runtime?: string | undefined;
        timeout?: number | undefined;
        versionFunctions: boolean;
        layers?: Array<string | Record<string, string>> | undefined;
    };
    serverless: Serverless;
    service: string | null;
    plugins: string[];
    pluginsData: { [key: string]: any };
    functions: { [key: string]: Serverless.FunctionDefinitionHandler | Serverless.FunctionDefinitionImage };
    resources:
        | {
              Resources: {
                  [key: string]: any;
              };
          }
        | { [key: string]: any };
    package: { [key: string]: any };
    configValidationMode: string;
    disabledDeprecations?: any[] | undefined;
    serviceFilename?: string | undefined;
    app?: any;
    tenant?: any;
    org?: any;
    layers: { [key: string]: any };
    outputs?: any;
    initialServerlessConfig: any;
    constructor(serverless: Serverless, data: {});

    load(rawOptions: {}): Promise<any>;
    setFunctionNames(rawOptions: {}): void;

    getServiceName(): string;
    getAllFunctions(): string[];
    getAllFunctionsNames(): string[];
    getFunction(functionName: string): Serverless.FunctionDefinitionHandler | Serverless.FunctionDefinitionImage;
    getEventInFunction(eventName: string, functionName: string): Serverless.Event;
    getAllEventsInFunction(functionName: string): Serverless.Event[];

    mergeResourceArrays(): void;
    validate(): Service;

    update(data: {}): {};
}

export = Service;
