import * as langmap from 'langmap';

// $ExpectType LanguageMappingList
langmap;

// $ExpectType Language
const value = langmap['en-US'];

// $ExpectType string
value.englishName;
// $ExpectType string
value.nativeName;
