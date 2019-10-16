import Insights = require('node-insights');

const INSERT_KEY = 'test-insert-key';
const QUERY_KEY = 'test-query-key';
const ACCOUNT_ID = 'test-account-id';

const insights = new Insights({
    insertKey: INSERT_KEY,
    queryKey: QUERY_KEY,
    accountId: ACCOUNT_ID
});

insights.add({ testAttribute: 1000 }, 'my-event-type');

const logResponse = (err: Error | null | undefined, response: string) => {
    if (!err) {
        // ...
    }
};

insights.send((err, _body) => {
    if (!err) {
        insights.query('SELECT * FROM my-event-type', logResponse);
    }
});
