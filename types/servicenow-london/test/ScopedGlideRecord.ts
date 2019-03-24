interface ScopedGlideRecord {
    new (tableName: 'othertype'): OtherType;
}
interface OtherType extends ScopedGlideRecord {
    someproperty: string;
}
(function testMerging() {
    var gr = new GlideRecord('othertype');
    gr.someproperty = 'foo';
})();
(function() {
    var inc = new GlideRecord('incident');
    inc.addActiveQuery();
    inc.query();
})();
(function() {
    var queryString = 'priority=1^ORpriority=2';
    var gr = new GlideRecord('incident');
    gr.addEncodedQuery(queryString);
    gr.query();
    while (gr.next()) {
        gs.addInfoMessage(gr.number);
    }
})();
(function() {
    var functionBuilder = new GlideDBFunctionBuilder();
    var myAddingFunction = functionBuilder.add();
    myAddingFunction = functionBuilder.field('order');
    myAddingFunction = functionBuilder.field('priority');
    var func = functionBuilder.build();

    var gr = new GlideRecord('incident');
    gr.addFunction(func);
    gr.addQuery(func, '<', 5);
    gr.query();
    while (gr.next()) gs.info(gr.getValue(func));
})();
(function() {
    var prob = new GlideRecord('problem');
    prob.addJoinQuery('incident');
    prob.query();
})();
(function() {
    // Look for Problem records that have associated Incident records
    var gr = new GlideRecord('problem');
    var grSQ = gr.addJoinQuery('incident');

    // Where the Problem records are "active=false"
    gr.addQuery('active', 'false');

    // And the Incident records are "active=true"
    grSQ.addCondition('active', 'true');

    // Query
    gr.query();

    // Iterate and output results
    while (gr.next()) {
        gs.info(gr.getValue('number'));
    }
})();
(function() {
    var gr = new GlideRecord('problem');
    gr.addJoinQuery('incident', 'opened_by', 'caller_id');
    gr.query();
})();
(function() {
    var target = new GlideRecord('incident');
    target.addNotNullQuery('short_description');
    target.query(); // Issue the query to the database to get all records where short_description is not null
    while (target.next()) {
        // add code here to process the incident record
    }
})();
(function() {
    var target = new GlideRecord('incident');
    target.addNullQuery('short_description');
    target.query(); // Issue the query to the database to get all records where short_description is null
    while (target.next()) {
        // add code here to process the incident record
    }
})();
(function() {
    var rec = new GlideRecord('incident');
    rec.addQuery('active', true);
    rec.query();
    while (rec.next()) {
        rec.active = false;
        gs.info('Active incident ' + rec.number + ' closed');
        rec.update();
    }
})();
(function() {
    var rec = new GlideRecord('incident');
    rec.addQuery('active', true);
    rec.addQuery('sys_created_on', '>', '2010-01-19 04:05:00');
    rec.query();
    while (rec.next()) {
        rec.active = false;
        gs.info('Active incident ' + rec.number + ' closed');
        rec.update();
    }
})();
(function() {
    var gr = new GlideRecord('incident');
    gr.addQuery('number', 'IN', 'INC00001,INC00002');
    gr.query();
    while (gr.next()) {
        //do something....
    }
})();
(function() {
    var rec = new GlideRecord('incident');
    rec.addQuery('active=true');
    rec.query();
    while (rec.next()) {
        rec.active = false;
        gs.info('Active incident ' + rec.number + ' closed');
        rec.update();
    }
})();
(function() {
    var gr = new GlideRecord('incident');
    gs.info(gr.canCreate());
    gs.info(gr.canDelete());
    gs.info(gr.canRead());
    gs.info(gr.canWrite());
})();
(function() {
    var gr = new GlideRecord('incident');
    gr.orderBy('number');
    gr.chooseWindow(2, 4);
    gr.query();
    if (gr.next()) {
        gs.info(gr.number + ' is within window');
    }
})();
(function() {
    var inc = new GlideRecord('incident');
    inc.get('17c90efb13418700cc36b1422244b05d');
    gs.info(inc.calendar_duration.dateNumericValue());
})();
(function() {
    var gr = new GlideRecord('incident');
    gr.addQuery('active', 'false'); //to delete all inactive incidents
    gr.deleteMultiple();
})();
(function() {
    var gr = new GlideRecord('incident');
    //to delete one record
    if (gr.get('99ebb4156fa831005be8883e6b3ee4b9')) {
        gr.deleteRecord();
    }
})();
(function() {
    var grIncident = new GlideRecord('incident');
    var returnValue = grIncident.get('99ebb4156fa831005be8883e6b3ee4b9');
    gs.info(returnValue); // logs true or false
    gs.info(grIncident.number); // logs Incident Number
})();
(function() {
    var grIncident = new GlideRecord('incident');
    var returnValue = grIncident.get('caller_id.name', 'Sylivia Wayland');
    gs.info(returnValue); // logs true or false
    gs.info(grIncident.number); // logs Incident Number
})();
doit();
function doit() {
    var gr = new GlideRecord('sys_user');
    gr.query('user_name', 'admin');
    if (gr.next()) {
        gs.info('we got one');
        gs.info(gr.location.getAttribute('tree_picker'));
    }
}
(function() {
    var gr = new GlideRecord('incident');
    gr.get('sys_id', 'ef43c6d40a0a0b5700c77f9bf387afe3');
    gs.info(gr.getDisplayValue());
})();
(function() {
    var gr = new GlideRecord('incident');
    var ed = gr.getED();
    gs.info(ed.getLabel());
})();
(function() {
    var elementName = 'short_description';
    var gr = new GlideRecord('incident');
    gr.initialize();
    gr.setValue(elementName, 'My DB is not working');
    gr.insert();
    gs.info(gr.getElement('short_description'));
})();
(function() {
    var gr = new GlideRecord('incident');
    gr.addQuery('active', true);
    gr.addQuery('priority', 1);
    gr.query();
    var encodedQuery = gr.getEncodedQuery();
    gs.info(encodedQuery);
})();
(function() {
    var gr = new GlideRecord('incident');
    gs.info(gr.getLabel());
})();
(function() {
    // Setup a data policy where short_description field in incident is mandatory
    var gr = new GlideRecord('incident');
    gr.insert(); // insert without data in mandatory field
    var errormessage = gr.getLastErrorMessage();
    gs.info(errormessage);
})();
(function() {
    var gr = new GlideRecord('incident');
    gr.addActiveQuery();
    gr.addQuery('priority', 1);
    gr.query();
    gr.next();
    gs.info(gs.getProperty('glide.servlet.uri') + gr.getLink(false));
})();
(function() {
    var gr = new GlideRecord('incident');
    var recordClassName = gr.getRecordClassName();
    gs.info(recordClassName);
})();
(function() {
    var gr = new GlideRecord('incident');
    gr.query();
    gs.info('Records in incident table: ' + gr.getRowCount());
})();
(function() {
    var gr = new GlideRecord('incident');
    gs.info(gr.getTableName());
})();
(function() {
    var gr = new GlideRecord('kb_knowledge');
    gr.query();
    gr.next();
    var uniqueid = gr.getUniqueValue();
    gs.info(uniqueid);
})();
(function() {
    var gr = new GlideRecord('incident');
    gr.orderBy('number');
    gr.query('active', 'true');
    gr.next();
    gs.info(gr.getValue('number'));
})();
(function() {
    var rec = new GlideRecord('incident');
    rec.query();
    if (rec.hasNext()) {
        gs.info('Table is not empty');
    }
})();
(function() {
    var gr = new GlideRecord('incident');
    gr.initialize();
    gr.name = 'New Incident';
    gr.description = 'Incident description';
    gr.insert();
})();
(function() {
    var gr = new GlideRecord('incident');
    gr.initialize();
    gr.name = 'New Incident';
    gr.description = 'Incident description';
    gr.insert();
})();
(function() {
    var gr = new GlideRecord('incident');
    gs.info(gr.isActionAborted());
})();
(function() {
    var gr = new GlideRecord('x_app_table');
    gr.newRecord(); // create a new record and populate it with default values
    gs.info(gr.isNewRecord());
})();
(function() {
    var gr = new GlideRecord('incident');
    gs.info(gr.isValid());
    var anotherGr = new GlideRecord('wrong_table_name');
    gs.info(anotherGr.isValid());
})();
(function() {
    var gr = new GlideRecord('incident');
    gr.initialize();
    gs.info(gr.isValidField('short_description'));
})();
(function() {
    var rec = new GlideRecord('incident');
    rec.query();
    while (rec.next()) {
        gs.info(rec.number + ' exists');
    }
    gs.info(rec.isValidRecord());
})();
(function() {
    var gr = new GlideRecord('x_app_table');
    gr.newRecord();
    gs.info(gr.isNewRecord());
})();
(function() {
    var rec = new GlideRecord('incident');
    rec.query();
    while (rec.next()) {
        gs.info(rec.number + ' exists');
    }
})();
(function() {
    //Commonly used in a business rule, returns insert if the current operation is insert
    gs.info('current operation ' + current.operation());
})();
(function() {
    var queryString = 'priority=2';
    var gr = new GlideRecord('incident');
    gr.orderBy('short_description'); // Ascending Order
    gr.addEncodedQuery(queryString);
    gr.query();
    while (gr.next()) {
        gs.info(gr.short_description);
    }
})();
(function() {
    var queryString = 'priority=2';
    var gr = new GlideRecord('incident');
    gr.orderByDesc('short_description'); //Descending Order
    gr.addEncodedQuery(queryString);
    gr.query();
    while (gr.next()) {
        gs.info(gr.short_description);
    }
})();
(function() {
    var rec = new GlideRecord('incident');
    rec.query();
    while (rec.next()) {
        gs.info(rec.number + ' exists');
    }
})();
(function() {
    // Often used in business rule to check whether the current operation should be aborted.
    if (current.size > 16) {
        current.setAbortAction(true);
    }
})();
(function() {
    var gr = new GlideRecord('incident');
    gr.orderByDesc('sys_created_on');
    gr.setLimit(10);
    gr.query(); // this retrieves latest 10 incident records created
})();
(function() {
    var gr = new GlideRecord('incident');
    gr.short_description = 'The third floor printer is broken';
    gr.setNewGuidValue('eb4636ca6f6d31005be8883e6b3ee333');
    gr.insert();
    gs.info(gr.sys_id);
})();
(function() {
    var elementName = 'short_description';
    var gr = new GlideRecord('incident');
    gr.initialize();
    gr.setValue(elementName, 'My DB is not working');
    gr.insert();
})();
(function() {
    //Enable business rules, scripts engines for x_app_table
    var gr = new GlideRecord('x_app_table');
    gr.setWorkflow(true);
})();
(function() {
    var gr = new GlideRecord('incident');
    gr.get('99ebb4156fa831005be8883e6b3ee4b9');
    gr.short_description = 'Update the short description';
    gr.update();
    gs.info(gr.getElement('short_description'));
})();
(function() {
    // update the state of all active incidents to 4 - "Awaiting User Info"
    var gr = new GlideRecord('incident');
    gr.addQuery('active', true);
    gr.query();
    gr.setValue('state', 4);
    gr.updateMultiple();
})();
(function() {
    var rec = new GlideRecord('sys_template');
    rec.query();
    while (rec._next()) {
        gs.info(rec.number + ' exists');
    }
})();
(function() {
    var rec = new GlideRecord('sys_app_module');
    rec._query();
    while (rec.next()) {
        gs.info(rec.number + ' exists');
    }
})();
