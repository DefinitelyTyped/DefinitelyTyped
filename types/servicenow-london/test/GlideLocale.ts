(function() {
    var locale = GlideLocale.get();
})();
(function() {
    var locale = GlideLocale.get();
    var decimalSeparator = locale.getDecimalSeparator();
    gs.info('The decimal separator is ' + decimalSeparator);
    // The decimal separator is .
})();
(function() {
    var locale = GlideLocale.get();
    var groupingSeparator = locale.getGroupingSeparator();
    gs.info('The grouping separator is ' + groupingSeparator);
    // The grouping separator is ,
})();
