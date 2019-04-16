export const PHASE_EXPORT: string;
export const PHASE_PRODUCTION_BUILD: string;
export const PHASE_PRODUCTION_SERVER: string;
export const PHASE_DEVELOPMENT_SERVER: string;
export const PAGES_MANIFEST: string;
export const BUILD_MANIFEST: string;
export const REACT_LOADABLE_MANIFEST: string;
export const SERVER_DIRECTORY: string;
export const CONFIG_FILE: string;
export const BUILD_ID_FILE: string;
export const BLOCKED_PAGES: string[];

export const CLIENT_STATIC_FILES_PATH: string;
export const CLIENT_STATIC_FILES_RUNTIME: string;
export const CLIENT_STATIC_FILES_RUNTIME_PATH: string;
/** static/runtime/main.js */
export const CLIENT_STATIC_FILES_RUNTIME_MAIN: string;
/** static/runtime/webpack.js */
export const CLIENT_STATIC_FILES_RUNTIME_WEBPACK: string;
/** matches static/<buildid>/pages/<page>.js */
export const IS_BUNDLED_PAGE_REGEX: RegExp;
/** matches static/<buildid>/pages/:page*.js */
export const ROUTE_NAME_REGEX: RegExp;
