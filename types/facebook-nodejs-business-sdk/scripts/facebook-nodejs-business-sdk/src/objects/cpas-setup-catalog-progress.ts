import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * CPASSetupCatalogProgress
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class CPASSetupCatalogProgress extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      child_catalog_count: 'child_catalog_count',
      child_catalog_issues: 'child_catalog_issues',
      id: 'id',
      issues: 'issues',
      name: 'name'
    });
  }

}