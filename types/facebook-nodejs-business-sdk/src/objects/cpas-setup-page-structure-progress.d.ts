import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * CPASSetupPageStructureProgress
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class CPASSetupPageStructureProgress extends AbstractCrudObject {
    static get Fields(): Readonly<{
        id: "id";
        issues: "issues";
        name: "name";
    }>;
}
