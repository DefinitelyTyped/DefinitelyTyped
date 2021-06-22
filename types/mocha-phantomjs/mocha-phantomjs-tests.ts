

function test_window() {
    window.mochaPhantomJS();    
}

function test_window_options() {
    var mochaPhantomJSWindowOptions = window.mochaPhantomJS();    
    
    var env:any = mochaPhantomJSWindowOptions.env;
    var failures:number = mochaPhantomJSWindowOptions.failures;
    var ended:boolean = mochaPhantomJSWindowOptions.ended;
    var started:boolean = mochaPhantomJSWindowOptions.started;
    
    mochaPhantomJSWindowOptions.run();
}

function test_options() {    
    mochaPhantomJS.url = 'http://www.test.com';
    mochaPhantomJS.columns = 6;
    mochaPhantomJS.mochaStartWait = 2;
    mochaPhantomJS.startTime = new Date(2014, 10, 3);
    
    mochaPhantomJS.output = 'null';
    mochaPhantomJS.output = 6;
    mochaPhantomJS.output = function(){};
}

function test_run() {
    mochaPhantomJS.run();
}

function test_customizeMocha_headers_option() {
    mochaPhantomJS.customizeMocha({ headers: {'X-Test': 'foo', 'DNT': '1'} });
}

function test_customizeMocha_cookies_option() {
    mochaPhantomJS.customizeMocha({ cookies: [
        { 'name':  'foo1', 'value': 'bar1', 'path': 'baz1' },
        { 'name':  'foo2', 'value': 'bar2', 'path': 'baz2' }
    ]});
}

function test_customizeMocha_viewportSize_option() {
    mochaPhantomJS.customizeMocha({ viewportSize: 20 });
}

function test_customizeMocha_timeout_option() {
    mochaPhantomJS.customizeMocha({ timeout: 2 });
}

function test_customizeMocha_file_option() {
    mochaPhantomJS.customizeMocha({ file: 'test.txt' });
}

function test_customizeMocha_all_options() {
    mochaPhantomJS.customizeMocha({ 
        headers: {'X-Test': 'foo', 'DNT': '1'},
        cookies: [
            { 'name':  'foo1', 'value': 'bar1', 'path': 'baz1' },
            { 'name':  'foo2', 'value': 'bar2', 'path': 'baz2' }
        ],
        viewportSize: 20,
        timeout: 2,
        file: 'test.txt' 
    });
}
