import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * MessagingFeatureStatus
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class MessagingFeatureStatus extends AbstractCrudObject {
    static get Fields(): Readonly<{
        hop_v2: "hop_v2";
        ig_multi_app: "ig_multi_app";
        msgr_multi_app: "msgr_multi_app";
    }>;
}
