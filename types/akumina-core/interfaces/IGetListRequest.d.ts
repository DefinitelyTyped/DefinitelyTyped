import ILanguageRequest from "./ILanguageRequest";

// eslint-disable-next-line @typescript-eslint/naming-convention
export default interface IGetListRequest {
    listName: string;
    selectFields: string;
    personaCheckRequired: boolean;
    isRoot: boolean;
    isHosted: boolean;
    hostUrl: string;
    viewXml: string;
    rowLimit: number;
    isPagedResult: boolean;
    language?: ILanguageRequest | undefined;
    queryFilter?: any;
    orderBy?: any;
    PageManager?: any;
    preloadCallback?: any;
    additionalSelectFields: string;
    contextSiteUrl: string;
    expandFields: string;
    postData: object;
}
