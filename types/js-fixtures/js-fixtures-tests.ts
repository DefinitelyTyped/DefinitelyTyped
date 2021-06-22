

function test_path() {
    fixtures.path = "/fixtures";
}

function test_containerId() {
    fixtures.containerId = "fixtures";
}

function test_body() {
    if (!fixtures.body()) {
        console.log('body is empty');
    }
}

function test_window() {
    if (!fixtures.window) {
        console.log('window is not set');
    }
}

function test_set() {
    fixtures.set('<div></div>');
}

function test_appendSet() {
    fixtures.appendSet('<div></div>');
}

function test_preload() {
    fixtures.preload('/dummy-fixtures.html');
}

function test_load() {
    fixtures.load('/dummy-fixtures1.html', '/dummy-fixtures2.html');
}

function test_appendLoad() {
    fixtures.appendLoad('/dummy-fixtures1.html', '/dummy-fixtures2.html');
}

function test_read() {
    fixtures.read('/dummy-fixtures1.html', '/dummy-fixtures2.html');
}

function test_clearCache() {
    fixtures.clearCache();
}

function test_clearCleanup() {
    fixtures.cleanUp();
}
