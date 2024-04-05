import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

type RequestHandler = (req: AxiosRequestConfig) => Promise<void>;
type ResponseHandler = (res: AxiosResponse) => AxiosResponse;
type ResponseErrorHandler = (res: AxiosResponse) => Promise<AxiosResponse>;
interface Task {
    request: AxiosRequestConfig;
    resolver: (value: AxiosRequestConfig) => void;
}

interface ConcurrencyManagerInstance {
    queue: Task[];
    running: Task[];
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

declare function ConcurrencyManager(axios: AxiosInstance, MAX_CONCURRENT?: number): ConcurrencyManagerInstance;

export { ConcurrencyManager, ConcurrencyManagerInstance, RequestHandler, ResponseErrorHandler, ResponseHandler };
