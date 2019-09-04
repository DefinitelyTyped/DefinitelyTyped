import ILanguageRequest from "./ILanguageRequest";

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
    language?: ILanguageRequest;
    queryFilter?: any;
    orderBy?: any;
    PageManager?: any;
    preloadCallback?: any;
    additionalSelectFields: string;
    contextSiteUrl: string;
    expandFields: string;
    postData: object;
}
