import { ISharePointQueryable, _SharePointQueryableInstance, _SharePointQueryableCollection } from "../sharepointqueryable";
import { IFile } from "../files/types";
import "../items";
export declare class _AppCatalog extends _SharePointQueryableCollection {
    constructor(baseUrl: string | ISharePointQueryable, path?: string);
    /**
     * Get details of specific app from the app catalog
     * @param id - Specify the guid of the app
     */
    getAppById(id: string): IApp;
    /**
     * Synchronize a solution to the Microsoft Teams App Catalog
     * @param id - Specify the guid of the app
     * @param useSharePointItemId (optional) - By default this REST call requires the SP Item id of the app, not the app id.
     *                            PnPjs will try to fetch the item id by default, you can still use this parameter to pass your own item id in the first parameter
     */
    syncSolutionToTeams(id: string | number, useSharePointItemId?: boolean): Promise<void>;
    /**
     * Uploads an app package. Not supported for batching
     *
     * @param filename Filename to create.
     * @param content app package data (eg: the .app or .sppkg file).
     * @param shouldOverWrite Should an app with the same name in the same location be overwritten? (default: true)
     * @returns Promise<IAppAddResult>
     */
    add(filename: string, content: string | ArrayBuffer | Blob, shouldOverWrite?: boolean): Promise<IAppAddResult>;
}
export interface IAppCatalog extends _AppCatalog {
}
export declare const AppCatalog: import("../sharepointqueryable").ISPInvokableFactory<IAppCatalog>;
export declare class _App extends _SharePointQueryableInstance {
    /**
     * This method deploys an app on the app catalog. It must be called in the context
     * of the tenant app catalog web or it will fail.
     *
     * @param skipFeatureDeployment Deploy the app to the entire tenant
     */
    deploy(skipFeatureDeployment?: boolean): Promise<void>;
    /**
     * This method retracts a deployed app on the app catalog. It must be called in the context
     * of the tenant app catalog web or it will fail.
     */
    retract(): Promise<void>;
    /**
     * This method allows an app which is already deployed to be installed on a web
     */
    install(): Promise<void>;
    /**
     * This method allows an app which is already installed to be uninstalled on a web
     * Note: when you use the REST API to uninstall a solution package from the site, it is not relocated to the recycle bin
     */
    uninstall(): Promise<void>;
    /**
     * This method allows an app which is already installed to be upgraded on a web
     */
    upgrade(): Promise<void>;
    /**
     * This method removes an app from the app catalog. It must be called in the context
     * of the tenant app catalog web or it will fail.
     */
    remove(): Promise<void>;
    private do;
}
export interface IApp extends _App {
}
export declare const App: import("../sharepointqueryable").ISPInvokableFactory<IApp>;
/**
 * Result object after adding an app
 */
export interface IAppAddResult {
    /**
     * Contains metadata of the added app
     */
    data: any;
    /**
     * A File instance to the item in SharePoint
     */
    file: IFile;
}
//# sourceMappingURL=types.d.ts.map