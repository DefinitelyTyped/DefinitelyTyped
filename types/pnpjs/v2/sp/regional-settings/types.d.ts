import { _SharePointQueryableInstance, ISharePointQueryableCollection, _SharePointQueryableCollection } from "../sharepointqueryable";
export declare class _RegionalSettings extends _SharePointQueryableInstance<IRegionalSettingsInfo> {
    /**
     * Gets the collection of languages used in a server farm.
     * ** Please use getInstalledLanguages instead of this method **
     */
    get installedLanguages(): ISharePointQueryableCollection<{
        Items: IInstalledLanguageInfo[];
    }>;
    /**
     * Gets time zone
     */
    get timeZone(): ITimeZone;
    /**
     * Gets time zones
     */
    get timeZones(): ITimeZones;
    /**
     * Gets the collection of languages used in a server farm.
     */
    getInstalledLanguages(): Promise<IInstalledLanguageInfo[]>;
}
export interface IRegionalSettings extends _RegionalSettings {
}
export declare const RegionalSettings: import("../sharepointqueryable").ISPInvokableFactory<IRegionalSettings>;
export declare class _TimeZone extends _SharePointQueryableInstance<ITimeZoneInfo> {
    /**
     * Gets an Local Time by UTC Time
     *
     * @param utcTime UTC Time as Date or ISO String
     */
    utcToLocalTime(utcTime: string | Date): Promise<string>;
    /**
     * Gets an UTC Time by Local Time
     *
     * @param localTime Local Time as Date or ISO String
     */
    localTimeToUTC(localTime: string | Date): Promise<string>;
}
export interface ITimeZone extends _TimeZone {
}
export declare const TimeZone: import("../sharepointqueryable").ISPInvokableFactory<ITimeZone>;
export declare class _TimeZones extends _SharePointQueryableCollection<ITimeZoneInfo[]> {
    /**
     * Gets an TimeZone by id (see: https://msdn.microsoft.com/en-us/library/office/jj247008.aspx)
     *
     * @param id The integer id of the timezone to retrieve
     */
    getById(id: number): Promise<ITimeZone & ITimeZoneInfo>;
}
export interface ITimeZones extends _TimeZones {
}
export declare const TimeZones: import("../sharepointqueryable").ISPInvokableFactory<ITimeZones>;
/**
 * This is the data for Regional Settings
 */
export interface IRegionalSettingsInfo {
    AdjustHijriDays: number;
    AlternateCalendarType: number;
    AM: string;
    CalendarType: number;
    Collation: number;
    CollationLCID: number;
    DateFormat: number;
    DateSeparator: string;
    DecimalSeparator: string;
    DigitGrouping: string;
    FirstDayOfWeek: number;
    FirstWeekOfYear: number;
    IsEastAsia: boolean;
    IsRightToLeft: boolean;
    IsUIRightToLeft: boolean;
    ListSeparator: string;
    LocaleId: number;
    NegativeSign: string;
    NegNumberMode: number;
    PM: string;
    PositiveSign: string;
    ShowWeeks: boolean;
    ThousandSeparator: string;
    Time24: boolean;
    TimeMarkerPosition: number;
    TimeSeparator: string;
    WorkDayEndHour: number;
    WorkDays: number;
    WorkDayStartHour: number;
}
export interface IInstalledLanguageInfo {
    DisplayName: string;
    LanguageTag: string;
    Lcid: number;
}
export interface ITimeZoneInfo {
    Description: string;
    Id: number;
    Information: {
        Bias: number;
        DaylightBias: number;
        StandardBias: number;
    };
}
export interface IUserResources {
    /**
     * Gets the resource string for the title
     */
    titleResource(cultureName: string): Promise<string>;
    /**
     * Gets the resource string for the title description
     */
    descriptionResource(cultureName: string): Promise<string>;
}
//# sourceMappingURL=types.d.ts.map