import * as dav from "dav";

(function () {
    var xhr = new dav.transport.Basic(
        new dav.Credentials({
            username: 'xxx',
            password: 'xxx'
        })
    );

    dav.createAccount({ server: 'http://dav.example.com', xhr: xhr })
        .then(function (account) {
            account.calendars.forEach(function () {
            });
        });
    var client = new dav.Client(xhr);

    client.createAccount({
        server: 'http://dav.example.com',
        accountType: 'carddav'
    }).then(function (account) {
        account.addressBooks.forEach(function () {
        });
    });
})();

(function () {
    var client = new dav.Client(
        new dav.transport.Basic(
            new dav.Credentials({
                username: 'xxx',
                password: 'xxx'
            })
        ),
        {
            baseUrl: 'https://mail.mozilla.com'
        }
    );

    var req = dav.request.basic({
        method: 'PUT',
        data: 'BEGIN:VCALENDAR\nEND:VCALENDAR',
        etag: '12345'
    });

    client.send(req, '/calendars/123.ics')
        .then(function () {
        });
})();

(function () {
    var xhr = new dav.transport.Basic(
        new dav.Credentials({
            username: 'xxx',
            password: 'xxx'
        })
    );

    var req = dav.request.basic({
        method: 'PUT',
        data: 'BEGIN:VCALENDAR\nEND:VCALENDAR',
        etag: '12345'
    });

    xhr.send(req, 'https://mail.mozilla.com/calendars/123.ics')
        .then(function () {
        });
})();

dav.debug.enabled = true;

(function () {
    let xhr = new dav.transport.Basic(
        new dav.Credentials({
            username: 'Killer BOB',
            password: 'blacklodge'
        })
    );

    let client = new dav.Client(xhr, { baseUrl: 'https://mail.mozilla.com' });

    let url = 'https://mail.mozilla.com/';
    let req = dav.request.basic({
        method: 'PUT',
        data: 'BEGIN:VCALENDAR\nEND:VCALENDAR',
        etag: 'abc123'
    });

    let sandbox = dav.createSandbox();
    client.send(req, url, { sandbox: sandbox });
    xhr.send(req, url, { sandbox: sandbox });

    client.createAccount({ sandbox: {}, server: 'http://dav.example.com' });
    dav.createAccount({
        sandbox: {},
        server: 'http://dav.example.com',
        xhr: xhr
    });

    let calendar = new dav.Calendar();
    client.createCalendarObject(calendar, {
        data: 'BEGIN:VCALENDAR\nEND:VCALENDAR',
        filename: 'test.ics'
    });
    dav.createCalendarObject(
        calendar,
        {
            data: 'BEGIN:VCALENDAR\nEND:VCALENDAR',
            filename: 'test.ics',
            xhr: xhr
        });

    let object = new dav.CalendarObject();
    client.updateCalendarObject(object);
    dav.updateCalendarObject(
        object,
        {
            xhr: xhr
        }
    );

    object = new dav.CalendarObject();
    client.deleteCalendarObject(object);
    dav.deleteCalendarObject(
        object,
        {
            xhr: xhr
        }
    );

    calendar = new dav.Calendar();
    client.syncCalendar(calendar, { syncMethod: 'webdav' });
    dav.syncCalendar(
        calendar,
        {
            syncMethod: 'webdav',
            xhr: xhr
        }
    );

    let account = new dav.Account();
    client.syncCaldavAccount(account, { syncMethod: 'webdav' });
    dav.syncCaldavAccount(
        account,
        {
            syncMethod: 'webdav',
            xhr: xhr
        }
    );

    let addressBook = new dav.AddressBook();
    client.createCard(addressBook, {
        data: 'BEGIN:VCARD\nEND:VCARD',
        filename: 'test.vcf'
    });
    dav.createCard(addressBook,
        {
            data: 'BEGIN:VCARD\nEND:VCARD',
            filename: 'test.vcf',
            xhr: xhr
        });

    let vcard = new dav.VCard();
    client.updateCard(vcard);
    dav.updateCard(
        vcard,
        {
            xhr: xhr
        }
    );
    vcard = new dav.VCard();
    client.deleteCard(vcard);
    dav.deleteCard(
        vcard,
        {
            xhr: xhr
        });

    addressBook = new dav.AddressBook();
    client.syncAddressBook(addressBook, {
        syncMethod: 'basic'
    });

    dav.syncAddressBook(
        addressBook,
        {
            syncMethod: 'basic',
            xhr: xhr
        });

    account = new dav.Account();
    client.syncCarddavAccount(account, { syncMethod: 'basic' });

    dav.syncCarddavAccount(
        account,
        {
            syncMethod: 'basic',
            xhr: xhr
        });
})();

(function () {
    let xhr = new dav.transport.Basic(
        new dav.Credentials({ username: 'admin', password: 'admin' })
    );

    let req: dav.Request = {
        method: 'GET',
        transformRequest: xhr => xhr
    };

    let sandbox = dav.createSandbox();
    xhr.send(req, 'http://127.0.0.1:1337', { sandbox: sandbox });
    sandbox.requestList;

    xhr.send(req, 'http://127.0.0.1:1337');
})();

(function () {
    let credentials = new dav.Credentials({
        clientId: '605300196874-1ki833poa7uqabmh3hq' +
        '6u1onlqlsi54h.apps.googleusercontent.com',
        clientSecret: 'jQTKlOhF-RclGaGJot3HIcVf',
        redirectUrl: 'https://oauth.gaiamobile.org/authenticated',
        tokenUrl: 'https://accounts.google.com/o/oauth2/token',
        authorizationCode: 'gareth'
    });

    let xhr = new dav.transport.OAuth2(credentials);

    let req = { method: 'GET' };

    credentials.accessToken = 'EXPIRED';
    credentials.refreshToken = '1/oPHTPFgECWFPrs7KgHdis24u6Xl4E4EnRrkkiwLfzdk';
    credentials.expiration = Date.now() - 1;

    xhr.send(req, 'http://127.0.0.1:1337', {
        retry: false
    });

    credentials.accessToken = 'Little Bear';
    credentials.refreshToken = 'spicy tamales';
    let expiration = credentials.expiration = Date.now() + 60 * 60 * 1000;

    credentials.accessToken = 'EXPIRED';
    credentials.refreshToken = 'raspberry pie';
    credentials.expiration = Date.now() + 60 * 60 * 1000;

    credentials.accessToken = 'EXPIRED';
    credentials.refreshToken = 'soda';
})();