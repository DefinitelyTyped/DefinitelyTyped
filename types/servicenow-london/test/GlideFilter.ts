(function() {
    var rec = new GlideRecord('incident');
    rec.query();
    var bool = true;

    while (rec.next()) {
        bool = GlideFilter.checkRecord(rec, 'active=true');
        gs.info('number ' + rec.number + ' is ' + bool);
    }
})();
