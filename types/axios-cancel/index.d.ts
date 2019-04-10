// Type definitions for axios-cancel 0.2
// Project: https://github.com/thaerlabs/axios-cancel, https://www.npmjs.com/package/axios-cancel
// Definitions by: TheDSCPL <https://github.com/TheDSCPL>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 1.0

import axios from "axios";

declare module 'axios' {
    export interface AxiosRequestConfig {
        requestId?: string
    }
}

function axiosCancel(a: typeof axios): void;

export default axiosCancel;
