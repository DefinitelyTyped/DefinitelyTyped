/**
 * https://intl.cloud.tencent.com/document/product/583/9210
 */
export type Handler<TEvent, TResult> = (
    event: TEvent,
    context: Context,
    callback: Callback<TResult>,
) => void | Promise<TResult>;

export interface Context {
    callbackWaitsForEmptyEventLoop: boolean;
    getRemainingTimeInMillis: () => number;
    memory_limit_in_mb: number;
    time_limit_in_ms: number;
    request_id: string;
    environment: string;
    environ: string;
    function_version: string;
    function_name: string;
    namespace: string;
    tencentcloud_region: string;
    tencentcloud_appid: string;
    tencentcloud_uin: string;
}

export type Callback<TResult> = (error?: Error | string | null, result?: TResult) => void;
