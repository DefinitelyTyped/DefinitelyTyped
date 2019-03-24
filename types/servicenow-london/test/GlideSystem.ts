(function() {
    gs.addErrorMessage('Invalid account');
})();
(function() {
    if (!current.u_date1.nil() && !current.u_date2.nil()) {
        var start = current.u_date1.getGlideObject().getNumericValue();
        var end = current.u_date2.getGlideObject().getNumericValue();
        if (start > end) {
            gs.addInfoMessage('start must be before end');
            current.u_date1.setError('start must be before end');
            current.setAbortAction(true);
        }
    }
})();
(function() {
    function contractNoticeDue() {
        var gr = new GlideRecord('contract');
        gr.addQuery('u_contract_status', 'Active');
        gr.query();
        while (gr.next()) {
            if (gr.u_termination_date <= gs.daysAgo(-90) && gr.u_contract_duration == 'Long') {
                gr.u_contract_status = 'In review';
            } else if (
                gr.u_termination_date <= gs.daysAgo(-50) &&
                gr.u_contract_duration == 'Medium'
            ) {
                gr.u_contract_status = 'In review';
            } else if (
                gr.u_termination_date <= gs.daysAgo(-10) &&
                gr.u_contract_duration == 'Short'
            ) {
                gr.u_contract_status = 'In review';
            }
        }
        gr.update();
    }
})();
(function() {
    var gr = new GlideRecord('sysapproval_approver');
    gr.addQuery('state', 'requested');
    gr.addQuery('sys_updated_on', '<', gs.daysAgoStart(5));
    gr.query();
})();
(function() {
    gs.debug('This is a debug message');
    var myFirstName = 'Abel';
    var myLastName = 'Tuter';
    gs.debug('This is a debug message from {0}.{1}', myFirstName, myLastName);
})();
(function() {
    gs.error('This is an error message');
    var myFirstName = 'Abel';
    var myLastName = 'Tuter';
    gs.error('This is an error message from {0}.{1}', myFirstName, myLastName);
})();
(function() {
    if (current.operation() != 'insert' && current.comments.changes()) {
        gs.eventQueue('incident.commented', current, gs.getUserID(), gs.getUserName());
    }
})();
(function() {
    var personalId = gs.generateGUID();
    gs.info(personalId);
    // af770511ff013100e04bfffffffffff6
})();
(function() {
    return gs.getCallerScopeName();
})();
(function() {
    var verStr = gs.getCssCacheVersionString();
    gs.info(verStr);
    // _d82979516f0171005be8883e6b3ee4cf&theme=
})();
(function() {
    var currentId = gs.getCurrentApplicationId();
    gs.info(currentId);
    // 04936cb16f30b1005be8883e6b3ee4e0
})();
(function() {
    var currentScope = gs.getCurrentScopeName();
    gs.info(currentScope);
})();
(function() {
    var myMessage = gs.getEscapedMessage('Hello {0}', ['mom']);
})();
(function() {
    var attachment_link = gs.getProperty('glide.servlet.uri');
    gs.info(attachment_link);
    // https://instance.service-now.com/
})();
(function() {
    if (!gs.hasRole('admin') && !gs.hasRole('user_admin') && gs.getSession().isInteractive()) {
        current.addQuery('active', 'true');
    }
})();
(function() {
    var myUserObject = gs.getSessionID();
    gs.info(myUserObject);
})();
(function() {
    gs.info(gs.getTimeZoneName());
})();
(function() {
    gs.info(gs.getUrlOnStack());
})();
(function() {
    var myUserObject = gs.getUser();
})();
(function() {
    gs.info(gs.getUserDisplayName());
})();
(function() {
    gs.info(gs.getUserID());
})();
(function() {
    gs.info(gs.getUserName());
})();
(function() {
    if (!gs.hasRole('admin') && !gs.hasRole('groups_admin') && gs.getSession().isInteractive()) {
        var qc = current.addQuery('u_hidden', '!=', 'true'); //cannot see hidden groups...
        qc.addOrCondition('sys_id', 'javascript:getMyGroups()'); //...unless in the hidden group
        gs.info('User has admin and groups admin roles');
    } else {
        gs.info('User does not have both admin and groups admin roles');
    }
})();
(function() {
    if (current.operation() == 'insert') {
        // If no due date was specified, calculate a default
        if (current.due_date == '') {
            if (current.urgency == '1') {
                // Set due date to 4 hours ahead of current time
                current.due_date = gs.hoursAgo(-4);
            }

            if (current.urgency == '2') {
                // Set due date to 2 days ahead of current time
                current.due_date = gs.daysAgo(-2);
            }

            if (current.urgency == '3') {
                // Set due date to 7 days ahead of current time
                current.due_date = gs.daysAgo(-7);
            }
        }
    }
})();
(function() {
    gs.include('PrototypeServer');
})();
(function() {
    gs.info('This is an info message');
    var myFirstName = 'Abel';
    var myLastName = 'Tuter';
    gs.info('This is an info message from {0}.{1}', myFirstName, myLastName);
})();
(function() {
    gs.debug('This is a log message');
    var myFirstName = 'Abel';
    var myLastName = 'Tuter';
    gs.debug('This is a log message from {0}.{1}', myFirstName, myLastName);
    gs.info(gs.isDebugging());
})();
(function() {
    if (!gs.hasRole('admin') && gs.getSession().isInteractive()) {
        var qc1 = current.addQuery('u_group', '');
        var gra = new GlideRecord('sys_user_grmember');
        gra.addQuery('user', gs.getUserID());
        gra.query();
        while (gra.next()) {
            qc1.addOrCondition('u_group', gra.group);
        }
    }
})();
(function() {
    gs.info(gs.isLoggedIn());
})();
(function() {
    if (gs.isMobile()) gs.info('submitted from mobile UI');
    else gs.info('NOT submitted from mobile UI');
})();
(function() {
    var gr = new GlideRecord('incident');
    gs.info(gs.nil(gr));
})();
(function() {
    gs.setProperty('glide.foo', 'bar', 'foo');
    gs.info(gs.getProperty('glide.foo'));
})();
(function() {
    gs.setRedirect(
        'com.glideapp.servicecatalog_cat_item_view.do?sysparm_id=d41ce5bac611227a0167f4bf8109bf70&sysparm_user=' +
            current.sys_id +
            '&sysparm_email=' +
            current.email
    );
})();
(function() {
    gs.info(gs.tableExists('incident'));
})();
(function() {
    gs.warn('This is a warning');
    var myFirstName = 'Abel';
    var myLastName = 'Tuter';
    gs.warn('This is a warning from {0}.{1}', myFirstName, myLastName);
})();
(function() {
    var xmlString = '<root>value</root>';
    var jsonObject = gs.xmlToJSON(xmlString);
    gs.info(jsonObject);
})();
