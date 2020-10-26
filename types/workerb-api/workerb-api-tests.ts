open('https://google.com');

click('#div', {
    method: 'by_query_selector',
    retryDuration: 10,
    expectReload: true,
    numberOfTries: 10,
});

notify('Workerb is cool.', 'success', 200);

type('Some text', '#form-input', {
    numberOfTries: 10,
    method: 'by_label',
});

download('Download Pdf', '.download', '.pdf');

event(
    '#div',
    {
        eventType: 'keydown',
        eventProps: {
            keyCode: 76,
        },
    },
    { method: 'by_query_selector', numberOfTries: 10 },
);

prompt('Enter your name');

log('logging...');

read('#input', {
    method: 'by_query_selector',
});

readAll('.boards', {
    retryDuration: 10,
});

readTable('#table', {
    method: 'by_query_selector',
    numberOfTries: 10,
});

readUrl();

runInTab(() => {
    open('https://cnn.com');
    click('#searchInput', { method: 'by_query_selector' });
    type('steve jobs', '#searchInput', { method: 'by_query_selector' });
    submit('#searchInput', { expectReload: true });
}, true);

select('2', '#.access-me', {
    selectBy: 'label',
    method: 'by_query_selector',
    retryDuration: 10,
});

submit('#workerB_Input', {
    method: 'by_query_selector',
    retryDuration: 10,
});

tab('https://google.com');

getAttribute(['href'], 'a', {
    method: 'by_query_selector_all',
    retryDuration: 10,
    numberOfTries: 10,
});

logging('on');

const { response, status } = httpGet('https://api.github.com/userss/', {});

httpDelete('https://www.google.com', JSON.stringify({ name: 'workerB' }), { 'content-type': 'application/json' });

httpDelete('https://api.delete.com/posts/1');

httpPost('https://www.google.com', JSON.stringify({ name: 'workerB' }), { 'content-type': 'application/json' });

httpPut('https://www.google.com', JSON.stringify({ name: 'workerB' }), { 'content-type': 'application/json' });
