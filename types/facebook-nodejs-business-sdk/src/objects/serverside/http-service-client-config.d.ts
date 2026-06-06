import HttpServiceInterface from "./http-service-interface";
export default class HttpServiceClientConfig {
    static _client: HttpServiceInterface;
    static setClient(client: HttpServiceInterface): void;
    static getClient(): HttpServiceInterface;
}
