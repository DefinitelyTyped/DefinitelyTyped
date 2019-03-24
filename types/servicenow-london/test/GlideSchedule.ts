(function() {
    var startDate = new GlideDateTime('2014-01-02');
    var days = 2;
    var dur = new GlideDuration(60 * 60 * 24 * 1000 * days);
    var schedule = new GlideSchedule();
    var end = schedule.add(startDate, dur);
    gs.info(end);
})();
(function() {
    var schedule = new GlideSchedule('090eecae0a0a0b260077e1dfa71da828', 'US/Pacific');
})();
(function() {
    var startDate = new GlideDateTime('2014-10-16 02:00:00');
    var endDate = new GlideDateTime('2014-10-18 04:00:00');
    var schedule = new GlideSchedule();

    schedule.load('090eecae0a0a0b260077e1dfa71da828'); // loads "8-5 weekdays excluding holidays" schedule
    var duration = schedule.duration(startDate, endDate);
    gs.info(duration.getDurationValue()); // gets the elapsed time in schedule
})();
(function() {
    var sys_id = '04e664654a36232701a2247dcd8fc4cf'; // sys_id for "Application" schedule record
    var sched = new GlideSchedule(sys_id);
    gs.info(sched.getName());
})();
(function() {
    var g = new GlideRecord('cmn_schedule');
    g.addQuery('type', 'blackout');
    g.query();
    if (g.next()) {
        var sched = new GlideSchedule(g.sys_id);
        var d = new GlideDateTime();
        d.setDisplayValue('2007-09-18 12:00:00');
        if (sched.isInSchedule(d)) gs.info('Is in the schedule');
        else gs.info('Is NOT in the schedule');
    }
})();
(function() {
    var g = new GlideRecord('cmn_schedule');
    g.addQuery('type', 'blackout');
    g.query();
    if (g.next()) {
        var sched = new GlideSchedule(g.sys_id);
        var d = new GlideDateTime();
        d.setDisplayValue('2007-09-18 12:00:00');
        if (sched.isValid()) gs.info('Is valid');
        else gs.info('Is not valid');
    }
})();
(function() {
    var x = new GlideSchedule();
    x.load('08fcd0830a0a0b2600079f56b1adb9ae');
})();
(function() {
    var schedule = new GlideSchedule();
    schedule.setTimeZone('US/Pacific');
})();
(function() {
    var startDate = new GlideDateTime('2014-10-25 08:00:00');
    var glideSchedule = new GlideSchedule('08fcd0830a0a0b2600079f56b1adb9ae', 'UTC');
    gs.info(glideSchedule.whenNext(startDate));
})();
