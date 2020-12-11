import { SPRest } from "@pnp/sp";
import { IWeb } from "@pnp/sp/webs";
import { ISite } from "@pnp/sp/sites";
export declare class SPRestAddIn extends SPRest {
    /**
     * Begins a cross-domain, host site scoped REST request, for use in add-in webs
     *
     * @param addInWebUrl The absolute url of the add-in web
     * @param hostWebUrl The absolute url of the host web
     */
    crossDomainSite(addInWebUrl: string, hostWebUrl: string): ISite;
    /**
     * Begins a cross-domain, host web scoped REST request, for use in add-in webs
     *
     * @param addInWebUrl The absolute url of the add-in web
     * @param hostWebUrl The absolute url of the host web
     */
    crossDomainWeb(addInWebUrl: string, hostWebUrl: string): IWeb;
    /**
     * Implements the creation of cross domain REST urls
     *
     * @param factory The constructor of the object to create Site | Web
     * @param addInWebUrl The absolute url of the add-in web
     * @param hostWebUrl The absolute url of the host web
     * @param urlPart String part to append to the url "site" | "web"
     */
    private _cdImpl;
}
export declare const sp: SPRestAddIn;
//# sourceMappingURL=sprestaddin.d.ts.map