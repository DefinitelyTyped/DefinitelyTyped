import { AxiosErrorGroomer } from "./axios-error-groomer";

export function getAxiosErrorInterceptor(axiosErrorGroomer?: AxiosErrorGroomer | null): (error: any) => Promise<never>;
export const config: AxiosErrorGroomer | null;
