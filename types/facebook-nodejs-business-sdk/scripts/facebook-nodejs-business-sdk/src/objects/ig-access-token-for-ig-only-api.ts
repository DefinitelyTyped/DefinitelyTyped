import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * IGAccessTokenForIGOnlyAPI
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class IGAccessTokenForIGOnlyAPI extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      access_token: 'access_token',
      expires_in: 'expires_in',
      token_type: 'token_type',
      id: 'id'
    });
  }

  get(fields: Array<string>, params: Record<string, any> = {}): IGAccessTokenForIGOnlyAPI {
    // $FlowFixMe : Support Generic Types
    return this.read(fields, params);
  }

}