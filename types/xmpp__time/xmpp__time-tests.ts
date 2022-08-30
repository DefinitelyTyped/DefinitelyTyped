import { time, date, datetime, offset } from '@xmpp/time';

date(); // $ExpectType string
date('05 October 2011 14:48 UTC'); // $ExpectType string
date(new Date('05 October 2011 14:48 UTC')); // $ExpectType string

time(); // $ExpectType string
time('05 October 2011 14:48 UTC'); // $ExpectType string
time(new Date('05 October 2011 14:48 UTC')); // $ExpectType string

datetime(); // $ExpectType string
datetime('05 October 2011 14:48 UTC'); // $ExpectType string
datetime(new Date('05 October 2011 14:48 UTC')); // $ExpectType string

offset(); // $ExpectType string
offset('05 October 2011 14:48 UTC'); // $ExpectType string
offset(new Date('05 October 2011 14:48 UTC')); // $ExpectType string
