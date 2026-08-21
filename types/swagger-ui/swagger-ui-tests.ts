import SwaggerUI = require("swagger-ui");

declare let bool: boolean;

const swaggerUI = SwaggerUI({
    configUrl: "http://www.example.com",
    dom_id: "Some id",
    domNode: document.getElementById("#eyedee"),
    spec: {},
    url: "http://www.example.com",
    urls: [{ name: "123", url: "http://www.example.com" }],
    queryConfigEnabled: true,

    layout: "Idontknow",
    plugins: [
        () => {
            return {
                afterLoad: (system: any) => console.log("Plugin system:", system),
            };
        },
    ],
    presets: [
        () => {
            return {
                afterLoad: (system: any) => console.log("Preset system:", system),
            };
        },
    ],

    deepLinking: false,
    displayOperationId: false,
    defaultModelsExpandDepth: 1,
    defaultModelExpandDepth: 1,
    defaultModelRendering: "example",
    displayRequestDuration: false,
    docExpansion: "list",
    filter: true,
    maxDisplayedTags: 20,
    operationsSorter: (a: any) => a,
    showExtensions: false,
    showCommonExtensions: false,
    tagsSorter: (a: any) => a,
    onComplete: () => console.log("done"),
    syntaxHighlight: bool
        ? {
            activate: true,
            theme: "agate",
        }
        : false,
    tryItOutEnabled: false,
    requestSnippetsEnabled: true,
    requestSnippets: {
        generators: {
            curl_bash: {
                title: "cURL (bash)",
                syntax: "bash",
            },
            curl_powershell: {
                title: "cURL (PowerShell)",
                syntax: "powershell",
            },
            curl_cmd: {
                title: "cURL (CMD)",
                syntax: "bash",
            },
        },
        defaultExpanded: true,
        languagesMask: ["curl_bash"], // e.g. only show curl bash = ["curl_bash"]
    },

    oauth2RedirectUrl: `${window.location.protocol}//${window.location.host}/oauth2-redirect.html`,
    requestInterceptor: a => a,
    responseInterceptor: a => a,
    showMutatedRequest: true,
    supportedSubmitMethods: ["get", "put", "post", "delete", "options", "patch", "trace"],
    validatorUrl: "http://www.example.com",
    withCredentials: true,

    modelPropertyMacro: a => a,
    parameterMacro: (op, param) => 0,

    persistAuthorization: false,

    components: {},
    fn: {},
    configs: {},
    initialState: {},
    fileUploadMediaTypes: [
        "application/octet-stream",
        "image/",
        "audio/",
        "video/",
    ],
    uncaughtExceptionHandler: bool ? null : console.error,
});

// $ExpectType Required<SwaggerUIOptions>
SwaggerUI.config.defaults;
// $ExpectType (target: SwaggerUIOptions, ...sources: SwaggerUIOptions[]) => SwaggerUIOptions
SwaggerUI.config.merge;
// (options: unknown) => SwaggerUIOptions
SwaggerUI.config.typeCast;

