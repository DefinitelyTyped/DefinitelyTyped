import { Connection, Callback } from "../connection";

export class SoapApi {
    constructor(conn: Connection);

    convertLead(
        leadConverts: LeadConvert | LeadConvert[],
        callback?: Callback<LeadConvertResult | LeadConvertResult[]>,
    ): Promise<LeadConvertResult | LeadConvertResult[]>;

    describeTabs(callback?: Callback<DescribeTabSetResult[]>): Promise<DescribeTabSetResult[]>;

    emptyRecycleBin(ids: string[], callback?: Callback<EmptyRecycleBinResult[]>): Promise<EmptyRecycleBinResult[]>;

    getServerTimestamp(callback?: Callback<ServerTimestampResult>): Promise<ServerTimestampResult>;

    getUserInfo(callback?: Callback<UserInfoResult>): Promise<UserInfoResult>;

    merge(
        mergeRequests: MergeRequest | MergeRequest[],
        callback?: Callback<MergeResult | MergeResult[]>,
    ): Promise<MergeResult | MergeResult[]>;

    setPassword(userId: string, password: string, callback?: Callback<string>): Promise<ResetPasswordResult>;

    create(sObjects: Object[], callback?: Callback<SoapSaveResult>): Promise<SoapSaveResult>;

    update(sObjects: Object[], callback?: Callback<SoapSaveResult>): Promise<SoapSaveResult>;

    upsert(
        externalIdFieldName: string,
        sObjects: Object[],
        callback?: Callback<SoapUpsertResult>,
    ): Promise<SoapUpsertResult>;

    delete(ids: Object[], callback?: Callback<SoapDeleteResult>): Promise<SoapDeleteResult>;
}

export interface SoapDeleteResult {
    success: boolean;
    errors: Object[];
    id: string;
}

export interface SoapUpsertResult {
    created: boolean;
    success: boolean;
    errors: Object[];
    id: string;
}

export interface SoapSaveResult {
    success: boolean;
    errors: Object[];
    id: string;
}
export interface ResetPasswordResult {
    password: string;
}

export interface UserInfoResult {
    accessibilityMode: boolean;
    currencySymbol: string;
    orgAttachmentFileSizeLimit: number;
    orgDefaultCurrencyIsoCode: string;
    orgDisallowHtmlAttachments: string;
    orgHasPersonAccounts: boolean;
    organizationId: string;
    organizationMultiCurrency: boolean;
    organizationName: string;
    profileId: string;
    roleId: string;
    sessionSecondsValid: number;
    userDefaultCurrencyIsoCode: string;
    userEmail: string;
    userFullName: string;
    userId: string;
    userLanguage: string;
    userLocale: string;
    userName: string;
    userTimeZone: string;
    userType: string;
    userUiSkin: string;
}

export interface DescribeTabSetResult {
    label: string;
    logoUrl: string;
    namespace: string;
    selected: boolean;
    tabs: DescribeTab[];
}

export interface DescribeTab {
    colors: Object[];
    custom: boolean;
    iconUrl: Object[];
    icons: Object[];
    label: string;
    miniIconUrl: string;
    name: string;
    sobjectName: string;
    url: string;
}

export interface ServerTimestampResult {
    timestamp: string;
}

export interface LeadConvert {
    convertedStatus: string;
    leadId: string;
    accountId?: string;
    contactId?: string;
    doNotCreateOpportunity?: boolean;
    opportunityName?: string;
    overwriteLeadSource?: boolean;
    ownerId?: string;
    sendNotificationEmail?: boolean;
}

export interface LeadConvertResult {
    leadId: string;
    accountId?: string;

    contactId?: string;
    opportunityId?: string;
    success: boolean;
    errors: Object[];
}

export interface MergeRequest {
    masterRecord: Object;
    recordToMergeIds: string[];
}

export interface MergeResult {
    success: boolean;
    errors?: Object[];
    id: string;
    mergedRecordIds?: string[];
    updatedRelatedIds?: string[];
}

export interface EmptyRecycleBinResult {
    id: string;
    success: boolean;
    errors: Object[];
}
