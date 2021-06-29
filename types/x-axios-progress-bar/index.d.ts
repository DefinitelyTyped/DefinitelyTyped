// Type definitions for x-axios-progress-bar 1.2
// Project: https://github.com/mszkb/progress-bar-4-axios#readme
// Definitions by: Claas Augner <https://github.com/caugner>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { AxiosRequestConfig, AxiosInstance } from "axios";

export  function loadProgressBar(
    config?: AxiosRequestConfig,
    instance?: AxiosInstance
): void;

declare module "axios" {
    interface AxiosRequestConfig {
        progress?: boolean;
    }
}
