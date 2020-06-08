export type HttpMethod = 'get' | 'post' | 'put' | 'patch' | 'options' | 'head' | 'delete' | 'any';

// Event configuration evolves depending on current lifecycle at getEventInFunction method invokaction
export interface ApiGatewayEvent {
    http:
        | string
        | {
              path: string;
              mehtod: HttpMethod;
              authorizer?: any;
              cors?: any;
              integration?: string;
          };
}

export function getHttp<T extends object>(
    event: { http: T | string },
    functionName: string,
): { path: string; method: string } | T;

export function getHttpPath(http: { path: string }, functionName: string): string;

export function getHttpMethod(http: { method: string }, functionName: string): HttpMethod;
