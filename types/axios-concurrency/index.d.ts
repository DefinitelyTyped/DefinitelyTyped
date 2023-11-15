declare module "axios-concurrency" {
    import {AxiosInstance, AxiosRequestConfig, AxiosResponse} from "axios";

    type RequestHandler = (req: AxiosRequestConfig) => Promise<void>;
    type ResponseHandler = (res: AxiosResponse) => AxiosResponse;
    type ResponseErrorHandler = (res: AxiosResponse) => Promise<AxiosResponse>;

    interface ConcurrencyManagerInstance {
        queue: { request: AxiosRequestConfig; resolver: (value: AxiosRequestConfig) => void }[];
        running: { request: AxiosRequestConfig; resolver: (value: AxiosRequestConfig) => void }[];
        shiftInitial: () => void;
        push: (reqHandler: RequestHandler) => void;
        shift: () => void;
        requestHandler: RequestHandler;
        responseHandler: ResponseHandler;
        responseErrorHandler: ResponseErrorHandler;
        interceptors: {
            request: number | null;
            response: number | null;
        };
        detach: () => void;
    }

    const ConcurrencyManager: (axios: AxiosInstance, MAX_CONCURRENT?: number) => ConcurrencyManagerInstance;

    export {
        ConcurrencyManager,
        RequestHandler,
        ResponseHandler,
        ResponseErrorHandler,
        ConcurrencyManagerInstance,
    }
}
