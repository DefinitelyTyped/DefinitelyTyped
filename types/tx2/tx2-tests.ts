import TX2 = require("tx2");

TX2.event('foo', { bar: true });

TX2.action('foo', callback => callback({ bar: true }));
TX2.action('foo', { bar: true }, (data, callback) => callback(data.bar));

TX2.issue('foo!');
TX2.issue(new Error('bar!'));

TX2.metric('foo', 1).set(2);
TX2.metric('bar', () => '').set('foo!');

TX2.metric('foo', 'bar', () => 'bar');

TX2.metric('foo', 2).val();
TX2.metric('bar', 'foo', () => '2').val();

TX2.metric({
    name: "foo",
    value: "bar",
}).val();
TX2.metric({
    name: "foo",
    value: 1,
    unit: "bar"
}).val();

TX2.counter('foo').inc(12);
TX2.counter('foo').val();

TX2.counter({
    name: "foo",
    unit: "bar"
});
