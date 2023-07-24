/// <reference types="node" />

import * as apminsight from 'apminsight';

apminsight.config();  // $ExpectType void

apminsight.startWebTransaction('/random/url',function(){
    //doSomething
    apminsight.endTransaction();
})

apminsight.startBackgroundTransaction('/random/path',function(){
    //doSomething
    apminsight.endTransaction();
})

apminsight.endTransaction();  // $ExpectType void

apminsight.startTracker('foo', 'FS', function(){
    //doSomething
});

apminsight.trackError(new Error());  // $ExpectType void

apminsight.setTransactionName('/randomName');  // $ExpectType void

apminsight.addParameter('foo','something');  // $ExpectType void

apminsight.ignoreCurrentTransaction();  // $ExpectType void

apminsight.incrementCustomMetric('foo',1);  // $ExpectType void

apminsight.averageCustomMetric('foo',1);  // $ExpectType void

apminsight.getRumScript();  // $ExpectType void

apminsight.instrumentWebFramework('someModule','modulePath');  // $ExpectType void