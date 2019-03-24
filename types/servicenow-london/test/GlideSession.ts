(function() {
    var session = gs.getSession();
    session.putClientData('test1', 'Harry');
    var clientData = session.getClientData('test1');
    gs.info(clientData);
    // Harry
})();
(function() {
    var session = gs.getSession();
    var addr = session.getClientIP();
    gs.info(addr);
})();
(function() {
    var session = gs.getSession();
    var appID = session.getCurrentApplicationId();
    gs.info(appID);
    // ce05b9f32b840200c5244f74b4da1501
})();
(function() {
    var session = gs.getSession();
    var language = session.getLanguage();
    gs.info(language);
    // en
})();
(function() {
    var session = gs.getSession();
    var token = session.getSessionToken();
    gs.info(token);
    // 4284b5372b840200c5244f74b4da15f2c3476cf7fcb6572afa4ef9d5e6d307a5fd9e1da7
})();
(function() {
    var session = gs.getSession();
    var zoneName = session.getTimeZoneName();
    gs.info(zoneName);
    // US/Pacific
})();
(function() {
    var session = gs.getSession();
    var URL = session.getUrlOnStack();
    gs.info(URL);
    // sys_app.do?sys_id=ce05b9f32b840200c5244f74b4da1501&sysparm_goto_url=sys_app.do
    // %3Fsys_id%3Dce05b9f32b840200c5244f74b4da1501
})();
(function() {
    var isImpersonator = gs.getSession().isImpersonating();
    gs.info(isImpersonator);
})();
(function() {
    var interActive = gs.getSession().isInteractive();
    gs.info(interActive);
})();
(function() {
    var session = gs.getSession();
    var loggedIn = session.isLoggedIn();
    gs.info(loggedIn);
    // true
})();
(function() {
    var session = gs.getSession();
    session.putClientData('test1', 'Harry');
    var clientData = session.getClientData('test1');
    gs.info(clientData);
    // Harry
})();
