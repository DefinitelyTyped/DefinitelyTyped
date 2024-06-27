import HttpServiceInterface from "./http-service-interface";
export default class HttpServiceClientConfig {
  static _client: HttpServiceInterface;

  static setClient(client: HttpServiceInterface) {
    this._client = client;
  }

  static getClient() {
    return this._client;
  }

}