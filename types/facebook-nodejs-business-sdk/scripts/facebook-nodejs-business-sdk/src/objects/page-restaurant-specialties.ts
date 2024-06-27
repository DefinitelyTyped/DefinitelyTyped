import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * PageRestaurantSpecialties
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class PageRestaurantSpecialties extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      breakfast: 'breakfast',
      coffee: 'coffee',
      dinner: 'dinner',
      drinks: 'drinks',
      lunch: 'lunch'
    });
  }

}