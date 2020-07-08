import {
    open,
    click,
    download,
    event,
    getAttribute,
    httpDelete,
    httpGet,
    httpPost,
    readTable,
    readUrl,
    select,
} from 'workerb';

click('#div', {
    method: 'by_xpath',
    retryDuration: 10,
    expectReload: true,
});

download('ahg', 'nfhgfhj', '.xml');

event('#div', { eventType: 'keydown' });

getAttribute(['href'], 'a');

httpDelete('hfgfh');

httpGet('gdfgh');

httpPost('hgj');

httpDelete('hgj');

readTable('hgjgj');

select('2', '.div', { selectBy: 'ng' });
