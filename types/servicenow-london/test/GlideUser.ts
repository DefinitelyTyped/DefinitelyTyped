(function() {
    var currentUser = gs.getUser();
    gs.info(currentUser.getCompanyID());
})();
(function() {
    var currentUser = gs.getUser();
    gs.info(currentUser.getDisplayName());
})();
(function() {
    var domain = new GlideRecord('domain');
    domain.get(gs.getUser().getDomainID());
    gs.info(domain.name);
})();
(function() {
    var currentUser = gs.getUser();
    gs.info(currentUser.getEmail());
})();
(function() {
    var currentUser = gs.getUser();
    gs.info(currentUser.getFirstName());
})();
(function() {
    var currentUser = gs.getUser();
    gs.info(currentUser.getID());
})();
(function() {
    var currentUser = gs.getUser();
    gs.info(currentUser.getLastName());
})();
(function() {
    var currentUser = gs.getUser();
    gs.info(currentUser.getName());
})();
(function() {
    var currentUser = gs.getUser();
    currentUser.savePreference('myPref', 'red');
    gs.info(currentUser.getPreference('myPref'));
})();
(function() {
    var currentUser = gs.getUser();
    gs.info(currentUser.getRoles());
})();
(function() {
    var currentUser = gs.getUser();
    gs.info(currentUser.getUserRoles());
})();
(function() {
    var currentUser = gs.getUser();
    gs.info(currentUser.hasRole('admin'));
})();
(function() {
    var currentUser = gs.getUser();
    gs.info(currentUser.isMemberOf('Capacity Mgmt'));
})();
(function() {
    var currentUser = gs.getUser();
    currentUser.savePreference('myPref', 'red');
    gs.info(currentUser.getPreference('myPref'));
})();
