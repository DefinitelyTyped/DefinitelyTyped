/// <reference types="node" />

import Cldr, {
  load,
  WindowsZone,
  Finder,
  Alias,
  CurrencyInfo,
  KeyType,
  NumberingSystem,
  WeekData,
} from 'cldr';

import { promisify } from 'util';

// $ExpectType Cldr
load('/path/to/cldr');

// $ExpectType void
Cldr.checkValidLocaleId('localeId');

// $ExpectType Partial<Record<string, string>>
Cldr.extractTextToSpeechCharacterLabels('localeId');

// $ExpectType Partial<Record<string, string>>
Cldr.extractTextToSpeechCharacterLabels();

// $ExpectType Partial<Record<string, string>>
Cldr.extractDerivedTextToSpeechCharacterLabels('localeId');

// $ExpectType Partial<Record<string, string>>
Cldr.extractDerivedTextToSpeechCharacterLabels();

// $ExpectType Partial<Record<string, string>>
Cldr.extractAllTextToSpeechCharacterLabels('localeId');

// $ExpectType Partial<Record<string, string>>
Cldr.extractAllTextToSpeechCharacterLabels();

// $ExpectType Partial<Record<string, Document>>
Cldr.documentByFileName;

// $ExpectType string
Cldr.cldrPath;

// $ExpectType Partial<Record<string, string>>
Cldr.fileNamesByTypeAndNormalizedLocaleId('localeid');

// $ExpectType string[]
Cldr.localeIds;

// $ExpectType Set<string>
Cldr.localeIdsSet;

// $ExpectType string[]
Cldr.calendarIds;

// $ExpectType string[]
Cldr.numberSystemIds;

// $ExpectType Partial<Record<string, string[]>>
Cldr.localesByParentLocale;

// $ExpectType WindowsZone[]
Cldr.windowsZonesByMapZone;

// $ExpectType void
Cldr.getDocument('filename', (error: Error | null, document: Document) => {});

// $ExpectType Document
Cldr.getDocument('filename');

// $ExpectType (arg1: string) => Promise<Document>
promisify(Cldr.getDocument);

// $ExpectType string
Cldr.resolveParentLocaleId('localeid');

// $ExpectType WindowsZone[]
Cldr.extractWindowsZonesByTimeZone('timezone');

// $ExpectType WindowsZone[]
Cldr.extractWindowsZonesByName('name');

// $ExpectType string[]
Cldr.expandLocaleIdToPrioritizedList('localeid');

// $ExpectType Document[]
Cldr.getPrioritizedDocumentsForLocale('localeid', 'type');

// $ExpectType void
Cldr.preload((error: Error | undefined) => {});

// $ExpectType void
Cldr.preload(['localeid'], (error: Error | undefined) => {});

// $ExpectType () => Promise<void>
promisify(Cldr.preload);

// $ExpectType (arg1: string[]) => Promise<void>
promisify<string[]>(Cldr.preload);

// $ExpectType Finder
Cldr.createFinder(Cldr.getPrioritizedDocumentsForLocale('localeid', 'type'));

// $ExpectType Partial<Record<string, string>>
Cldr.extractLocaleDisplayPattern('localeid');

// $ExpectType Partial<Record<string, string>>
Cldr.extractLanguageDisplayNames('localeid');

// $ExpectType Partial<Record<string, string>>
Cldr.extractTimeZoneDisplayNames('localeid');

// $ExpectType Partial<Record<string, string>>
Cldr.extractTimeZoneFormats('localeid');

// $ExpectType Partial<Record<string, string>>
Cldr.extractTerritoryDisplayNames('localeid');

// $ExpectType Partial<Record<string, string>>
Cldr.extractSubdivisionDisplayNames('localeid');

// $ExpectType Partial<Record<string, Alias>>
Cldr.extractSubdivisionAliases();

// $ExpectType Partial<Record<string, Alias>>
Cldr.extractTerritoryAliases();

// $ExpectType Partial<Record<string, CurrencyInfo>>
Cldr.extractCurrencyInfoById('localeid');

// $ExpectType Partial<Record<string, string>>
Cldr.extractScriptDisplayNames('localeid');

