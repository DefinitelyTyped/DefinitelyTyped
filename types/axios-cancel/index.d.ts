// Type definitions for axios-cancel 0.2
// Project: https://github.com/thaerlabs/axios-cancel, https://www.npmjs.com/package/axios-cancel
// Definitions by: TheDSCPL <https://github.com/TheDSCPL>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.9

import { AxiosStatic } from "axios";

declare module 'axios' {
    interface AxiosRequestConfig {
        requestId?: string;
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
