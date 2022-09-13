import 'browser-report';

function test_sync() {
    var browserInfo = window.browserReportSync();
    console.log(browserInfo.browser.name);    
}

function test_async() {
    window.browserReport((error, result) => {
        console.log(result.ip + ' ' + result.browser.name);
    });    
}