// $ExpectType Partial<Record<string, string>>
Cldr.extractVariantDisplayNames('localeid');

// $ExpectType Partial<Record<string, KeyType>>
Cldr.extractKeyTypes('localeid');

// $ExpectType Partial<Record<string, string>>
Cldr.extractMeasurementSystemNames('localeid');

// $ExpectType Partial<Record<string, string>>
Cldr.extractCodePatterns('localeid');

// $ExpectType object
Cldr.extractEraNames('localeid', 'calendarid');

// $ExpectType object
Cldr.extractQuarterNames('localeid', 'calendarid');

// $ExpectType object
Cldr.extractDayPeriods('localeid', 'calendarid');

// $ExpectType object
Cldr.extractCyclicNames('localeid', 'calendarid');

// $ExpectType object
Cldr.extractMonthNames('localeid', 'calendarid');

// $ExpectType object
Cldr.extractMonthPatterns('localeid', 'calendarid');

// $ExpectType object
Cldr.extractDayNames('localeid', 'calendarid');

// $ExpectType object
Cldr.extractFields('localeid');

// $ExpectType object
Cldr.extractDateTimePatterns('localeid', 'calendarid');

// $ExpectType Partial<Record<string, string>>
Cldr.extractDateOrTimeFormats('localeid', 'calendarid', 'date');

// $ExpectType Partial<Record<string, string>>
Cldr.extractDateOrTimeFormats('localeid', undefined, 'date');

// $ExpectType Partial<Record<string, string>>
Cldr.extractDateOrTimeFormats('localeid', 'calendarid', 'time');

// $ExpectType Partial<Record<string, string>>
Cldr.extractDateOrTimeFormats('localeid', undefined, 'time');

// $ExpectType Partial<Record<string, string>>
Cldr.extractDateFormats('localeid', 'calendarid');

// $ExpectType Partial<Record<string, string>>
Cldr.extractTimeFormats('localeid', 'calendarid');

// $ExpectType Partial<Record<string, string>>
Cldr.extractDateFormatItems('localeid', 'calendarid');

// $ExpectType Partial<Record<string, string>>
Cldr.extractDateIntervalFormats('localeid', 'calendarid');

// $ExpectType Partial<Record<string, string>>
Cldr.extractDateIntervalFallbackFormat('localeid', 'calendarid');

// $ExpectType Partial<Record<string, string>>
Cldr.extractNumberSymbols('localeid', 'numbersystemid');

// $ExpectType object
Cldr.extractNumberFormats('localeid', 'numbersystemid');

// $ExpectType Partial<Record<string, string>>
Cldr.extractDefaultNumberSystemId('localeid');

// $ExpectType object
Cldr.extractUnitPatterns('localeid');

// $ExpectType Partial<Record<string, string>>
Cldr.extractDelimiters('localeid');

// $ExpectType object
Cldr.extractListPatterns('localeid');

// $ExpectType object
Cldr.extractCharacters('localeid');

// $ExpectType object
Cldr.extractPluralClasses('localeid', 'cardinal');

// $ExpectType object
Cldr.extractPluralClasses('localeid', 'ordinal');

// $ExpectType any
Cldr.extractPluralRuleFunction('localeid', 'cardinal');

// $ExpectType any
Cldr.extractPluralRuleFunction('localeid', 'ordinal');

// $ExpectType object
Cldr.extractRbnfFunctionByType('localeid');

// $ExpectType object
Cldr.extractRbnfFunctionByType('localeid', ['typeid']);

// $ExpectType NumberingSystem
Cldr.extractNumberingSystem('numberingsystemid');

// $ExpectType object
Cldr.extractLayout('localeid');

// $ExpectType object
Cldr.extractTerritories();

// $ExpectType object
Cldr.extractTerritoryInfo();

// $ExpectType object
Cldr.extractTerritoryContainmentGroups();

// $ExpectType object
Cldr.extractSubdivisionContainmentGroups();

// $ExpectType object
Cldr.extractLanguageSupplementalData();

// $ExpectType Partial<Record<string, Alias>>
Cldr.extractLanguageSupplementalMetadata();

// $ExpectType WeekData
Cldr.extractWeekData();
