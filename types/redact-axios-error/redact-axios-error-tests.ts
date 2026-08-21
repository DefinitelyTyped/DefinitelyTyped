import { AxiosErrorGroomer, getAxiosErrorInterceptor } from "redact-axios-error";

getAxiosErrorInterceptor();
getAxiosErrorInterceptor(null);

getAxiosErrorInterceptor(new AxiosErrorGroomer());

new AxiosErrorGroomer(false);
new AxiosErrorGroomer(false, false);
new AxiosErrorGroomer(false, false, false);
