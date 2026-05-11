import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * ExtendedCreditEmail
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ExtendedCreditEmail extends AbstractCrudObject {
    static get Fields(): Readonly<{
        email: "email";
        id: "id";
    }>;
}
