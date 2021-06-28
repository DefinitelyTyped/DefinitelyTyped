// Type definitions for swagger-ui-react 3.35
// Project: https://github.com/swagger-api/swagger-ui#readme
// Definitions by: viki.green <https://github.com/VictoriaGreen93>
//                 Mendes <https://github.com/fernando-msj>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from 'react';

interface Request {
    [k: string]: any;
}
interface Response {
    [k: string]: any;
}
type System = any;

type PluginGenerator = (system: System) => object;

type Plugin = object | PluginGenerator;

export interface SwaggerUIProps {
    spec?: object | string;
    url?: string;
    onComplete?: (system: System) => void;
    requestInterceptor?: (req: Request) => Request | Promise<Request>;
    responseInterceptor?: (res: Response) => Response | Promise<Response>;
    docExpansion?: 'list' | 'full' | 'none';
    defaultModelExpandDepth?: number;
    plugins?: Plugin[];
    supportedSubmitMethods?: string[];
    deepLinking?: boolean;
    showMutatedRequest?: boolean;
}

declare class SwaggerUI extends React.PureComponent<SwaggerUIProps> {}
export default SwaggerUI;
