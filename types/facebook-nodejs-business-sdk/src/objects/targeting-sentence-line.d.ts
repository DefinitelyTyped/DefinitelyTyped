import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * TargetingSentenceLine
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class TargetingSentenceLine extends AbstractCrudObject {
    static get Fields(): Readonly<{
        id: "id";
        params: "params";
        targetingsentencelines: "targetingsentencelines";
    }>;
}
