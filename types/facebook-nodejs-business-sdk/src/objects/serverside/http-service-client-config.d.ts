import HttpServiceInterface from './http-service-interface';
declare namespace HttpServiceClientConfig {
    const _client: HttpServiceInterface;
    function setClient(client: HttpServiceInterface): void;
    function getClient(): HttpServiceInterface;
}
export default HttpServiceClientConfig;
