import * as dateArithmetic from 'date-arithmetic';
import { Unit } from 'date-arithmetic';

const unit: Unit = 'week';
const unit2: Unit = 'seconds';

dateArithmetic.add(new Date(2010, 7, 23), 2, 'seconds');
dateArithmetic.add(new Date(2010, 7, 23), 2, 'minutes');
dateArithmetic.add(new Date(2010, 7, 23), 2, 'hours');
dateArithmetic.add(new Date(2010, 7, 23), 2, 'day');
dateArithmetic.add(new Date(2010, 7, 23), 2, 'week');
dateArithmetic.add(new Date(2010, 7, 23), 2, 'month');
dateArithmetic.add(new Date(2010, 7, 23), 2, 'year');
dateArithmetic.add(new Date(2010, 7, 23), 2, 'decade');
dateArithmetic.add(new Date(2010, 7, 23), 2, 'century');

dateArithmetic.subtract(new Date(2010, 7, 30), 1, 'seconds');
dateArithmetic.subtract(new Date(2010, 7, 29), 2, 'minutes');
dateArithmetic.subtract(new Date(2010, 7, 28), 3, 'hours');
dateArithmetic.subtract(new Date(2010, 7, 27), 4, 'day');
dateArithmetic.subtract(new Date(2010, 7, 26), 5, 'week');
dateArithmetic.subtract(new Date(2010, 7, 24), 6, 'month');
dateArithmetic.subtract(new Date(2010, 7, 23), 7, 'year');
dateArithmetic.subtract(new Date(2010, 7, 22), 8, 'decade');
dateArithmetic.subtract(new Date(2010, 7, 21), 9, 'century');

dateArithmetic.eq(new Date(), new Date());
dateArithmetic.neq(new Date(), new Date());
dateArithmetic.gt(new Date(), new Date());
dateArithmetic.gte(new Date(), new Date());
dateArithmetic.lt(new Date(), new Date());
dateArithmetic.lte(new Date(), new Date());

dateArithmetic.inRange(new Date(), new Date(), new Date());

dateArithmetic.startOf(new Date());
dateArithmetic.startOf(new Date(), 'hours');
dateArithmetic.startOf(new Date(), 'hours', 1);
dateArithmetic.endOf(new Date());
dateArithmetic.endOf(new Date(), 'month');
dateArithmetic.endOf(new Date(), 'month', 0);

dateArithmetic.min(new Date(), new Date());
dateArithmetic.min(new Date(), new Date(), new Date());
dateArithmetic.max(new Date(), new Date());
dateArithmetic.max(new Date(), new Date(), new Date());

dateArithmetic.diff(new Date(), new Date(), 'week');
dateArithmetic.diff(new Date(), new Date(), 'week', true);

dateArithmetic.milliseconds(new Date());
dateArithmetic.milliseconds(new Date(), 1);
dateArithmetic.seconds(new Date());
dateArithmetic.seconds(new Date(), 1);
dateArithmetic.minutes(new Date());
dateArithmetic.minutes(new Date(), 1);
dateArithmetic.hours(new Date());
dateArithmetic.hours(new Date(), 1);
dateArithmetic.date(new Date());
dateArithmetic.date(new Date(), 1);
dateArithmetic.day(new Date());
dateArithmetic.day(new Date(), 1);
dateArithmetic.weekday(new Date());
dateArithmetic.weekday(new Date(), 1);
dateArithmetic.month(new Date());
dateArithmetic.month(new Date(), 1);
dateArithmetic.year(new Date());
dateArithmetic.year(new Date());
dateArithmetic.decade(new Date(), 1);
dateArithmetic.decade(new Date(), 1);
dateArithmetic.century(new Date(), 1);
dateArithmetic.century(new Date(), 1);
