// Type definitions for SharePoint JSOM 
// Project: https://github.com/gandjustas/sptypescript
// Definitions by: Stanislav Vyshchepan <http://blog.gandjustas.ru>, Andrey Markeev <http://markeev.com>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="SP.d.ts"/>

declare namespace SP {

    export namespace Utilities {
        export class Utility {
            lAYOUTS_LATESTVERSION_RELATIVE_URL: string;
            lAYOUTS_LATESTVERSION_URL: string;
            static get_layoutsLatestVersionRelativeUrl(): string;
            static get_layoutsLatestVersionUrl(): string;
            static getLayoutsPageUrl(pageName: string): string;
            static getImageUrl(imageName: string): string;
            static createWikiPageInContextWeb(context: SP.ClientRuntimeContext, parameters: SP.Utilities.WikiPageCreationInformation): SP.File;
            static localizeWebPartGallery(context: SP.ClientRuntimeContext, items: SP.ListItemCollection): SP.ClientObjectList<SP.ListItem>;
            static getAppLicenseInformation(context: SP.ClientRuntimeContext, productId: SP.Guid): SP.AppLicenseCollection;
            static importAppLicense(context: SP.ClientRuntimeContext, licenseTokenToImport: string, contentMarket: string, billingMarket: string, appName: string, iconUrl: string, providerName: string, appSubtype: number): void;
            static getAppLicenseDeploymentId(context: SP.ClientRuntimeContext): SP.GuidResult;
            static logCustomAppError(context: SP.ClientRuntimeContext, error: string): SP.IntResult;
            static logCustomRemoteAppError(context: SP.ClientRuntimeContext, productId: SP.Guid, error: string): SP.IntResult;
            static getLocalizedString(context: SP.ClientRuntimeContext, source: string, defaultResourceFile: string, language: number): SP.StringResult;
            static createNewDiscussion(context: SP.ClientRuntimeContext, list: SP.List, title: string): SP.ListItem;
            static createNewDiscussionReply(context: SP.ClientRuntimeContext, parent: SP.ListItem): SP.ListItem;
            static markDiscussionAsFeatured(context: SP.ClientRuntimeContext, listID: string, topicIDs: string): void;
            static unmarkDiscussionAsFeatured(context: SP.ClientRuntimeContext, listID: string, topicIDs: string): void;
            static searchPrincipals(context: SP.ClientRuntimeContext, web: SP.Web, input: string, scopes: SP.Utilities.PrincipalType, sources: SP.Utilities.PrincipalSource, usersContainer: SP.UserCollection, maxCount: number): SP.Utilities.PrincipalInfo[];
            static getCurrentUserEmailAddresses(context: SP.ClientRuntimeContext): SP.StringResult;
            static createEmailBodyForInvitation(context: SP.ClientRuntimeContext, pageAddress: string): SP.StringResult;
            static getPeoplePickerURL(context: SP.ClientRuntimeContext, web: SP.Web, fieldUser: SP.FieldUser): SP.StringResult;
            static resolvePrincipal(context: SP.ClientRuntimeContext, web: SP.Web, input: string, scopes: SP.Utilities.PrincipalType, sources: SP.Utilities.PrincipalSource, usersContainer: SP.UserCollection, inputIsEmailOnly: boolean): SP.Utilities.PrincipalInfo;
            static getLowerCaseString(context: SP.ClientRuntimeContext, sourceValue: string, lcid: number): SP.StringResult;
            static formatDateTime(context: SP.ClientRuntimeContext, web: SP.Web, datetime: Date, format: SP.Utilities.DateTimeFormat): SP.StringResult;
            static isUserLicensedForEntityInContext(context: SP.ClientRuntimeContext, licensableEntity: string): SP.BooleanResult;
        }
        export enum DateTimeFormat {
            dateTime,
            dateOnly,
            timeOnly,
            iSO8601,
            monthDayOnly,
            monthYearOnly,
            longDate,
            unknownFormat,
        }
        export class EmailProperties extends SP.ClientValueObject {
            get_additionalHeaders(): any;
            set_additionalHeaders(value: any): void;
            get_bCC(): string[];
            set_bCC(value: string[]): void;
            get_body(): string;
            set_body(value: string): void;
            get_cC(): string[];
            set_cC(value: string[]): void;
            get_from(): string;
            set_from(value: string): void;
            get_subject(): string;
            set_subject(value: string): void;
            get_to(): string[];
            set_to(value: string[]): void;
            get_typeId(): string;
            writeToXml(writer: SP.XmlWriter, serializationContext: SP.SerializationContext): void;
            constructor();
        }
        export enum IconSize {
            size16,
            size32,
            size256,
        }
        export enum LogAppErrorResult {
            success,
            errorsThrottled,
            accessDenied,
        }
        export class PrincipalInfo extends SP.ClientValueObject {
            get_department(): string;
            get_displayName(): string;
            get_email(): string;
            get_jobTitle(): string;
            get_loginName(): string;
            get_mobile(): string;
            get_principalId(): number;
            get_principalType(): SP.Utilities.PrincipalType;
            get_sIPAddress(): string;
            get_typeId(): string;
            writeToXml(writer: SP.XmlWriter, serializationContext: SP.SerializationContext): void;
            constructor();
        }
        export enum PrincipalSource {
            none,
            userInfoList,
            windows,
            membershipProvider,
            roleProvider,
            all,
        }
        export enum PrincipalType {
            none,
            user,
            distributionList,
            securityGroup,
            sharePointGroup,
            all,
        }
        export enum SPWOPIFrameAction {
            view,
            edit,
            mobileView,
            interactivePreview,
        }
        export class WikiPageCreationInformation extends SP.ClientValueObject {
            get_serverRelativeUrl(): string;
            set_serverRelativeUrl(value: string): void;
            get_wikiHtmlContent(): string;
            set_wikiHtmlContent(value: string): void;
            get_typeId(): string;
            writeToXml(writer: SP.XmlWriter, serializationContext: SP.SerializationContext): void;
            constructor();
        }
        export class DateUtility {
            static isLeapYear(year: number): boolean;
            static dateToJulianDay(year: number, month: number, day: number): number;
            static julianDayToDate(julianDay: number): SP.DateTimeUtil.SimpleDate;
            static daysInMonth(year: number, month: number): number;
        }
        export class HttpUtility {
            /** Official version of STSHtmlEncode. Calls it internally. */
            static htmlEncode(stringToEncode: string): string;
            static urlPathEncode(stringToEncode: string): string;
            static urlKeyValueEncode(keyOrValueToEncode: string): string;
            static ecmaScriptStringLiteralEncode(scriptLiteralToEncode: string): string;
            static navigateTo(url: string): void;
            /** Appends correct "Source" parameter to the specified url, and then navigates to this url.
                "Source" parameter is recognized in many places in SharePoint, usually to determine "Cancel" behavior. */
            static appendSourceAndNavigateTo(url: string): void;
            static escapeXmlText(stringToEscape: string): string;
            static navigateHttpFolder(urlSrc: string, frameTarget: string): void;
        }
        export class UrlBuilder {
            constructor(path: string);
            static urlCombine(path1: string, path2: string): string;
            static replaceOrAddQueryString(url: string, key: string, value: string): string;
            static removeQueryString(url: string, key: string): string;
            combinePath(path: string): void;
            addKeyValueQueryString(key: string, value: string): void;
            /** Returns the resulting url */
            get_url(): string;
            /** Same as get_url() */
            toString(): string;
        }

        export class LocUtility {
            static getLocalizedCountValue(locText: string, intervals: string, count: number): string;
        }

        export class VersionUtility {
            static get_layoutsLatestVersionRelativeUrl(): string;
            static get_layoutsLatestVersionUrl(): string;
            static getLayoutsPageUrl(pageName: string): string;
            static getImageUrl(imageName: string): string;
        }

    }

    export namespace DateTimeUtil {
        export class SimpleDate {
            constructor(year: number, month: number, day: number, era: number);
            get_year(): number;
            set_year(value: number): void;
            get_month(): number;
            set_month(value: number): void;
            get_day(): number;
            set_day(value: number): void;
            get_era(): number;
            set_era(value: number): void;
            static dateEquals(date1: SimpleDate, date2: SimpleDate): boolean;
            static dateLessEqual(date1: SimpleDate, date2: SimpleDate): boolean;
            static dateGreaterEqual(date1: SimpleDate, date2: SimpleDate): boolean;
            static dateLess(date1: SimpleDate, date2: SimpleDate): boolean;
            static dateGreater(date1: SimpleDate, date2: SimpleDate): boolean;
        }
    }
}