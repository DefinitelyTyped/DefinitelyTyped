(function() {
    var gr = new GlideRecord('sys_plugins');
    var queryString = 'active=0^ORactive=1';
    gr.addEncodedQuery(queryString);
    gr.query();
    var pMgr = new GlidePluginManager();

    while (gr.next()) {
        var name = gr.getValue('name');
        var pID = gr.getValue('source');
        var isActive = pMgr.isActive(pID);
        if (isActive) gs.info('The plugin ' + name + ' is active');
    }
    // The plugin Country Lookup Data is active 
    // The plugin Database Replication is active 
    // The plugin REST API Provider is active 
    // The plugin Ten Cool Things is active ...
})();
