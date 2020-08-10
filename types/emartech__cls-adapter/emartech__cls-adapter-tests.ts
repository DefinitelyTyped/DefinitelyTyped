import ClsAdapter = require('@emartech/cls-adapter');

interface ContextDef {
    extraKey: string;
    boolKey: boolean;
}

ClsAdapter.createNamespace();

ClsAdapter.getKoaMiddleware();

ClsAdapter.getExpressMiddleware();

ClsAdapter.setOnContext('key', 'myValue');

ClsAdapter.getRequestId();

ClsAdapter.getContextStorage<ContextDef>().requestId;
ClsAdapter.getContextStorage<ContextDef>().extraKey;
ClsAdapter.getContextStorage<ContextDef>().boolKey;

ClsAdapter.addContextStorageToInput()({ key: 'myValue' }).requestId;
ClsAdapter.addContextStorageToInput()({ key: 'myValue' }).key;

ClsAdapter.addRequestIdToInput()({ key: 'myValue' }).requestId;
ClsAdapter.addRequestIdToInput()({ key: 'myValue' }).key;

ClsAdapter.destroyNamespace();
