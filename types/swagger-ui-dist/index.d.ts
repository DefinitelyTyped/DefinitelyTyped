// Type definitions for swagger-ui-dist 3.x
// Project: https://github.com/swagger-api/swagger-ui#readme
// Definitions by: Haowen <https://github.com/haowen737>
//                 Bryce <https://github.com/brycematheson1234>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export {};
export as namespace SwaggerUIDist;

/**
 * get an absolute path to swagger ui for static file serving
 */
export function getAbsoluteFSPath(): string;
export function absolutePath(): string;

interface SwaggerUIBundle {
  (a: {
    deepLinking: boolean;
    dom_id: string;
    presets: any[];
    plugins: any;
    urls: Array<[string, string]>;
    layout: string;
  }): any;
  presets: any;
  plugins: any;
  [k: string]: any;

  getConfigs(): SwaggerConfigs;
}

export const SwaggerUIBundle: SwaggerUIBundle;

interface SwaggerConfigs {
  requestInterceptor: ((request: SwaggerRequest) => SwaggerRequest);
  [k: string]: any;
}

interface SwaggerRequest {
  url: string;
  credentials: string;
  [k: string]: any;
}

export const SwaggerUIStandalonePreset: any;
