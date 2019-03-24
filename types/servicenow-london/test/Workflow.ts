(function() {
    var gr = new GlideRecord('change_request');
    gr.get('8ecd7552db252200a6a2b31be0b8f581');

    var wf = new global.Workflow();
    var grFlows = wf.getRunningFlows(gr);
    while (grFlows.next()) {
        wf.broadcastEvent(grFlows.sys_id, 'resume');
    }
})();
(function() {
    var gr = new GlideRecord('change_request');
    gr.get('8ecd7552db252200a6a2b31be0b8f581');

    var wf = new global.Workflow();
    wf.cancel(gr);
})();
(function() {
    // If a workflow has started for this item, cancel it, where current is a task record with a workflow context
    if (current.stage == 'Request Cancelled' && current.context && !current.context.nil()) {
        var w = new global.Workflow();
        var gr = new GlideRecord('wf_context');

        if (gr.get(current.context)) w.cancelContext(gr);
    }
})();
(function() {
    var wkfw = new global.Workflow();
    wkfw.deleteWorkflow(current);
})();
(function() {
    // where current is a task record with a workflow context
    var w = new global.Workflow();
    w.fireEvent(current, 'execute');
})();
(function() {
    var wkfw = new global.Workflow();
    wkfw.fireEventById('f2400ec10b0a3c1c00ca5bb5c6fae427', 'Timer');
})();
(function() {
    //where current is a task record with a workflow context
    var wkfw = new global.Workflow();
    gs.info(wkfw.getContexts(current).started);
})();
(function() {
    var wkfw = new global.Workflow();
    gs.info(wkfw.getEstimatedDeliveryTime('b99a866a4a3623120074c033e005418f'));
})();
(function() {
    //where current is a task record with a workflow context
    var wkfw = new global.Workflow();
    var context = wkfw.getContexts(current);
    gs.info(wkfw.getEstimatedDeliveryTimeFromWFVersion(context.wf_version));
})();
(function() {
    var gr = new GlideRecord('wf_context');
    gr.get('08a90c3adba52200a6a2b31be0b8f565');
    var wkfw = new global.Workflow();
    wkfw.getReturnValue(gr);
})();
(function() {
    //where current is a task record with a workflow context
    var wf = new global.Workflow().getRunningFlows(current);
    while (wf.next()) {
        new global.Workflow().broadcastEvent(wf.sys_id, 'pause');
    }
})();
(function() {
    var wkfw = new global.Workflow();
    var gr = wkfw.getVersion('b99a866a4a3623120074c033e005418f');
})();
(function() {
    var wkfw = new global.Workflow();
    var ge = wkfw.getVersionFromName('Emergency Change');
})();
(function() {
    var wkfw = new global.Workflow();
    var s = wkfw.getWorkflowFromName('Emergency Change');
})();
(function() {
    var gr = new GlideRecord('change_request');
    gr.get('cecdb552db252200a6a2b31be0b8f50b');
    var wkfw = new global.Workflow();
    gs.info(wkfw.hasWorkflow(gr));
})();
(function() {
    var gr = new GlideRecord('change_request');
    gr.get('cecdb552db252200a6a2b31be0b8f50b');
    new global.Workflow().restartWorkflow(gr);
})();
(function() {
    var gr = new GlideRecord('change_request');
    gr.get('cecdb552db252200a6a2b31be0b8f50b');
    var wkfw = new global.Workflow();
    wkfw.runFlows(gr, 'update');
})();
(function() {
    ////where current is a task record with a workflow context
    var w = new global.Workflow();
    var context = w.startFlow('sys_id', current, current.operation(), {});
})();
(function() {
    //where current is a task record with a workflow context
    current.name = current.workflow_version.name;
    current.started_by.setValue(gs.getUserID());

    if (gs.nil(current.id)) {
        var gr = new GlideRecord('wf_workflow_execution');
        gr.name = current.name;
        gr.insert();

        current.table = 'wf_workflow_execution';
        current.id = gr.sys_id;
    }

    var wf = new global.Workflow();
    wf.startFlowFromContextInsert(current, current.operation());
})();
(function() {
    var id = 'sys_id';
    // is this a retroactive start?
    ////where current is a task record with a workflow context
    var msecs =
        new GlideDateTime().getNumericValue() -
        current.start_time.getGlideObject().getNumericValue();

    // treat this as a retroactive workflow start if the SLA started more than 5 seconds ago
    var w = new global.Workflow();
    if (msecs <= 5000) w.startFlow(id, current, current.operation());
    else w.startFlowRetroactive(id, msecs, current, current.operation());

    // update the record in case the workflow changed some values
    current.update();
})();
