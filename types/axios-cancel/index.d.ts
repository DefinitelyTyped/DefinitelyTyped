import { AxiosStatic } from "axios";

declare module "axios" {
    interface AxiosRequestConfig {
        requestId?: string | undefined;
    }
    interface AxiosStatic {
        cancel: (requestId: string) => void;
        cancelAll: () => void;
    }
}

interface AxiosCancelOptions {
    /**
     * Enables logging
     * default: false
     */
    debug: boolean;
}

declare function axiosCancel(axiosStatic: AxiosStatic, options?: AxiosCancelOptions): void;

export default axiosCancel;
