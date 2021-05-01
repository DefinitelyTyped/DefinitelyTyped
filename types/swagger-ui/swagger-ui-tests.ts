import SwaggerUI = require("swagger-ui");

SwaggerUI({
    configUrl: "http://www.example.com",
    dom_id: "Some id",
    domNode: document.getElementById("#eyedee"),
    spec: {},
    url: "http://www.example.com",
    urls: [{ name: "123", url: "http://www.example.com" }],

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
    useUnsafeMarkdown: false,
    onComplete: () => console.log("done"),
    syntaxHighlight: {
        activate: true,
        theme: "agate",
    },
    tryItOutEnabled: false,
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
});

const swaggerUI = SwaggerUI({
    syntaxHighlight: false,
});

swaggerUI.initOAuth({});
swaggerUI.preauthorizeApiKey("abc", "dec");
swaggerUI.preauthorizeBasic("key", "user", "password");
