// Type definitions for swagger-ui-react 3.23
// Project: https://github.com/swagger-api/swagger-ui#readme
// Definitions by: viki.green <https://github.com/VictoriaGreen93>
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

export interface SwaggerUIProps {
    spec?: object;
    url?: string;
    onComplete?: (system: System) => void;
    requestInterceptor?: (req: Request) => Request | Promise<Request>;
    responseInterceptor?: (res: Response) => Response | Promise<Response>;
    docExpansion: 'list' | 'full' | 'none';
}

declare class SwaggerUI extends React.PureComponent<SwaggerUIProps> {}
export default SwaggerUI;
