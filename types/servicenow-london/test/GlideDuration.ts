(function() {
    var duration = new GlideDuration('3 12:00:00');
    var duration2 = new GlideDuration('3:00:00');
    var answer = duration.add(duration2);
    gs.info(answer.getDisplayValue());
})();
(function() {
    var dur = new GlideDuration('3 22:00:00');
    gs.info(dur.getByFormat('HH:mm'));
})();
(function() {
    var dur = new GlideDuration('3 12:00:00');
    gs.info(dur.getDayPart());
})();
(function() {
    var dur = new GlideDuration('3 12:00:00');
    gs.info(dur.getDisplayValue());
})();
(function() {
    var dur = new GlideDuration('3 12:00:00');
    gs.info(dur.getDurationValue());
})();
(function() {
    var dur = new GlideDuration('3 11:00:00');
    gs.info(dur.getRoundedDayPart());
})();
(function() {
    var dur = new GlideDuration('3 12:00:00');
    gs.info(dur.getValue());
})();
(function() {
    var dur = new GlideDuration();
    dur.setDisplayValue('3 08:00:00');
    gs.info(dur.getDisplayValue());
})();
(function() {
    var dur = new GlideDuration();
    dur.setValue('1970-01-05 08:00:00'); // sets internal DateTime value. The String will be parsed into a GlideDateTime object.
    gs.info(dur.getDisplayValue());
})();
(function() {
    var duration = new GlideDuration('3 12:00:00');
    var duration2 = new GlideDuration('3:00:00');
    var answer = duration.subtract(duration2);
    gs.info(answer.getDisplayValue());
})();
