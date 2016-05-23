
import atpl = require('atpl');

var bool: boolean;
var str: string;
var err: Error;
var items: any;
var options: Object;
var callback: Function;

atpl.compile(str, options);
atpl.__express(str, options, callback);

atpl.registerExtension(items);
atpl.registerTags(items);
atpl.registerFunctions(items);
atpl.registerFilters(items);
atpl.registerTests(items);

atpl.registerTags(null);
atpl.renderFile(str, str, options, bool, (e, res?) => {
	err = err;
	str = res;
});
