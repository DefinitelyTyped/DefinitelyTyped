// Type definitions for axios-curlirize 1.3
// Project: https://github.com/delirius325/axios-curlirize#readme
// Definitions by: Steven Hankin <https://github.com/me>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = AxiosCurlirize;

import {AxiosStatic} from 'axios';

interface ICallback {
    (error: Error, result?: number): void;
}

declare function AxiosCurlirize(instance: AxiosStatic, callback?: ICallback): void;

declare namespace AxiosCurlirize { }
