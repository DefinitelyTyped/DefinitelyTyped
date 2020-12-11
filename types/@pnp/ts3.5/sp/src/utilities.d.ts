import { SharePointQueryable } from "./sharepointqueryable";
import { EmailProperties } from "./types";
import { SPBatch } from "./batch";
import { ICachingOptions } from "@pnp/odata";
import { File } from "./files";
import { PrincipalInfo, PrincipalType, PrincipalSource, WikiPageCreationInformation } from "./types";
/**
 * Public interface for the utility methods to limit SharePointQueryable method exposure
 */
export interface UtilityMethods {
    usingCaching(options?: ICachingOptions): this;
    inBatch(batch: SPBatch): this;
    sendEmail(props: EmailProperties): Promise<void>;
    getCurrentUserEmailAddresses(): Promise<string>;
    resolvePrincipal(email: string, scopes: PrincipalType, sources: PrincipalSource, inputIsEmailOnly: boolean, addToUserInfoList: boolean, matchUserInfoList?: boolean): Promise<PrincipalInfo>;
    searchPrincipals(input: string, scopes: PrincipalType, sources: PrincipalSource, groupName: string, maxCount: number): Promise<PrincipalInfo[]>;
    createEmailBodyForInvitation(pageAddress: string): Promise<string>;
    expandGroupsToPrincipals(inputs: string[], maxCount?: number): Promise<PrincipalInfo[]>;
    createWikiPage(info: WikiPageCreationInformation): Promise<CreateWikiPageResult>;
    containsInvalidFileFolderChars(input: string, onPremise?: boolean): boolean;
    stripInvalidFileFolderChars(input: string, replacer?: string, onPremise?: boolean): string;
}
/**
 * Allows for calling of the static SP.Utilities.Utility methods by supplying the method name
 */
export declare class UtilityMethod extends SharePointQueryable implements UtilityMethods {
    private static readonly InvalidFileFolderNameCharsOnlineRegex;
    private static readonly InvalidFileFolderNameCharsOnPremiseRegex;
    /**
     * Creates a new instance of the Utility method class
     *
     * @param baseUrl The parent url provider
     * @param methodName The static method name to call on the utility class
     */
    constructor(baseUrl: string | SharePointQueryable, methodName: string);
    private static getBaseUrl;
    excute<T>(props: any): Promise<T>;
    /**
     * Sends an email based on the supplied properties
     *
     * @param props The properties of the email to send
     */
    sendEmail(props: EmailProperties): Promise<void>;
    getCurrentUserEmailAddresses(): Promise<string>;
    resolvePrincipal(input: string, scopes: PrincipalType, sources: PrincipalSource, inputIsEmailOnly: boolean, addToUserInfoList: boolean, matchUserInfoList?: boolean): Promise<PrincipalInfo>;
    searchPrincipals(input: string, scopes: PrincipalType, sources: PrincipalSource, groupName: string, maxCount: number): Promise<PrincipalInfo[]>;
    createEmailBodyForInvitation(pageAddress: string): Promise<string>;
    expandGroupsToPrincipals(inputs: string[], maxCount?: number): Promise<PrincipalInfo[]>;
    createWikiPage(info: WikiPageCreationInformation): Promise<CreateWikiPageResult>;
    /**
     * Checks if file or folder name contains invalid characters
     *
     * @param input File or folder name to check
     * @param onPremise Set to true for SharePoint On-Premise
     * @returns True if contains invalid chars, false otherwise
     */
    containsInvalidFileFolderChars(input: string, onPremise?: boolean): boolean;
    /**
     * Removes invalid characters from file or folder name
     *
     * @param input File or folder name
     * @param replacer Value that will replace invalid characters
     * @param onPremise Set to true for SharePoint On-Premise
     * @returns File or folder name with replaced invalid characters
     */
    stripInvalidFileFolderChars(input: string, replacer?: string, onPremise?: boolean): string;
}
export interface CreateWikiPageResult {
    data: any;
    file: File;
}
