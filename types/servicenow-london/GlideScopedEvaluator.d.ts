/**
 * The GlideScopedEvaluator API allows you to evaluate scripts in a GlideRecord field from
 * both scoped and global server scripts.
 */
declare class GlideScopedEvaluator {
    /**
     * Instantiates a GlideScopedEvaluator object.
     */
    constructor();

    /**
     * Evaluates a script from a GlideRecord field.
     *
     * @param grObj The GlideRecord containing a script expression.
     * @param [scriptField] (Optional) The name of the field containing the script expression.
     * @param [variables] (Optional) A map of variables with name-value pairs. These variables are
     * available to the script during execution of this method.
     * @returns The result of the script execution.
     * @example
     *
     * // For this example, we created a table: "x_app_table" with two columns:
     * //   "short_description", "test_script"
     * // "test_script" will store the script to be evaluated by GlideScopedEvaluator.
     * gr = new GlideRecord('x_app_table');
     * gr.short_description = 'Testing GlideScopedEvaluator';
     * gr.test_script = "gs.getUser().getName() + ' says ' + greeting; ";
     * gr.insert();
     * // setup variables to be used by the script
     * var vars = {'greeting' : 'hello'};
     * //Evaluate the script from the field
     * var evaluator = new GlideScopedEvaluator();
     * gr = new GlideRecord('x_app_table');
     * gr.addQuery('short_description','Testing GlideScopedEvaluator');
     * gr.query();
     * if (gr.next()) {
     *   gs.info(evaluator.evaluateScript(gr, 'test_script', vars));
     * }
     */
    evaluateScript(grObj: ScopedGlideRecord, scriptField?: string, variables?: object | null): any;

    /**
     * Returns a variable from a GlideScopedEvaluator object.
     *
     * @param name The name of the variable.
     * @returns The value of the specified variable.
     * @example
     *
     * //setting up a record that contains the script to be executed.
     * gr = new GlideRecord('x_app_table');
     * gr.short_description = 'Calculate Addition';
     * gr.calculate = "result = x + y";
     * gr.insert();
     * var evaluator = new GlideScopedEvaluator();
     * evaluator.putVariable('x', 100);
     * evaluator.putVariable('y', 200);
     * evaluator.putVariable('result', null);
     * // Now retrieve the result
     * gr = new GlideRecord('x_app_table');
     * gr.addQuery('short_description','Calculate Addition');
     * gr.query();
     * if (gr.next()) {
     *   evaluator.evaluateScript(gr, 'calculate', null);
     *   gs.info(evaluator.getVariable('result'));
     * }
     */
    getVariable(name: string): any;

    /**
     * Puts a variable into the GlideScopedEvaluator object. These variables are available to
     * the script that this GlideScopedEvaluator object runs.
     *
     * @param name The name of the variable.
     * @param value The value of the variable.
     * @example
     *
     * //setting up a record that contains the script to be executed.
     * gr = new GlideRecord('x_app_table');
     * gr.short_description = 'Calculate Addition';
     * gr.calculate = "result = x + y";
     * gr.insert();
     * var evaluator = new GlideScopedEvaluator();
     * evaluator.putVariable('x', 100);
     * evaluator.putVariable('y', 200);
     * evaluator.putVariable('result', null);
     * // Now retrieve the result
     * gr = new GlideRecord('x_app_table');
     * gr.addQuery('short_description','Calculate Addition');
     * gr.query();
     * if (gr.next()) {
     *   evaluator.evaluateScript(gr, 'calculate', null);
     *   gs.info(evaluator.getVariable('result'));
     * }
     */
    putVariable(name: string, value: any): void;
}
