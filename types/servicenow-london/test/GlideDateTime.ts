(function() {
    var gdt = new GlideDateTime('2011-08-31 08:00:00');
    var gtime1 = new GlideTime();
    gtime1.setValue('00:00:20');
    gdt.add(gtime1);
    var gtime2 = gdt.getTime();
    gs.info(gtime2.getByFormat('hh:mm:ss'));
    gdt.add(10);
    var start = new GlideDateTime('2011-01-01 12:00:00');
    var end = new GlideDateTime(start);
    gdt.addDaysLocalTime(-1);
    gdt.addDaysUTC(-1);
    gdt.addMonthsLocalTime(2);
    gdt.addMonthsUTC(2);
    gdt.addSeconds(1000);
    gdt.addWeeksLocalTime(-1);
    gdt.addWeeksUTC(-1);
    gdt.addYearsLocalTime(1);
    gdt.addYearsUTC(1);
    var gdt1 = new GlideDateTime('2016-05-09 10:11:12');
    var gdt2 = new GlideDateTime('2017-06-12 15:11:12');
    gs.info(gdt1.after(gdt2));
    gs.info(gdt1.before(gdt2));
    var initDate = new GlideDateTime('2011-08-01 12:00:00');
    var compDate1 = new GlideDateTime('2011-08-01 12:00:00');
    var compDate2 = new GlideDateTime('2011-07-31 12:00:00');
    var compDate3 = new GlideDateTime('2011-08-04 16:00:00');
    gs.info(initDate.compareTo(compDate1)); // Equals (0)
    gs.info(initDate.compareTo(compDate2)); // initDate is after compDate2 (1)
    gs.info(initDate.compareTo(compDate3)); // initDate is before compDate3 (-1)
    gs.info(gdt.equals('2011-09-30 00:12:01'));
    gs.info(gdt.getDate());
    gs.info(gdt.getValue());
    gs.info(gdt.getDayOfMonthLocalTime());
    gs.info(gdt.getDayOfMonthUTC());
    gs.info(gdt.getDayOfWeekLocalTime());
    gs.info(gdt.getDayOfWeekLocalTime());
    gs.info(gdt.getDaysInMonthLocalTime());
    gs.info(gdt.getDaysInMonthUTC());
    gs.info(gdt.getDisplayValue());
    gs.info(gdt.getDisplayValueInternal()); //uses current user session time zone (US/Pacific)
    gs.info(gdt.getDSTOffset()); //uses current user session time zone (US/Pacific)
    gdt.setDisplayValue('2011-aa-01 00:00:00');
    gs.info(gdt.getErrorMsg()); // Could not parse DateTime: 2011-aa-01 00:00:00
    gs.info(gdt.getLocalDate());
    var gt = gdt.getLocalTime();
    gs.info('local time is ' + gt.getByFormat('hh:mm:ss'));
    gs.info(gdt.getMonthLocalTime());
    gs.info(gdt.getMonthUTC());
    gs.info(gdt.getNumericValue());
    var gt = gdt.getTime();
    gs.info(gt.getByFormat('hh:mm:ss'));
    gdt.getLocalTime(); // PST local time
    gs.info(gdt.getTZOffset());
    gs.info(gdt.getValue());
    gs.info(gdt.getWeekOfYearLocalTime());
    gs.info(gdt.getWeekOfYearUTC());
    gs.info(gdt.getYearLocalTime());
    gs.info(gdt.getYearUTC());
    gs.info(gdt.hasDate());
    gs.info(gdt.isDST()); //true
    gdt.setDisplayValue('2011-aa-01 00:00:00');
    gs.info(gdt.isValid());
    var gdt1 = new GlideDateTime('2016-05-09 10:11:12');
    var gdt2 = new GlideDateTime('2017-06-12 15:11:12');
    gs.info(gdt1.onOrAfter(gdt2));
    gs.info(gdt1.onOrBefore(gdt2));
    gdt.setDayOfMonthLocalTime(9);
    gs.info(gdt.getDayOfMonthLocalTime());
    gdt.setDayOfMonthUTC(9);
    gs.info(gdt.getDayOfMonthUTC());
    gdt.setDisplayValue('2014-01-01 12:00:00');
    gdt.setDisplayValue('20-5-2011 12:00:00', 'dd-MM-yyyy HH:mm:ss');
    gdt.setDisplayValueInternal('2014-01-01 12:00:00');
    var dt1 = new GlideDateTime('2011-01-01 12:00:00');
    var dt2 = new GlideDateTime('2011-02-02 08:00:00');
    dt1.setGlideDateTime(dt2);
    gdt.setMonthLocalTime(1);
    gs.info(gdt.getMonthLocalTime());
    gdt.setMonthUTC(1);
    gs.info(gdt.getMonthUTC());
    gdt.setValue('2011-02-02 08:00:00'); // value set =  2011-02-02 08:00:00
    gdt.setValueUTC('15-02-2011 08:00:00', 'dd-MM-yyyy HH:mm:ss');
    gdt.setYearLocalTime(2013);
    gs.info(gdt.getYearLocalTime());
    gdt.setYearUTC(2013);
    gs.info(gdt.getYearUTC());
    var gdt1 = new GlideDateTime('2011-08-28 09:00:00');
    var gdt2 = new GlideDateTime('2011-08-31 08:00:00');
    var dur = GlideDateTime.subtract(gdt1, gdt2); //the difference between gdt1 and gdt2
    gs.info(dur.getDisplayValue());
    var gtime1 = new GlideTime();
    gtime1.setValue('00:00:20');
    gdt.subtract(gtime1);
    var gtime2 = gdt.getTime();
    gs.info(gtime2.getByFormat('hh:mm:ss'));
    var gdt = new GlideDateTime('2011-12-07 08:00:00');
    gdt.subtract(1000);
    gs.info(gdt.toString());
})();
