import java = require('java');
import BluePromise = require('bluebird');

java.asyncOptions = {
  syncSuffix: 'Sync',
  asyncSuffix: '',
  promiseSuffix: 'P',
  promisify: BluePromise.promisify
};
// todo: figure out why promise doesn't work here
/* java.registerClientP((): Promise<void> => {
  return BluePromise.resolve();
}); */

interface ProxyFunctions {
  [index: string]: Function;
}

java.ensureJvm()
  .then(() => {

    // java.d.ts does not declare any Java types.
    // We can import a  java class, but we don't know the shape of the class here, so must use any
    var Boolean: any = java.import('java.lang.Boolean');

    var functions: ProxyFunctions = {
      accept: function(t: any): void { },
      andThen: function(after: any): any {}
    };
    var proxy: any = java.newProxy('java.util.function.Consumer', functions);
  });
