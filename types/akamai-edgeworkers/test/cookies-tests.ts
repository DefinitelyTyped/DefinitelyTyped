import { Cookies, SetCookie } from 'cookies';

function onClientRequest(request: EW.IngressClientRequest) {
    // Verify parse constructor
    const c = new Cookies(request.getHeader('cookies') || undefined);

    // Verify toHeader()
    const s: string = c.toHeader();

    // Verify get()
    let v = c.get('first');
    if (v !== '1st value') {
        request.respondWith(543, {}, "Wrong value for first cookie. Got " + v);
        return;
    }

    v = c.get('m i s s i n g');
    if (typeof v !== 'undefined') {
        request.respondWith(544, {}, "Got a value for a missing header: " + v);
        return;
    }

    // getAll()
    const all: string[] = c.getAll('z');

    // names()
    const names: string[] = c.names();

    c.add('name', 'value');

    c.delete('name');
}

function onClientRequest2(request: EW.IngressClientRequest) {
    // The values passed to SetCookie can be ignored - they're just to verify the compiler.
    const c = new SetCookie({
        name: "n",
        sameSite: true
    });
    c.name = "le name";
    c.value = "le value";
    c.maxAge = 5;
    c.domain = "le domain";
    c.path = "le path";
    c.expires = new Date('2013-02-21T06:55:00');

    c.httpOnly = true;
    c.secure = false;
    c.sameSite = "Lax";
    request.respondWith(234, { SetCookie: c.toHeader() }, "");
}
