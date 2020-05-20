// tslint:disable:no-duplicate-imports

import langmap1 from 'langmap';
import * as langmap2 from 'langmap';

const val1 = langmap1['en-US']; // { nativeName: string, englishName: string }
const val2 = langmap2['en-US']; // { nativeName: string, englishName: string }

val1.englishName;
val1.nativeName;

val2.englishName;
val2.nativeName;
