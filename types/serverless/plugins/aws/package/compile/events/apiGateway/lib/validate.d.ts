export type HttpMethod = 'get' | 'post' | 'put' | 'patch' | 'options' | 'head' | 'delete' | 'any';

// Event configuration evolves depending on current lifecycle at getEventInFunction method invokaction
export interface ApiGatewayEvent {
    http:
        | string
        | {
              path: string;
              method: HttpMethod;
              authorizer?: any;
              cors?: any;
              integration?: string | undefined;
          };
}

export function getHttp(event: ApiGatewayEvent, functionName: string): ApiGatewayEvent['http'];

export function getHttpPath(http: { path: string }, functionName: string): string;

export function getHttpMethod(http: { method: string }, functionName: string): HttpMethod;
