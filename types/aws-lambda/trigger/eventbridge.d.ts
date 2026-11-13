import { AsyncHandler, Handler } from "../handler";

/**
 * {@link EventBridgeAsyncHandler} Is the new version of this
 * @deprecated No longer available as of Node.js 24 Runtime {@link https://aws.amazon.com/blogs/compute/node-js-24-runtime-now-available-in-aws-lambda/}
 */
export type EventBridgeHandler<TDetailType extends string, TDetail, TResult> = Handler<
    EventBridgeEvent<TDetailType, TDetail>,
    TResult
>;
export type EventBridgeAsyncHandler<TDetailType extends string, TDetail, TResult> = AsyncHandler<
    EventBridgeEvent<TDetailType, TDetail>,
    TResult
>;

export interface EventBridgeEvent<TDetailType extends string, TDetail> {
    id: string;
    version: string;
    account: string;
    time: string;
    region: string;
    resources: string[];
    source: string;
    "detail-type": TDetailType;
    detail: TDetail;
    "replay-name"?: string;
}
