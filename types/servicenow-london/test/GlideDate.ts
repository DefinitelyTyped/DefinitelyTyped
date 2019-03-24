(function() {
    var gd = new GlideDate();
    gs.info(gd.getByFormat('dd-MM-yyyy'));
    gs.info(gd.getDayOfMonthNoTZ());
    gs.info(gd.getDisplayValue());
    gs.info(gd.getDisplayValueInternal());
    gs.info(gd.getMonthNoTZ());
    gs.info(gd.getValue());
    gs.info(gd.getYearNoTZ());
    gd.setDisplayValue('2011-01-01');
    gd.setValue('2015-01-01');
    var sgd1 = new GlideDate();
    sgd1.setDisplayValue('2014-07-18');
    var sgd2 = new GlideDate();
    sgd2.setDisplayValue('2014-07-19');
    var duration = GlideDate.subtract(sgd1, sgd2);
    gs.info(duration.getDisplayValue());
})();
