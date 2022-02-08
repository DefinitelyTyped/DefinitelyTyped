// Type definitions for cldr 7.1
// Project: https://github.com/papandreou/node-cldr
// Definitions by: Chris Wilkinson <https://github.com/thewilkybarkid>
//                 Jesse Plymale <https://github.com/jesseplymale>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
/// <reference lib="dom" />

export interface WindowsZone {
    name: string;
    territory: string;
    timeZone: string;
}

export interface Finder {
    (xpathQuery: string): Node[];
}

type PartialStringRecord = Partial<Record<string, string>>;

export interface Alias {
    replacement: string;
    reason: string;
}

export interface CurrencyInfo {
    displayName: string;
    symbol: string;
    one: string;
    other: string;
}

export interface KeyType {
    displayName: string;
    types: PartialStringRecord;
}

type CardinalOrOrdinal = 'cardinal' | 'ordinal';

export interface NumberingSystem {
    type: string;
    digits?: string[];
    rules?: any;
    locale?: string;
}

export interface WeekData {
    minDays: any[];
    firstDay: any[];
    weekendStart: any[];
    weekendEnd: any[];
    weekOfPreference: any[];
}

declare class Cldr {
    // TODO add remaining properties and methods

    documentByFileName: Partial<Record<string, Document>>;

    cldrPath: string;

    fileNamesByTypeAndNormalizedLocaleId(type: string): PartialStringRecord;

    readonly localeIds: string[];

    readonly localeIdsSet: Set<string>;

    readonly calendarIds: string[];

    readonly numberSystemIds: string[];

    readonly localesByParentLocale: Partial<Record<string, string[]>>;

    readonly windowsZonesByMapZone: WindowsZone[];

    getDocument(fileName: string): Document;
    getDocument(fileName: string, cb: (err: null | Error, document: Document) => void): void;

    resolveParentLocaleId(localeId: string): string;

    extractWindowsZonesByTimeZone(timeZone: string): WindowsZone[];

    extractWindowsZonesByName(name: string): WindowsZone[];

    expandLocaleIdToPrioritizedList(localeId: string): string[];

    getPrioritizedDocumentsForLocale(localeId: string, type: string): Document[];

    preload(cb: (err: undefined | Error) => void): void;
    preload(localeIds: string[], cb: (err: undefined | Error) => void): void;

    createFinder(prioritizedDocuments: Document[]): Finder;

    extractLocaleDisplayPattern(localeId: string): PartialStringRecord;

    extractLanguageDisplayNames(localeId: string): PartialStringRecord;

    extractTimeZoneDisplayNames(localeId: string): PartialStringRecord;

    extractTimeZoneFormats(localeId: string): PartialStringRecord;

    extractTerritoryDisplayNames(localeId: string): PartialStringRecord;

    extractSubdivisionDisplayNames(localeId: string): PartialStringRecord;

    extractSubdivisionAliases(): Partial<Record<string, Alias>>;

    extractTerritoryAliases(): Partial<Record<string, Alias>>;

    extractCurrencyInfoById(localeId: string): Partial<Record<string, CurrencyInfo>>;

    extractScriptDisplayNames(localeId: string): PartialStringRecord;

    extractVariantDisplayNames(localeId: string): PartialStringRecord;

    extractKeyTypes(localeId: string): Partial<Record<string, KeyType>>;

    extractMeasurementSystemNames(localeId: string): PartialStringRecord;

    extractCodePatterns(localeId: string): PartialStringRecord;

    extractEraNames(localeId: string, calendarId?: string): object;

    extractQuarterNames(localeId: string, calendarId?: string): object;

    extractDayPeriods(localeId: string, calendarId?: string): object;

    extractCyclicNames(localeId: string, calendarId?: string): object;

    extractMonthNames(localeId: string, calendarId?: string): object;

    extractMonthPatterns(localeId: string, calendarId?: string): object;

    extractDayNames(localeId: string, calendarId?: string): object;

    extractFields(localeId: string): object;

    extractDateTimePatterns(localeId: string, calendarId?: string): object;

    extractDateOrTimeFormats(localeId: string, calendarId: string | undefined, dateOrTime: 'date' | 'time'): PartialStringRecord;

    extractDateFormats(localeId: string, calendarId?: string): PartialStringRecord;

    extractTimeFormats(localeId: string, calendarId?: string): PartialStringRecord;

    extractDateFormatItems(localeId: string, calendarId?: string): PartialStringRecord;

    extractDateIntervalFormats(localeId: string, calendarId?: string): PartialStringRecord;

    extractDateIntervalFallbackFormat(localeId: string, calendarId?: string): PartialStringRecord;

    extractNumberSymbols(localeId: string, numberSystemId?: string): PartialStringRecord;

    extractNumberFormats(localeId: string, numberSystemId?: string): object;

    extractDefaultNumberSystemId(localeId: string): PartialStringRecord;

    extractUnitPatterns(localeId: string): object;

    extractDelimiters(localeId: string): PartialStringRecord;

    extractListPatterns(localeId: string): object;

    extractCharacters(localeId: string): object;

    extractPluralClasses(localeId: string, cardinalOrOrdinal: CardinalOrOrdinal): object;

    extractPluralRuleFunction(localeId: string, cardinalOrOrdinal: CardinalOrOrdinal): any;

    extractRbnfFunctionByType(localeId: string, types?: string[]): object;

    extractNumberingSystem(numberingSystemId: string): NumberingSystem;

    extractLayout(localeId: string): object;

    extractTerritories(): object;

    extractTerritoryInfo(): object;

    extractTerritoryContainmentGroups(): object;

    extractSubdivisionContainmentGroups(): object;

    extractLanguageSupplementalData(): object;

    extractLanguageSupplementalMetadata(): Partial<Record<string, Alias>>;

    extractWeekData(): WeekData;

    checkValidLocaleId(localeId: string): void;

    extractTextToSpeechCharacterLabels(localeId?: string): PartialStringRecord;

    extractDerivedTextToSpeechCharacterLabels(localeId?: string): PartialStringRecord;

    extractAllTextToSpeechCharacterLabels(localeId?: string): PartialStringRecord;
}

declare const cldr: Cldr;

export default cldr;

export function load(cldrPath: string): Cldr;
