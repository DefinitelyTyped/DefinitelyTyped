// Type definitions for swagger-ui-dist 3.x
// Project: https://github.com/swagger-api/swagger-ui#readme
// Definitions by: Haowen <https://github.com/haowen737>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/* =================== USAGE ===================

    import * as SwaggerUIDist from "swagger-ui-dist"
    const swaggerUiAssetPath = SwaggerUIDist.getAbsoluteFSPath()

 =============================================== */

export as namespace SwaggerUIDist;

/**
 * get an absolute path to swagger ui for static file serving
 */
export function getAbsoluteFSPath(): string;
export function absolutePath(): string;

export const SwaggerUIBundle: any;
export const SwaggerUIStandalonePreset: any;
