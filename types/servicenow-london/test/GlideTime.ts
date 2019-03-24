(function() {
    var gt = new GlideTime();
    gs.info(gt.getDisplayValue());
})();
(function() {
    var gt = new GlideTime(10000);
    gs.info(gt.getDisplayValue());
})();
(function() {
    var gt = new GlideTime();
    gt.setValue('12:00:00');
    gs.info(gt.getByFormat('HH:mm'));
})();
(function() {
    var gt = new GlideTime();
    gt.setDisplayValue('12:00:00'); // User Time Zone
    gs.info(gt.getDisplayValue()); // User Time Zone
})();
(function() {
    var gt = new GlideTime();
    gt.setValue('01:00:00'); //Internal Time Zone , UTC
    gs.info(gt.getDisplayValueInternal()); //User Time Zone
})();
(function() {
    var gt = new GlideTime();
    gs.info(gt.getValue()); // Internal Time Zone, UTC
})();
(function() {
    var gt = new GlideTime();
    gt.setDisplayValue('01:00:00'); // User Time Zone
    gs.info(gt.getDisplayValueInternal()); // User Time Zone
})();
(function() {
    var gt = new GlideTime();
    gt.setValue('01:00:00'); //Internal Time Zone, UTC
    gs.info('time is ' + gt.getByFormat('hh:mm:ss'));
})();
(function() {
    var gd1 = new GlideTime();
    gd1.setDisplayValue('09:00:00');
    var gd2 = new GlideTime();
    gd2.setDisplayValue('09:10:00');

    var dur = GlideDate.subtract(gd1, gd2); //the difference between gdt1 and gdt2
    gs.info(dur.getDisplayValue());
})();
