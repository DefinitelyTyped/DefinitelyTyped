(function() {
    var functionBuilder = new GlideDBFunctionBuilder();
    var myAddingFunction = functionBuilder.add();
    myAddingFunction = functionBuilder.field('order');
    myAddingFunction = functionBuilder.field('priority');
    var func = functionBuilder.build();
})();
(function() {
    var functionBuilder = new GlideDBFunctionBuilder();
    var myAddingFunction = functionBuilder.add();
    myAddingFunction = functionBuilder.field('order');
    myAddingFunction = functionBuilder.field('priority');
    var func = functionBuilder.build();
    gs.info(func);
})();
(function() {
    var functionBuilder = new GlideDBFunctionBuilder();
    var myConcatFunction = functionBuilder.concat();
    myConcatFunction = functionBuilder.field('short_description');
    myConcatFunction = functionBuilder.field('caller_id.name');
    var func = functionBuilder.build();
})();
(function() {
    var functionBuilder = new GlideDBFunctionBuilder();
    var myDateDiffFunction = functionBuilder.datediff();
    myDateDiffFunction = functionBuilder.field('sys_updated_on');
    myDateDiffFunction = functionBuilder.field('opened_at');
    var func = functionBuilder.build();
})();
(function() {
    var functionBuilder = new GlideDBFunctionBuilder();
    var dayOfWeekFunction = functionBuilder.dayofweek();
    dayOfWeekFunction = functionBuilder.field('opened_at');
    dayOfWeekFunction = functionBuilder.constant('2');
    var func = functionBuilder.build();

    var gr = new GlideRecord('incident');
    gr.addFunction(func);
    gr.query();
    while (gr.next()) gs.info(gr.getValue(func));
})();
(function() {
    var functionBuilder = new GlideDBFunctionBuilder();
    var myDivideFunction = functionBuilder.divide();
    myDivideFunction = functionBuilder.field('order');
    myDivideFunction = functionBuilder.field('priority');
    var func = functionBuilder.build();
})();
(function() {
    var functionBuilder = new GlideDBFunctionBuilder();
    var myAddingFunction = functionBuilder.add();
    myAddingFunction = functionBuilder.field('order');
    myAddingFunction = functionBuilder.field('priority');
    var func = functionBuilder.build();
})();
(function() {
    var functionBuilder = new GlideDBFunctionBuilder();
    var myLengthFunction = functionBuilder.length();
    myLengthFunction = functionBuilder.field('short_description');
    var func = functionBuilder.build();
})();
(function() {
    var functionBuilder = new GlideDBFunctionBuilder();
    var myMultiplyFunction = functionBuilder.multiply();
    myMultiplyFunction = functionBuilder.field('order');
    myMultiplyFunction = functionBuilder.field('priority');
    var func = functionBuilder.build();
})();
(function() {
    var functionBuilder = new GlideDBFunctionBuilder();
    var mySubtractFunction = functionBuilder.subtract();
    mySubtractFunction = functionBuilder.field('order');
    mySubtractFunction = functionBuilder.field('priority');
    var func = functionBuilder.build();
})();
