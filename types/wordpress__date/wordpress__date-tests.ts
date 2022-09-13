import * as moment from 'moment';
import * as date from '@wordpress/date';

//
// date
//

// $ExpectType string
date.date('l');

// $ExpectType string
date.date('l', new Date());

// $ExpectType string
date.date('l', '2019/01/01');

// $ExpectType string
date.date('l', 2019);

// $ExpectType string
date.date('l', [2019, '01', 1]);

// $ExpectType string
date.date('l', moment());

//
// dateI18n
//

// $ExpectType string
date.dateI18n('l');

// $ExpectType string
date.dateI18n('l', new Date());

// $ExpectType string
date.dateI18n('l', moment(), true);

//
// format
//

// $ExpectType string
date.format('l');

// $ExpectType string
date.format('l', '2019');

// $ExpectType string
date.format('l', moment());

//
// getDate
//

// $ExpectType Date
date.getDate();

// $ExpectType Date
date.getDate('2019');

// $ExpectType Date
date.getDate(new Date());

// $ExpectType Date
date.getDate(moment());

//
// gmdate
//

// $ExpectType string
date.gmdate('l');

// $ExpectType string
date.gmdate('l', '2019');

// $ExpectType string
date.gmdate('l', Date.now());

// $ExpectType string
date.gmdate('l', [2019]);

//
// isInTheFuture
//

// $ExpectType boolean
date.isInTheFuture('2019');

// $ExpectType boolean
date.isInTheFuture(Date.now());

// $ExpectType boolean
date.isInTheFuture(moment());

//
// setSettings
//

declare const settings: date.DateSettings;

// $ExpectType void
date.setSettings(settings);
