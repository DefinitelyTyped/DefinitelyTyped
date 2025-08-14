interface Request {
    [k: string]: any;
}
interface Response {
    [k: string]: any;
}
type System = any;

type PluginGenerator = (system: System) => object;

type Plugin = object | PluginGenerator;

type Preset = () => unknown;

export interface SwaggerUIProps {
    spec?: object | string;
    url?: string;
    layout?: string;
    onComplete?: (system: System) => void;
    requestInterceptor?: (req: Request) => Request | Promise<Request>;
    responseInterceptor?: (res: Response) => Response | Promise<Response>;
    docExpansion?: "list" | "full" | "none";
    defaultModelExpandDepth?: number;
    defaultModelsExpandDepth?: number;
    defaultModelRendering?: "example" | "model";
    queryConfigEnabled?: boolean;
    plugins?: Plugin[];
    supportedSubmitMethods?: Array<"get" | "put" | "post" | "delete" | "options" | "head" | "patch" | "trace">;
    deepLinking?: boolean;
    showMutatedRequest?: boolean;
    showExtensions?: boolean;
    showCommonExtensions?: boolean;
    presets?: Preset[];
    filter?: string | boolean;
    requestSnippetsEnabled?: boolean;
    requestSnippets?: object;
    displayOperationId?: boolean;
    tryItOutEnabled?: boolean;
    displayRequestDuration?: boolean;
    persistAuthorization?: boolean;
    withCredentials?: boolean;
    oauth2RedirectUrl?: string;
}

export default SwaggerUIProps;
