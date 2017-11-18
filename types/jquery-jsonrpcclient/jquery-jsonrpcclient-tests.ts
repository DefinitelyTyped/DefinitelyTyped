var foo = new $.JsonRpcClient({ ajaxUrl: '/backend/jsonrpc' });
foo.call(
    'bar', ['A parameter', 'B parameter'],
    function (result) { alert('Foo bar answered: ' + result.my_answer); },
    function (error) { console.log('There was an error', error); }
);


var foo = new $.JsonRpcClient({ ajaxUrl: '/backend/jsonrpc' });
foo.batch(
    function (batch) {
        batch.call('bar', ['A parameter', 'B parameter'], function () { }, function () { });
        batch.call('baz', { parameters: 'could be object' }, function () { }, function () { });
    },
    function (all_result_array) { alert('All done.'); },
    function (error_data) { alert('Error in batch response.'); }
    );

var foo = new $.JsonRpcClient({ ajaxUrl: '/backend/jsonrpc', socketUrl: 'ws://example.com/' });
foo.call('bar', ['param'], function () { }, function () { });