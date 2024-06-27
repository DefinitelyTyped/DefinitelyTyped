import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * CPASAdCreationTemplate
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class CPASAdCreationTemplate extends AbstractCrudObject {
    static get Fields(): Readonly<{
        description: "description";
        id: "id";
        is_unused_template: "is_unused_template";
        name: "name";
        optimization_goal: "optimization_goal";
        targeting_type: "targeting_type";
        template_type: "template_type";
    }>;
    get(fields: string[], params?: Record<string, any>): Promise<CPASAdCreationTemplate>;
}