// $ExpectType { typeCaster: (value: unknown, defaultValue?: Indexable | undefined) => Indexable | null | undefined; defaultValue?: Indexable | undefined; }
SwaggerUI.config.typeCastMappings.components;
// $ExpectType { typeCaster: (value: unknown, defaultValue?: string | undefined) => string | null | undefined; defaultValue?: string | undefined; }
SwaggerUI.config.typeCastMappings.configUrl;
// $ExpectType { typeCaster: (value: unknown, defaultValue?: any) => any; defaultValue?: any; }
SwaggerUI.config.typeCastMappings.configs;
// $ExpectType { typeCaster: (value: unknown, defaultValue?: boolean | undefined) => boolean | null | undefined; defaultValue?: boolean | undefined; }
SwaggerUI.config.typeCastMappings.deepLinking;
// $ExpectType { typeCaster: (value: unknown, defaultValue?: number | undefined) => number | null | undefined; defaultValue?: number | undefined; }
SwaggerUI.config.typeCastMappings.defaultModelExpandDepth;
// $ExpectType { typeCaster: (value: unknown, defaultValue?: "example" | "model" | undefined) => "example" | "model" | null | undefined; defaultValue?: "example" | "model" | undefined; }
SwaggerUI.config.typeCastMappings.defaultModelRendering;
// $ExpectType { typeCaster: (value: unknown, defaultValue?: number | undefined) => number | null | undefined; defaultValue?: number | undefined; }
SwaggerUI.config.typeCastMappings.defaultModelsExpandDepth;
// $ExpectType { typeCaster: (value: unknown, defaultValue?: boolean | undefined) => boolean | null | undefined; defaultValue?: boolean | undefined; }
SwaggerUI.config.typeCastMappings.displayOperationId;
// $ExpectType { typeCaster: (value: unknown, defaultValue?: boolean | undefined) => boolean | null | undefined; defaultValue?: boolean | undefined; }
SwaggerUI.config.typeCastMappings.displayRequestDuration;
// $ExpectType { typeCaster: (value: unknown, defaultValue?: "list" | "full" | "none" | undefined) => "list" | "full" | "none" | null | undefined; defaultValue?: "list" | "full" | "none" | undefined; }
SwaggerUI.config.typeCastMappings.docExpansion;
// $ExpectType { typeCaster: (value: unknown, defaultValue?: HTMLElement | null | undefined) => HTMLElement | null | undefined; defaultValue?: HTMLElement | null | undefined; }
SwaggerUI.config.typeCastMappings.domNode;
// $ExpectType { typeCaster: (value: unknown, defaultValue?: string | undefined) => string | null | undefined; defaultValue?: string | undefined; }
SwaggerUI.config.typeCastMappings.dom_id;
// $ExpectType { typeCaster: (value: unknown, defaultValue?: string[] | undefined) => string[] | null | undefined; defaultValue?: string[] | undefined; }
SwaggerUI.config.typeCastMappings.fileUploadMediaTypes;
// $ExpectType { typeCaster: (value: unknown, defaultValue?: string | boolean | undefined) => string | boolean | null | undefined; defaultValue?: string | boolean | undefined; }
SwaggerUI.config.typeCastMappings.filter;
// $ExpectType { typeCaster: (value: unknown, defaultValue?: Indexable | undefined) => Indexable | null | undefined; defaultValue?: Indexable | undefined; }
SwaggerUI.config.typeCastMappings.fn;
// $ExpectType { typeCaster: (value: unknown, defaultValue?: any) => any; defaultValue?: any; }
SwaggerUI.config.typeCastMappings.initialState;
// $ExpectType { typeCaster: (value: unknown, defaultValue?: string | undefined) => string | null | undefined; defaultValue?: string | undefined; }
SwaggerUI.config.typeCastMappings.layout;
// $ExpectType { typeCaster: (value: unknown, defaultValue?: number | undefined) => number | null | undefined; defaultValue?: number | undefined; }
SwaggerUI.config.typeCastMappings.maxDisplayedTags;
// $ExpectType { typeCaster: (value: unknown, defaultValue?: ((propName: Readonly<any>) => any) | undefined) => ((propName: Readonly<any>) => any) | null | undefined; defaultValue?: ((propName: Readonly<any>) => any) | undefined; }
SwaggerUI.config.typeCastMappings.modelPropertyMacro;
// $ExpectType { typeCaster: (value: unknown, defaultValue?: string | undefined) => string | null | undefined; defaultValue?: string | undefined; }
SwaggerUI.config.typeCastMappings.oauth2RedirectUrl;
// $ExpectType { typeCaster: (value: unknown, defaultValue?: (() => any) | undefined) => (() => any) | null | undefined; defaultValue?: (() => any) | undefined; }
SwaggerUI.config.typeCastMappings.onComplete;
// $ExpectType { typeCaster: (value: unknown, defaultValue?: SorterLike | undefined) => SorterLike | null | undefined; defaultValue?: SorterLike | undefined; }
SwaggerUI.config.typeCastMappings.operationsSorter;
// $ExpectType { typeCaster: (value: unknown, defaultValue?: ((operation: Readonly<any>, parameter: Readonly<any>) => any) | undefined) => ((operation: Readonly<any>, parameter: Readonly<any>) => any) | null | undefined; defaultValue?: ((operation: Readonly<any>, parameter: Readonly<any>) => any) | undefined; }
SwaggerUI.config.typeCastMappings.parameterMacro;
// $ExpectType { typeCaster: (value: unknown, defaultValue?: boolean | undefined) => boolean | null | undefined; defaultValue?: boolean | undefined; }
SwaggerUI.config.typeCastMappings.persistAuthorization;
// $ExpectType { typeCaster: (value: unknown, defaultValue?: SwaggerUIPlugin[] | undefined) => SwaggerUIPlugin[] | null | undefined; defaultValue?: SwaggerUIPlugin[] | undefined; }
SwaggerUI.config.typeCastMappings.plugins;
// $ExpectType { typeCaster: (value: unknown, defaultValue?: SwaggerUIPlugin[] | SwaggerUIPreset[] | undefined) => SwaggerUIPlugin[] | SwaggerUIPreset[] | null | undefined; defaultValue?: SwaggerUIPlugin[] | SwaggerUIPreset[] | undefined; }
SwaggerUI.config.typeCastMappings.presets;
// @ts-expect-error
SwaggerUI.config.typeCastMappings.queryConfigEnabled;
// $ExpectType { typeCaster: (value: unknown, defaultValue?: ((a: Request) => Request | Promise<Request>) | undefined) => ((a: Request) => Request | Promise<Request>) | null | undefined; defaultValue?: ((a: Request) => Request | Promise<Request>) | undefined; }
SwaggerUI.config.typeCastMappings.requestInterceptor;
// $ExpectType { typeCaster: (value: unknown, defaultValue?: { generators?: { [genName: string]: { title: string; syntax: string; }; } | undefined; defaultExpanded?: boolean | undefined; languagesMask?: string[] | undefined; } | undefined) => { generators?: { [genName: string]: { title: string; syntax: string; }; } | undefined; defaultExpanded?: boolean | undefined; languagesMask?: string[] | undefined; } | null | undefined; defaultValue?: { generators?: { [genName: string]: { title: string; syntax: string; }; } | undefined; defaultExpanded?: boolean | undefined; languagesMask?: string[] | undefined; } | undefined; }
SwaggerUI.config.typeCastMappings.requestSnippets;
// $ExpectType { typeCaster: (value: unknown, defaultValue?: boolean | undefined) => boolean | null | undefined; defaultValue?: boolean | undefined; }
SwaggerUI.config.typeCastMappings.requestSnippetsEnabled;
// $ExpectType { typeCaster: (value: unknown, defaultValue?: ((a: Response) => Response | Promise<Response>) | undefined) => ((a: Response) => Response | Promise<Response>) | null | undefined; defaultValue?: ((a: Response) => Response | Promise<Response>) | undefined; }
SwaggerUI.config.typeCastMappings.responseInterceptor;
// $ExpectType { typeCaster: (value: unknown, defaultValue?: boolean | undefined) => boolean | null | undefined; defaultValue?: boolean | undefined; }
SwaggerUI.config.typeCastMappings.showCommonExtensions;
// $ExpectType { typeCaster: (value: unknown, defaultValue?: boolean | undefined) => boolean | null | undefined; defaultValue?: boolean | undefined; }
SwaggerUI.config.typeCastMappings.showExtensions;
// $ExpectType { typeCaster: (value: unknown, defaultValue?: boolean | undefined) => boolean | null | undefined; defaultValue?: boolean | undefined; }
SwaggerUI.config.typeCastMappings.showMutatedRequest;
// $ExpectType { typeCaster: (value: unknown, defaultValue?: { [propName: string]: any } | undefined) => { [propName: string]: any } | null | undefined; defaultValue?: { [propName: string]: any } | undefined; }
SwaggerUI.config.typeCastMappings.spec;
// $ExpectType { typeCaster: (value: unknown, defaultValue?: SupportedHTTPMethods[] | undefined) => SupportedHTTPMethods[] | null | undefined; defaultValue?: SupportedHTTPMethods[] | undefined; }
SwaggerUI.config.typeCastMappings.supportedSubmitMethods;
// $ExpectType { typeCaster: (value: unknown, defaultValue?: false | { activate?: boolean | undefined; theme?: "agate" | "arta" | "idea" | "monokai" | "nord" | "obsidian" | "tomorrow-night" | undefined; } | undefined) => false | { activate?: boolean | undefined; theme?: "agate" | "arta" | "idea" | "monokai" | "nord" | "obsidian" | "tomorrow-night" | undefined; } | null | undefined; defaultValue?: false | { activate?: boolean | undefined; theme?: "agate" | "arta" | "idea" | "monokai" | "nord" | "obsidian" | "tomorrow-night" | undefined; } | undefined; }
SwaggerUI.config.typeCastMappings.syntaxHighlight;
// $ExpectType { typeCaster: (value: unknown, defaultValue?: SorterLike | undefined) => SorterLike | null | undefined; defaultValue?: SorterLike | undefined; }
SwaggerUI.config.typeCastMappings.tagsSorter;
// $ExpectType { typeCaster: (value: unknown, defaultValue?: boolean | undefined) => boolean | null | undefined; defaultValue?: boolean | undefined; }
SwaggerUI.config.typeCastMappings.tryItOutEnabled;
// $ExpectType { typeCaster: (value: unknown, defaultValue?: ((error: unknown) => unknown) | null | undefined) => ((error: unknown) => unknown) | null | undefined; defaultValue?: ((error: unknown) => unknown) | null | undefined; }
SwaggerUI.config.typeCastMappings.uncaughtExceptionHandler;
// $ExpectType { typeCaster: (value: unknown, defaultValue?: string | undefined) => string | null | undefined; defaultValue?: string | undefined; }
SwaggerUI.config.typeCastMappings.url;
// $ExpectType { typeCaster: (value: unknown, defaultValue?: { url: string; name: string; }[] | undefined) => { url: string; name: string; }[] | null | undefined; defaultValue?: { url: string; name: string; }[] | undefined; }
SwaggerUI.config.typeCastMappings.urls;
// $ExpectType { typeCaster: (value: unknown, defaultValue?: string | undefined) => string | null | undefined; defaultValue?: string | undefined; }
SwaggerUI.config.typeCastMappings.validatorUrl;
// $ExpectType { typeCaster: (value: unknown, defaultValue?: boolean | undefined) => boolean | null | undefined; defaultValue?: boolean | undefined; }
SwaggerUI.config.typeCastMappings.withCredentials;

