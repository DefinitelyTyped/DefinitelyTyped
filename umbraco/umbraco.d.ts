declare namespace Umbraco {
    export var Sys: IUmbracoSystem;

    interface IUmbracoSystem {
        ServerVariables: IServerVariables;
    }

    export interface IUmbracoUrls {
        externalLoginsUrl: string;
        externalLinkLoginsUrl: string;
        legacyTreeJs: string;
        manifestAssetList: string;
        gridConfig: string;
        serverVarsJs: string;
        redirectUrlManagementApiBaseUrl: string;
        embedApiBaseUrl: string;
        userApiBaseUrl: string;
        contentApiBaseUrl: string;
        mediaApiBaseUrl: string;
        imagesApiBaseUrl: string;
        sectionApiBaseUrl: string;
        treeApplicationApiBaseUrl: string;
        contentTypeApiBaseUrl: string;
        mediaTypeApiBaseUrl: string;
        macroApiBaseUrl: string;
        authenticationApiBaseUrl: string;
        currentUserApiBaseUrl: string;
        legacyApiBaseUrl: string;
        entityApiBaseUrl: string;
        dataTypeApiBaseUrl: string;
        dashboardApiBaseUrl: string;
        logApiBaseUrl: string;
        gravatarApiBaseUrl: string;
        memberApiBaseUrl: string;
        packageInstallApiBaseUrl: string;
        relationApiBaseUrl: string;
        rteApiBaseUrl: string;
        stylesheetApiBaseUrl: string;
        memberTypeApiBaseUrl: string;
        updateCheckApiBaseUrl: string;
        tagApiBaseUrl: string;
        memberTreeBaseUrl: string;
        mediaTreeBaseUrl: string;
        contentTreeBaseUrl: string;
        tagsDataBaseUrl: string;
        examineMgmtBaseUrl: string;
        xmlDataIntegrityBaseUrl: string;
        healthCheckBaseUrl: string;
        modelsBuilderBaseUrl: string;
    }

    export interface IUmbracoSettings {
        umbracoPath: string;
        mediaPath: string;
        appPluginsPath: string;
        imageFileTypes: string;
        disallowedUploadFiles: string;
        maxFileSize: string;
        keepUserLoggedIn: boolean;
        cssPath: string;
        allowPasswordReset: boolean;
    }

    export interface ModelsBuilder {
        enabled: boolean;
    }

    export interface IUmbracoPlugins {
        trees: any[];
        modelsBuilder: ModelsBuilder;
    }

    export interface IApplication {
        assemblyVersion: string;
        version: string;
        cdf: number;
        applicationPath: string;
        serverTimeOffset: number;
    }

    export interface IExternalLogins {
        providers: any[];
    }

    export interface IServerVariables {
        umbracoUrls: IUmbracoUrls;
        umbracoSettings: IUmbracoSettings;
        umbracoPlugins: IUmbracoPlugins;
        isDebuggingEnabled: boolean;
        application: IApplication;
        externalLogins: IExternalLogins;
    }
}
