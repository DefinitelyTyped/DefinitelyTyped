import { Handler } from "../handler";

export type EventBridgeHandler<TDetailType extends string, TDetail, TResult> = Handler<
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
