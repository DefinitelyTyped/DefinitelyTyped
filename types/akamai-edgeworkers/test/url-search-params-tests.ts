import URLSearchParams from 'url-search-params';

export function onClientRequest(request: EW.IngressClientRequest) {
    const params = new URLSearchParams(request.query);

    params.append("from-script", "from-value");
    params.delete("to-delete");

    let gotten = params.get('m i s s i n g');
    if (gotten != null) {
        request.respondWith(404, {}, 'busted in get() null check');
        return;
    }

    gotten = params.get('from-script');
    if (gotten !== 'from-value') {
        request.respondWith(404, {}, 'didn\'t get() value');
        return;
    }

    if (params.has('nope')) {
        request.respondWith(404, {}, 'has() found a non-existent value');
        return;
    }

    if (!params.has('from-script')) {
        request.respondWith(404, {}, 'has() didn\'t find an expected value');
        return;
    }

    if (params.getAll('nope').length === 0) {
        // excelsior
    } else {
        request.respondWith(404, {}, 'getAll() test failed');
        return;
    }

    let entriesCount = 0;
    for (const [k, v] of params.entries()) {
        entriesCount++;
    }

    let keysCount = 0;
    for (const [k, v] of params.keys()) {
        keysCount++;
    }

    let valuesCount = 0;
    for (const [k, v] of params.values()) {
        valuesCount++;
    }

    if (entriesCount !== keysCount || keysCount !== valuesCount) {
        request.respondWith(404, {}, 'iteration counts didn\'t add up');
        return;
    }

    params.set("setted", "value-setted");

    request.setHeader("foo", params.toString());

    request.respondWith(282, {}, 'succeeded');
}
