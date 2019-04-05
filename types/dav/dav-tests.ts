import * as dav from "dav";

(() => {
    const xhr = new dav.transport.Basic(
        new dav.Credentials({
            username: 'xxx',
            password: 'xxx'
        })
    );

    dav.createAccount({ server: 'http://dav.example.com', xhr })
        .then((account) => {
            account.calendars.forEach(() => {
            });
        });
    const client = new dav.Client(xhr);

    client.createAccount({
        server: 'http://dav.example.com',
        accountType: 'carddav'
    }).then((account) => {
        account.addressBooks.forEach(() => {
        });
    });
})();

(() => {
    const client = new dav.Client(
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

    const req = dav.request.basic({
        method: 'PUT',
        data: 'BEGIN:VCALENDAR\nEND:VCALENDAR',
        etag: '12345'
    });

    client.send(req, '/calendars/123.ics')
        .then(() => { });
})();

(() => {
    const xhr = new dav.transport.Basic(
        new dav.Credentials({
            username: 'xxx',
            password: 'xxx'
        })
    );

    const req = dav.request.basic({
        method: 'PUT',
        data: 'BEGIN:VCALENDAR\nEND:VCALENDAR',
        etag: '12345'
    });

    xhr.send(req, 'https://mail.mozilla.com/calendars/123.ics')
        .then(() => {
        });
})();

dav.debug.enabled = true;

(() => {
    const xhr = new dav.transport.Basic(
        new dav.Credentials({
            username: 'Killer BOB',
            password: 'blacklodge'
        })
    );

    const client = new dav.Client(xhr, { baseUrl: 'https://mail.mozilla.com' });

    const url = 'https://mail.mozilla.com/';
    const req = dav.request.basic({
        method: 'PUT',
        data: 'BEGIN:VCALENDAR\nEND:VCALENDAR',
        etag: 'abc123'
    });

    const sandbox = dav.createSandbox();
    client.send(req, url, { sandbox });
    xhr.send(req, url, { sandbox });

    client.createAccount({ sandbox: {}, server: 'http://dav.example.com' });
    dav.createAccount({
        sandbox: {},
        server: 'http://dav.example.com',
        xhr
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
            xhr
        });

    let object = new dav.CalendarObject();
    client.updateCalendarObject(object);
    dav.updateCalendarObject(
        object,
        {
            xhr
        }
    );

    object = new dav.CalendarObject();
    client.deleteCalendarObject(object);
    dav.deleteCalendarObject(
        object,
        {
            xhr
        }
    );

    calendar = new dav.Calendar();
    client.syncCalendar(calendar, { syncMethod: 'webdav' });
    dav.syncCalendar(
        calendar,
        {
            syncMethod: 'webdav',
            xhr
        }
    );

    let account = new dav.Account();
    client.syncCaldavAccount(account, { syncMethod: 'webdav' });
    dav.syncCaldavAccount(
        account,
        {
            syncMethod: 'webdav',
            xhr
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
            xhr
        });

    let vcard = new dav.VCard();
    client.updateCard(vcard);
    dav.updateCard(
        vcard,
        {
            xhr
        }
    );
    vcard = new dav.VCard();
    client.deleteCard(vcard);
    dav.deleteCard(
        vcard,
        {
            xhr
        });

    addressBook = new dav.AddressBook();
    client.syncAddressBook(addressBook, {
        syncMethod: 'basic'
    });

    dav.syncAddressBook(
        addressBook,
        {
            syncMethod: 'basic',
            xhr
        });

    account = new dav.Account();
    client.syncCarddavAccount(account, { syncMethod: 'basic' });

    dav.syncCarddavAccount(
        account,
        {
            syncMethod: 'basic',
            xhr
        });
})();

(() => {
    const xhr = new dav.transport.Basic(
        new dav.Credentials({ username: 'admin', password: 'admin' })
    );

    const req: dav.Request = {
        method: 'GET',
        transformRequest: (xhr: any) => xhr
    };

    const sandbox = dav.createSandbox();
    xhr.send(req, 'http://127.0.0.1:1337', { sandbox });
    sandbox.requestList;

    xhr.send(req, 'http://127.0.0.1:1337');
})();

(() => {
    const credentials = new dav.Credentials({
        clientId: '605300196874-1ki833poa7uqabmh3hq' +
            '6u1onlqlsi54h.apps.googleusercontent.com',
        clientSecret: 'jQTKlOhF-RclGaGJot3HIcVf',
        redirectUrl: 'https://oauth.gaiamobile.org/authenticated',
        tokenUrl: 'https://accounts.google.com/o/oauth2/token',
        authorizationCode: 'gareth'
    });

    const xhr = new dav.transport.OAuth2(credentials);

    const req = { method: 'GET' };

    credentials.accessToken = 'EXPIRED';
    credentials.refreshToken = '1/oPHTPFgECWFPrs7KgHdis24u6Xl4E4EnRrkkiwLfzdk';
    credentials.expiration = Date.now() - 1;

    xhr.send(req, 'http://127.0.0.1:1337', {
        retry: false
    });

    credentials.accessToken = 'Little Bear';
    credentials.refreshToken = 'spicy tamales';
    const expiration = credentials.expiration = Date.now() + 60 * 60 * 1000;

    credentials.accessToken = 'EXPIRED';
    credentials.refreshToken = 'raspberry pie';
    credentials.expiration = Date.now() + 60 * 60 * 1000;

    credentials.accessToken = 'EXPIRED';
    credentials.refreshToken = 'soda';
})();
