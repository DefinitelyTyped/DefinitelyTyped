type ErrorHandlerCallback = (error: any, isFatal?: boolean) => void;

export interface ErrorUtils {
    setGlobalHandler: (callback: ErrorHandlerCallback) => void;
    getGlobalHandler: () => ErrorHandlerCallback;
}
