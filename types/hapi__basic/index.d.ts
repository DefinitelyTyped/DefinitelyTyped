import { Plugin, Request, ResponseToolkit } from "@hapi/hapi";

declare namespace Basic {
    interface ValidateCustomResponse {
        response: any;
    }

    interface ValidateResponse {
        isValid: boolean;
        credentials?: any;
    }

    interface Validate {
        (
            request: Request,
            username: string,
            password: string,
            h: ResponseToolkit,
        ): Promise<ValidateResponse | ValidateCustomResponse>;
    }
}

declare var Basic: Plugin<{}>;

export = Basic;
