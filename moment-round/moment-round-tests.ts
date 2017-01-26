import * as moment from 'moment';

var m = new moment(); // 2015-06-18 15:30:19
moment.round(5, 'seconds'); // 2015-06-18 15:30:20
moment.ceil(3, 'minutes'); // 2015-06-18 15:33:00
moment.floor(16, 'hours'); // 2015-06-18 00:00:00
moment.ceil(21, 'hours'); // 2015-06-18 21:00:00
moment.ceil(20, 'hours'); // 2015-06-19 00:00:00
