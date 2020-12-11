import { _SharePointQueryable, ISharePointQueryable } from "../sharepointqueryable";
import { ITypedHash } from "@pnp/common";
import { SPBatch } from "../batch";
import { ICachingOptions } from "@pnp/odata";
import { IPrincipalInfo, PrincipalType, PrincipalSource } from "../types";
import { IFile } from "../files/types";
export declare class _Utilities extends _SharePointQueryable implements IUtilities {
    constructor(baseUrl: string | ISharePointQueryable, methodName: string);
    excute<T>(props: any): Promise<T>;
    sendEmail(props: IEmailProperties): Promise<void>;
    getCurrentUserEmailAddresses(): Promise<string>;
    resolvePrincipal(input: string, scopes: PrincipalType, sources: PrincipalSource, inputIsEmailOnly: boolean, addToUserInfoList: boolean, matchUserInfoList?: boolean): Promise<IPrincipalInfo>;
    searchPrincipals(input: string, scopes: PrincipalType, sources: PrincipalSource, groupName: string, maxCount: number): Promise<IPrincipalInfo[]>;
    createEmailBodyForInvitation(pageAddress: string): Promise<string>;
    expandGroupsToPrincipals(inputs: string[], maxCount?: number): Promise<IPrincipalInfo[]>;
    createWikiPage(info: IWikiPageCreationInfo): Promise<ICreateWikiPageResult>;
}
/**
 * Describes the SharePoint utility methods
 */
export interface IUtilities {
    /**
     * Gives you the ability to cache returned data in an easy way.
     * @param options instance of ICachingOptions
     */
    usingCaching(options?: ICachingOptions): this;
    /**
     * Gives you the ability to batch multiple requests into a single request to SharePoint.
     * @param batch instance of SPBatch
     */
    inBatch(batch: SPBatch): this;
    /**
     * This methods will send an e-mail based on the incoming properties of the IEmailProperties parameter.
     * @param props IEmailProperties object
     */
    sendEmail(props: IEmailProperties): Promise<void>;
    /**
     * This method returns the current user's email addresses known to SharePoint.
     */
    getCurrentUserEmailAddresses(): Promise<string>;
    /**
     * Gets information about a principal that matches the specified Search criteria.
     * @param email E-mail address
     * @param scopes Specifies the type to be used when searching for a principal
     * @param sources Specifies the source to be used when searching for a principal.
     * @param inputIsEmailOnly Specifies whether only the e-mail address will be used when searching for a principal.
     * @param addToUserInfoList Specifies whether the user should be added to the hidden user info list.
     * @param matchUserInfoList [Optional] By default false
     */
    resolvePrincipal(email: string, scopes: PrincipalType, sources: PrincipalSource, inputIsEmailOnly: boolean, addToUserInfoList: boolean, matchUserInfoList?: boolean): Promise<IPrincipalInfo>;
    /**
    * Gets information about the principals that match the specified search criteria.
    * @param input Specifies the value to be used when searching for a principal.
    * @param scopes Specifies the type to be used when searching for a principal.
    * @param sources Specifies the source to be used when searching for a principal.
    * @param groupName Specifies the collection of users to be used when searching for a principal.
    * @param maxCount Specifies the maximum number of principals to be returned in the list.
    */
    searchPrincipals(input: string, scopes: PrincipalType, sources: PrincipalSource, groupName: string, maxCount: number): Promise<IPrincipalInfo[]>;
    /**
     * Gets the external (outside the firewall) URL to a document or resource in a site.
     * @param pageAddress Specifies the URI for the document or resource. It must be a URL.
     */
    createEmailBodyForInvitation(pageAddress: string): Promise<string>;
    /**
     * Resolves the principals contained within the supplied groups.
     * @param inputs A collection of groups to be expanded.
     * @param maxCount Specifies the maximum number of principals to be returned.
     */
    expandGroupsToPrincipals(inputs: string[], maxCount?: number): Promise<IPrincipalInfo[]>;
    /**
     * Creates a new Wiki page.
     * @param info Instance of IWikiPageCreationInfo.
     */
    createWikiPage(info: IWikiPageCreationInfo): Promise<ICreateWikiPageResult>;
}
export declare const Utilities: import("../sharepointqueryable").ISPInvokableFactory<IUtilities>;
export interface ICreateWikiPageResult {
    /**
     * The returned Wiki page represented by raw data.
     */
    data: any;
    /**
     * The returned Wiki page represented as a file which can be further updated.
     */
    file: IFile;
}
export interface IEmailProperties {
    /**
     * The list of receivers represented by a string array.
     */
    To: string[];
    /**
     * The list of receivers as CC (carbon copy) represented by a string array.
     * This is optional.
     */
    CC?: string[];
    /**
     * The list of receivers as BCC (blind carbon copy) represented by a string array.
     * This is optional.
     */
    BCC?: string[];
    /**
     * The subject of the email.
     */
    Subject: string;
    /**
     * The body of the email.
     */
    Body: string;
    /**
     * The additional headers appened to the request in key/value pairs.
     */
    AdditionalHeaders?: ITypedHash<string>;
    /**
     * The from address of the email.
     * This is optional.
     */
    From?: string;
}
export interface IWikiPageCreationInfo {
    /**
     * The server-relative-url of the wiki page to be created.
     */
    ServerRelativeUrl: string;
    /**
     * The wiki content to be set in the wiki page.
     */
    WikiHtmlContent: string;
}
//# sourceMappingURL=types.d.ts.map