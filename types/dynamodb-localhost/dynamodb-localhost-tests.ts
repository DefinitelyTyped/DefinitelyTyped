import dynamodbLocal = require('dynamodb-localhost');

dynamodbLocal.install();
dynamodbLocal.install(undefined, '../.dynamodb');
dynamodbLocal.install(() => {}, '../.dynamodb');
dynamodbLocal.install(() => {
    return 'Installed!';
}, '../.dynamodb');
// @ts-expect-error
dynamodbLocal.install({ path: '../.dynamodb' });
// @ts-expect-error
dynamodbLocal.install('../.dynamodb');

dynamodbLocal.start({ port: 1234 });
dynamodbLocal.start({ docker: true });
// @ts-expect-error
dynamodbLocal.start();

dynamodbLocal.stop(1234);
// @ts-expect-error
dynamodbLocal.stop();

dynamodbLocal.restart(1234);
// @ts-expect-error
dynamodbLocal.restart();

dynamodbLocal.remove();
dynamodbLocal.remove(() => {});
dynamodbLocal.remove(() => {
    return 'Removed!';
});
// @ts-expect-error
dynamodbLocal.remove({});
// @ts-expect-error
dynamodbLocal.remove(1234);
