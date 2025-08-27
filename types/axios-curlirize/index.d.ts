export = AxiosCurlirize;

import { AxiosInstance } from "axios";

interface Result {
    command: string;
}

interface Callback {
    (result: Result, error: Error): void;
}

declare function AxiosCurlirize(instance: AxiosInstance, callback?: Callback): void;

declare namespace AxiosCurlirize {}
