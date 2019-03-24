(function() {
    email.addAddress('cc', 'joe.employee@something.com');
})();
(function() {
    email.addAddress('bcc', 'joe.employee@something.com', 'dudley rocks');
})();
(function() {
    var watermark = email.getWatermark();
})();
(function() {
    email.setBody('Dear Sir, ...');
})();
(function() {
    email.setFrom('joe.employee@something.com');
})();
(function() {
    email.setReplyTo('joe.employee@something.com');
})();
(function() {
    email.setSubject('Important Issues to discuss');
})();
