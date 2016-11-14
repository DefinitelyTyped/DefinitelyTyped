/// <reference path="date-fns.d.ts" />

import {addDays, closestIndexTo, differenceInCalendarWeeks, max, isDate} from 'date-fns';
import * as addHours from 'date-fns/add_hours';

function test() {

  addDays(new Date(), 5);
  closestIndexTo(new Date(), [new Date(), new Date()]);
  addHours(new Date(), 5);
  differenceInCalendarWeeks(new Date(), new Date());
  differenceInCalendarWeeks(new Date(), new Date(), {weekStartsOn: 1});
  max(new Date(), new Date());
  isDate({});

}