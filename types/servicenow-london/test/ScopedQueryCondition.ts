(function() {
    var gr = new GlideRecord('incident');
    var qc = gr.addQuery('category', 'Hardware');
    qc.addCondition('category', 'Network');
    gr.addQuery('number', 'INC0000003');
    gr.next();
    gr.number;
    gs.info(gr.getEncodedQuery());
})();
(function() {
    var gr = new GlideRecord('incident');
    var qc = gr.addQuery('category', 'Hardware');
    qc.addOrCondition('category', 'Network');
    gr.addQuery('number', 'INC0000003');
    gr.next();
    gr.number;
    gs.info(gr.getEncodedQuery());
})();
(function() {
    var myObj = new GlideRecord('incident');
    var q1 = myObj.addQuery('state', '<', 3);
    q1.addOrCondition('state', '>', 5);
    var q2 = myObj.addQuery('priority', 1);
    q2.addOrCondition('priority', 5);
    myObj.query();
})();
