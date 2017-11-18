import * as mockdate from 'mockdate';

mockdate.set(new Date());
mockdate.set('2017-01-05');
mockdate.set(new Date().getTime());

mockdate.set(new Date(), 0);

mockdate.reset();
