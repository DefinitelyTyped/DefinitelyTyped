import Cldr, { load } from 'cldr';

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
