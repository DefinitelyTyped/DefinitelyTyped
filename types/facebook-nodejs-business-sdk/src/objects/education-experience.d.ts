import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * EducationExperience
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class EducationExperience extends AbstractCrudObject {
    static get Fields(): Readonly<{
        classes: "classes";
        concentration: "concentration";
        degree: "degree";
        id: "id";
        school: "school";
        type: "type";
        with: "with";
        year: "year";
    }>;
    get(fields: string[], params?: Record<string, any>): Promise<EducationExperience>;
}
