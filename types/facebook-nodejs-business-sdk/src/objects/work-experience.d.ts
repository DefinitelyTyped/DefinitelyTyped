import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * WorkExperience
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class WorkExperience extends AbstractCrudObject {
    static get Fields(): Readonly<{
        description: "description";
        employer: "employer";
        end_date: "end_date";
        from: "from";
        id: "id";
        location: "location";
        position: "position";
        projects: "projects";
        start_date: "start_date";
        with: "with";
    }>;
    get(fields: string[], params?: Record<string, any>): Promise<WorkExperience>;
}
