import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * PageRestaurantSpecialties
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class PageRestaurantSpecialties extends AbstractCrudObject {
    static get Fields(): Readonly<{
        breakfast: "breakfast";
        coffee: "coffee";
        dinner: "dinner";
        drinks: "drinks";
        lunch: "lunch";
    }>;
}
