import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * VideoCopyrightMatch
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class VideoCopyrightMatch extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    static get Action(): Record<string, any>;
    static get ActionReason(): Record<string, any>;
    static get MatchContentType(): Record<string, any>;
    get(fields: string[], params?: Record<string, any>): Promise<VideoCopyrightMatch>;
}
