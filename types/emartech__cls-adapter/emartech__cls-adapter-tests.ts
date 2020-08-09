import ClsAdapter from '@emartech/cls-adapter';

ClsAdapter.createNamespace();

ClsAdapter.getKoaMiddleware();

ClsAdapter.getExpressMiddleware();

ClsAdapter.setOnContext('key', 'myValue');

ClsAdapter.getRequestId();

ClsAdapter.getContextStorage().requestId;

ClsAdapter.addContextStorageToInput()({key: 'myValue'}).requestId;
ClsAdapter.addContextStorageToInput()({key: 'myValue'}).key;

ClsAdapter.addRequestIdToInput()({key: 'myValue'}).requestId;
ClsAdapter.addRequestIdToInput()({key: 'myValue'}).key;

ClsAdapter.destroyNamespace();
