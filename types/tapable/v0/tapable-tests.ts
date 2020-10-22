import Tapable = require('tapable');

class DllPlugin {
    apply(compiler: Compiler) {
        compiler.plugin('doSomething', function (...args: string[]) {
            console.log(args);
        });

        compiler.plugin(['doSomething', 'doNothing'], function (...args: string[]) {
            console.log(args);
        });
    }
}

class Compiler extends Tapable {
    constructor(){
        super()
    }
}

const compiler = new Compiler();

let callback: Tapable.CallbackFunction = function () {

};

compiler.apply(new DllPlugin());

compiler.applyPlugins('doSomething', 'a', 'b');
compiler.applyPlugins0('doSomething');
compiler.applyPlugins1('doSomething', 'a');
compiler.applyPlugins2('doSomething', 'a', 'b');
compiler.applyPluginsWaterfall('doSomething', 'a', 'b');
compiler.applyPluginsWaterfall0('doSomething', 'a');
compiler.applyPluginsBailResult('doSomething', 'a', 'b');
compiler.applyPluginsBailResult1('doSomething', ['a', 'b']);
compiler.applyPluginsAsync('doSomething', 'a', 'b');
compiler.applyPluginsAsyncSeries('doSomething', 'a', 'b');
compiler.applyPluginsAsyncSeries1('doSomething', 'a', callback);
compiler.applyPluginsAsyncSeriesBailResult('doSomething', 'a', 'b');
compiler.applyPluginsAsyncSeriesBailResult1('doSomething', 'a', callback);
compiler.applyPluginsAsyncWaterfall('doSomething', 'a', callback);
compiler.applyPluginsParallel('doSomething', 'a', 'b');
compiler.applyPluginsParallelBailResult('doSomething', 'a', 'b');
compiler.applyPluginsParallelBailResult1('doSomething', 'a', callback);
