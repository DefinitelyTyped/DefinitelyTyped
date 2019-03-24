(function() {
    // For this example, we created a table: "x_app_table"
    // with two columns: "short_description", "test_script"
    // "test_script" will store the script to be evaluated by GlideScopedEvaluator.
    var gr = new GlideRecord('x_app_table');
    gr.short_description = 'Testing GlideScopedEvaluator';
    gr.test_script = "gs.getUser().getName() + ' says ' + greeting; ";
    gr.insert();

    // setup variables to be used by the script
    var vars = { greeting: 'hello' };

    //Evaluate the script from the field
    var evaluator = new GlideScopedEvaluator();
    gs.info(evaluator.evaluateScript(gr, 'test_script', vars));
    // ${user_name} says hello
})();
(function() {
    //setting up a record that contains the script to be executed.
    var gr = new GlideRecord('x_app_table');
    gr.short_description = 'Calculate Addition';
    gr.test_script = 'result = x + y';
    gr.insert();

    var evaluator = new GlideScopedEvaluator();
    evaluator.putVariable('x', 100);
    evaluator.putVariable('y', 200);
    evaluator.putVariable('result', null);

    // Now retrieve the result
    evaluator.evaluateScript(gr, 'test_script', null);
    gs.info(evaluator.getVariable('result'));
    // 300
})();
