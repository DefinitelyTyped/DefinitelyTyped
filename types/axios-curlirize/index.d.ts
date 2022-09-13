// Type definitions for axios-curlirize 1.3
// Project: https://github.com/delirius325/axios-curlirize#readme
// Definitions by: Steven Hankin <https://github.com/stevenhankin>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = AxiosCurlirize;

import { AxiosInstance } from 'axios';

interface Result {
    command: string;
}

interface Callback {
    (result: Result, error: Error): void;
}

declare function AxiosCurlirize(instance: AxiosInstance, callback?: Callback): void;

declare namespace AxiosCurlirize { }
