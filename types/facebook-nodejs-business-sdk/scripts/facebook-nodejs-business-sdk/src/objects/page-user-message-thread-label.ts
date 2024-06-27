import { AbstractCrudObject } from "./../abstract-crud-object";
import AbstractObject from "./../abstract-object";
/**
 * PageUserMessageThreadLabel
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class PageUserMessageThreadLabel extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      id: 'id',
      page_label_name: 'page_label_name'
    });
  }

  deleteLabel(params: Record<string, any> = {}): Promise<any> {
    return super.deleteEdge('/label', params);
  }

  createLabel(fields: Array<string>, params: Record<string, any> = {}, pathOverride?: string | null | undefined = null): Promise<PageUserMessageThreadLabel> {
    return this.createEdge('/label', fields, params, PageUserMessageThreadLabel, pathOverride);
  }

  // $FlowFixMe : Support Generic Types
  delete(fields: Array<string>, params: Record<string, any> = {}): AbstractObject {
    // $FlowFixMe : Support Generic Types
    return super.delete(params);
  }

  get(fields: Array<string>, params: Record<string, any> = {}): PageUserMessageThreadLabel {
    // $FlowFixMe : Support Generic Types
    return this.read(fields, params);
  }

}