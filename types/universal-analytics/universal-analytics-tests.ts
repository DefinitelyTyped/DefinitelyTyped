import * as ua from 'universal-analytics';

import * as express from 'express';

const app = express();
let visitor = ua('UA-XXXX-XX');

visitor = ua('UA-XXXX-XX', '6a14abda-6b12-4578-bf66-43c754eaeda9');
visitor = ua('UA-XXXX-XX', 'CUSTOM_USERID_1', { strictCidFormat: false });
visitor = ua('UA-XXXX-XX', { https: true });

visitor.pageview('/', 'http://peaksandpies.com', 'Welcome').send();
visitor.pageview('/', 'http://peaksandpies.com', 'Welcome', err => { });
visitor.pageview({ dp: '/', dt: 'Welcome', dh: 'http://peaksandpies.com' }).send();
visitor.pageview(null, err => { });

visitor.pv('/', 'http://peaksandpies.com', 'Welcome').send();
visitor.pv('/', 'http://peaksandpies.com', 'Welcome', err => { });
visitor.pv({ dp: '/', dt: 'Welcome', dh: 'http://peaksandpies.com' }).send();
visitor.pv(null, err => { });

visitor.screenview('Home Screen', 'App Name').send();
visitor.screenview('Home Screen', 'App Name', err => { }).send();
visitor.screenview({ cd: 'Home Screen', an: 'App Name' }).send();
visitor.screenview(null, err => { });

visitor.event('Event Category', 'Event Action').send();
visitor.event('Event Category', 'Event Action', '…and a label', 42).send();
visitor.event('Event Category', 'Event Action', '…and a label', 42, err => { });
visitor.event('Event Category', 'Event Action', '…and a label', 42, { p: '/contact' }, err => { });
visitor.event({ ec: 'Event Category', ea: 'Event Action', el: '…and a label', ev: 42, dp: '/contact' }).send();
visitor.event('Navigation clicks', null, err => { });

visitor.e('Event Category', 'Event Action').send();
visitor.e('Event Category', 'Event Action', '…and a label', 42).send();
visitor.e('Event Category', 'Event Action', '…and a label', 42, err => { });
visitor.e('Event Category', 'Event Action', '…and a label', 42, { p: '/contact' }, err => { });
visitor.e({ ec: 'Event Category', ea: 'Event Action', el: '…and a label', ev: 42, dp: '/contact' }).send();
visitor.e('Navigation clicks', null, err => { });

visitor
    .transaction('trans-12345', 500)
    .item(300, 1, 'item-54321')
    .item(200, 2, 'item-41325')
    .send();

visitor
    .transaction({ ti: 'trans-12345', tr: 500, ts: 50, tt: 100, ta: 'Partner 13' })
    .item({ ip: 300, iq: 1, ic: 'item-54321', in: 'Item 54321', iv: 'Blue' })
    .item({ ip: 200, iq: 2, ic: 'item-41325', in: 'Item 41325', iv: 'XXL' })
    .send();

visitor
    .t('trans-12345', 500)
    .i(300, 1, 'item-54321')
    .i(200, 2, 'item-41325')
    .send();

visitor
    .t({ ti: 'trans-12345', tr: 500, ts: 50, tt: 100, ta: 'Partner 13' })
    .i({ ip: 300, iq: 1, ic: 'item-54321', in: 'Item 54321', iv: 'Blue' })
    .i({ ip: 200, iq: 2, ic: 'item-41325', in: 'Item 41325', iv: 'XXL' })
    .send();

visitor.transaction(null, err => { });

visitor.exception('StackOverflow Error').send();
visitor.exception('StackOverflow Error', true, () => { });

visitor.timing('User interaction', 'Time to open login overlay', 12547).send();

visitor.transaction('123456', '449.99').send();
visitor.item(449.99, 1, 'ID54321', 'T-Shirt', 'Blue', { ti: '123456' }).send();

visitor.pageview('/').send();
visitor.pageview('/').pageview('/contact').send();
visitor.pageview('/landing-page-1').event('Testing', 'Button color', 'Blue').send();
visitor.pageview('/landing-page-1').send();
visitor.event('Testing', 'Button color', 'Blue', 42, { p: '/landing-page-1' }).send();

visitor
    .event({ ec: 'Mail Server', ea: 'New Team Member Notification sent' })
    .event({ ea: 'Invitation sent' })
    .send();

visitor.set('uid', '123456789');

app.use(ua.middleware('UA-XXXX-Y', { cookieName: '_ga' }));

ua.createFromSession({ cid: 'some-string' });

ua('UA-XXXX-XX').debug();

ua('UA-XXXX-XX', {
    requestOptions: {
        proxy: '…',
    },
});