// $ExpectType SwaggerUIPreset
SwaggerUI.presets.base;
// $ExpectType SwaggerUIPreset
SwaggerUI.presets.apis;

// $ExpectType SwaggerUIPlugin
SwaggerUI.plugins.Auth;
// $ExpectType SwaggerUIPlugin
SwaggerUI.plugins.Configs;
// $ExpectType SwaggerUIPlugin
SwaggerUI.plugins.DeepLining;
// $ExpectType SwaggerUIPlugin
SwaggerUI.plugins.Err;
// $ExpectType SwaggerUIPlugin
SwaggerUI.plugins.Filter;
// $ExpectType SwaggerUIPlugin
SwaggerUI.plugins.Icons;
// $ExpectType SwaggerUIPlugin
SwaggerUI.plugins.JSONSchema5;
// $ExpectType SwaggerUIPlugin
SwaggerUI.plugins.JSONSchema5Samples;
// $ExpectType SwaggerUIPlugin
SwaggerUI.plugins.JSONSchema202012;
// $ExpectType SwaggerUIPlugin
SwaggerUI.plugins.JSONSchema202012Samples;
// $ExpectType SwaggerUIPlugin
SwaggerUI.plugins.Layout;
// $ExpectType SwaggerUIPlugin
SwaggerUI.plugins.Logs;
// $ExpectType SwaggerUIPlugin
SwaggerUI.plugins.OpenAPI30;
// $ExpectType SwaggerUIPlugin
SwaggerUI.plugins.OpenAPI31;
// $ExpectType SwaggerUIPlugin
SwaggerUI.plugins.OnComplete;
// $ExpectType SwaggerUIPlugin
SwaggerUI.plugins.RequestSnippets;
// $ExpectType SwaggerUIPlugin
SwaggerUI.plugins.Spec;
// $ExpectType SwaggerUIPlugin
SwaggerUI.plugins.SwaggerClient;
// $ExpectType SwaggerUIPlugin
SwaggerUI.plugins.Util;
// $ExpectType SwaggerUIPlugin
SwaggerUI.plugins.View;
// $ExpectType SwaggerUIPlugin
SwaggerUI.plugins.ViewLegacy;
// $ExpectType SwaggerUIPlugin
SwaggerUI.plugins.DownloadUrl;
// $ExpectType SwaggerUIPlugin
SwaggerUI.plugins.SyntaxHighlighting;
// $ExpectType SwaggerUIPlugin
SwaggerUI.plugins.Versions;
// $ExpectType SwaggerUIPlugin
SwaggerUI.plugins.SafeRender;

swaggerUI.initOAuth({});
swaggerUI.preauthorizeApiKey("abc", "dec");
swaggerUI.preauthorizeBasic("key", "user", "password");

import SwaggerUIStandalonePreset from "swagger-ui/dist/swagger-ui-standalone-preset";
// $ExpectType SwaggerUIPreset
const _standAlonePreset = SwaggerUIStandalonePreset;

import SwaggerUICSS from "swagger-ui/dist/swagger-ui.css";
// $ExpectType any
const _css = SwaggerUICSS;

import OAuth2RedirectHTML from "swagger-ui/dist/oauth2-redirect.html";
// $ExpectType any
const _html = OAuth2RedirectHTML;
