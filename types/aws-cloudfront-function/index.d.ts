declare namespace AWSCloudFrontFunction {
    interface Event {
        version: "1.0";
        context: Context;
        viewer: Viewer;
        request: Request;
        response: Response;
    }

    interface Context {
        distributionDomainName: string;
        distributionId: string;
        eventType: "viewer-request" | "viewer-response";
        requestId: string;
    }

    interface Viewer {
        ip: string;
    }

    interface Request {
        method: string;
        uri: string;
        querystring: ValueObject;
        headers: ValueObject;
        cookies: ValueObject;
    }

    interface Response {
        statusCode: number;
        statusDescription?: string;
        headers?: ValueObject;
        cookies?: ResponseCookie;
    }

    interface ValueObject {
        [name: string]: {
            value: string;
            multiValue?: Array<{
                value: string;
            }>;
        };
    }

    interface ResponseCookie {
        [name: string]: {
            value: string;
            attributes: string;
            multiValue?: Array<{
                value: string;
                attributes: string;
            }>;
        };
    }
}
