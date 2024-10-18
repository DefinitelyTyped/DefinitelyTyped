import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * PageVideosYouCanUse
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class PageVideosYouCanUse extends AbstractCrudObject {
    static get Fields(): Readonly<{
        description: "description";
        id: "id";
        title: "title";
    }>;
}
