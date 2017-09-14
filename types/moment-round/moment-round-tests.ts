import * as moment from 'moment';

const m = moment();
m.round(5, 'seconds');
m.ceil(3, 'minutes');
m.floor(16, 'hours');
m.ceil(21, 'hours');
m.ceil(20, 'hours');
