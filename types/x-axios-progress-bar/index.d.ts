import { AxiosInstance, AxiosRequestConfig } from "axios";

export function loadProgressBar(
    config?: AxiosRequestConfig,
    instance?: AxiosInstance,
): void;

declare module "axios" {
    interface AxiosRequestConfig {
        progress?: boolean | undefined;
    }
}
