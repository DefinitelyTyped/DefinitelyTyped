// Type definitions for @lifeomic/axios-fetch 1.4
// Project: https://github.com/lifeomic/axios-fetch
// Definitions by: Jason Di Benedetto <https://github.com/jasondibenedetto>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import { Response, RequestInfo, RequestInit } from 'node-fetch';
import { AxiosInstance, AxiosTransformer } from 'axios';

export function buildAxiosFetch(
    axios: AxiosInstance,
    transformer?: AxiosTransformer,
): (url: RequestInfo, init?: RequestInit) => Promise<Response>;
