// Type definitions for axios 0.5.2
// Project: https://github.com/mzabriskie/axios
// Definitions by: Marcel Buesing <https://github.com/marcelbuesing>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../es6-promise/es6-promise.d.ts"/>

declare module Axios {
  export enum HTTPMethod { GET, PUT, POST, DELETE, CONNECT, HEAD, OPTIONS, TRACE, PATCH }
  export enum ResponseType { arraybuffer, blob, document, json, text }

  /**
   * <T> - request body data type
   */
  interface AxiosXHRConfigBase<T> {

    /**
     * Change the request data before it is sent to the server.
     * This is only applicable for request methods 'PUT', 'POST', and 'PATCH'
     * The last function in the array must return a string or an ArrayBuffer
     */
    transformRequest?: <U>(data:T) => U;

    /**
     * change the response data to be made before it is passed to then/catch
     */
    transformResponse?: <U>(data:T) => U;

    /**
     * custom headers to be sent
     */
    headers?: Object;

    /**
     * URL parameters to be sent with the request
     */
    params?: Object;

    /**
     * indicates whether or not cross-site Access-Control requests
     * should be made using credentials
     */
    withCredentials?: boolean;

    /**
     * indicates the type of data that the server will respond with
     * options are 'arraybuffer', 'blob', 'document', 'json', 'text'
     */
    responseType?: Axios.ResponseType;

    /**
     * name of the cookie to use as a value for xsrf token
     */
    xsrfCookieName?: string;

    /**
     * name of the http header that carries the xsrf token value
     */
    xsrfHeaderName?: string;

  }

  /**
   * <T> - request body data type
   */
  interface AxiosXHRConfig<T> extends AxiosXHRConfigBase<T>  {
      /**
       * server URL that will be used for the request
       */
      url: string;

      /**
       * request method to be used when making the request
       */
      method?: Axios.HTTPMethod;

      /**
       * data to be sent as the request body
       * Only applicable for request methods 'PUT', 'POST', and 'PATCH'
       * When no `transformRequest` is set, must be a string, an ArrayBuffer or a hash
       */
      data?: T;
  }

  /**
   * <T> - expected response type, 
   * <U> - request body data type
   */
  interface AxiosXHR<T, U> {
      /**
       * Response that was provided by the server
       */
      data: T;

      /**
       * HTTP status code from the server response
       */
      status: number;

      /**
       * HTTP status message from the server response
       */
      statusText: string;

      /**
       * headers that the server responded with
       */
      headers: Object;

      /**
       * config that was provided to `axios` for the request
       */
      config: AxiosXHRConfig<U>;
  }

  /**
   * <T> - expected response type, 
   * <U> - request body data type
   */
  interface AxiosStatic {

    <T, U>(config: AxiosXHRConfig<U>): Promise<AxiosXHR<T, U>>;

    new <T, U>(config: AxiosXHRConfig<U>): Promise<AxiosXHR<T, U>>;

    /**
     * convenience alias, method = GET
     */
    get<T, U>(url: string, config?: AxiosXHRConfigBase<U>): Promise<AxiosXHR<T, U>>;


    /**
     * convenience alias, method = DELETE
     */
    delete<T, U>(url: string, config?: AxiosXHRConfigBase<U>): Promise<AxiosXHR<T, U>>;

    /**
     * convenience alias, method = HEAD
     */
    head<T, U>(url: string, config?: AxiosXHRConfigBase<U>): Promise<AxiosXHR<T, U>>;

    /**
     * convenience alias, method = POST
     */
    post<T, U>(url: string, data?: any, config?: AxiosXHRConfigBase<U>): Promise<AxiosXHR<T, U>>;

    /**
     * convenience alias, method = PUT
     */
    put<T, U>(url: string, data?: any, config?: AxiosXHRConfigBase<U>): Promise<AxiosXHR<T, U>>;

    /**
     * convenience alias, method = PATCH
     */
    patch<T, U>(url: string, data?: any, config?: AxiosXHRConfigBase<U>): Promise<AxiosXHR<T, U>>;
  }
}

declare var axios: Axios.AxiosStatic;

declare module "axios" {
  export = axios;
}
