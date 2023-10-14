import { AbstractCrudObject } from "./../abstract-crud-object";
export default class ProfilePictureSource extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    static get Type(): Record<string, any>;
    static get BreakingChange(): Record<string, any>;
}
