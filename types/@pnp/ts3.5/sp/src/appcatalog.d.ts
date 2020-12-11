import { SharePointQueryable, SharePointQueryableInstance, SharePointQueryableCollection } from "./sharepointqueryable";
import { File } from "./files";
/**
 * Represents an app catalog
 */
export declare class AppCatalog extends SharePointQueryableCollection {
    constructor(baseUrl: string | SharePointQueryable, path?: string);
    /**
     * Get details of specific app from the app catalog
     * @param id - Specify the guid of the app
     */
    getAppById(id: string): App;
    /**
     * Uploads an app package. Not supported for batching
     *
     * @param filename Filename to create.
     * @param content app package data (eg: the .app or .sppkg file).
     * @param shouldOverWrite Should an app with the same name in the same location be overwritten? (default: true)
     * @returns Promise<AppAddResult>
     */
    add(filename: string, content: string | ArrayBuffer | Blob, shouldOverWrite?: boolean): Promise<AppAddResult>;
}
/**
 * Represents the actions you can preform on a given app within the catalog
 */
export declare class App extends SharePointQueryableInstance {
    /**
     * This method deploys an app on the app catalog.  It must be called in the context
     * of the tenant app catalog web or it will fail.
     *
     * @param skipFeatureDeployment Deploy the app to the entire tenant
     */
    deploy(skipFeatureDeployment?: boolean): Promise<void>;
    /**
     * This method retracts a deployed app on the app catalog.  It must be called in the context
     * of the tenant app catalog web or it will fail.
     */
    retract(): Promise<void>;
    /**
     * This method allows an app which is already deployed to be installed on a web
     */
    install(): Promise<void>;
    /**
     * This method allows an app which is already insatlled to be uninstalled on a web
     */
    uninstall(): Promise<void>;
    /**
     * This method allows an app which is already insatlled to be upgraded on a web
     */
    upgrade(): Promise<void>;
    /**
     * This method removes an app from the app catalog.  It must be called in the context
     * of the tenant app catalog web or it will fail.
     */
    remove(): Promise<void>;
}
export interface AppAddResult {
    data: any;
    file: File;
}
