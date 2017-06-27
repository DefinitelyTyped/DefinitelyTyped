/// <reference types="qunit" />

class Tests {
    private _noErrorCallbackExpected: (jqXHR: JQueryXHR, textStatus: string, errorThrown: string) => any;
    private _defaultMockjaxSettings: MockJaxSettings;

    run(): void {
        const self = this;

        let t = QUnit.test;

        QUnit.begin(() => {

            self._noErrorCallbackExpected = (jqXHR: JQueryXHR, textStatus: string, errorThrown: string): any => {
                QUnit.assert.ok(false, 'Error callback executed');
            };

            // Speed up our tests
            $.mockjaxSettings.responseTime = 0;
            $.mockjaxSettings.logging = false;
            self._defaultMockjaxSettings = $.mockjaxSettings;
        });

        QUnit.testDone(() => {
            $.mockjax.clear();
            $.mockjaxSettings = self._defaultMockjaxSettings;
        });

        QUnit.module('Core');

        t('Return XMLHttpRequest object from $.ajax', (assert) => {
            $.mockjax({
                url: '/xmlhttprequest',
                responseText: 'Hello Word'
            });

            let xhr = $.ajax({
                url: '/xmlhttprequest',
                complete: () => { }
            });

            if (xhr && xhr.abort) {
                xhr.abort();
            }

            assert.ok(xhr, 'XHR object is not null or undefined');
            assert.ok(xhr.done && xhr.fail, 'Got Promise methods');
        });

        t('Intercept synchronized proxy calls and return synchronously', (assert) => {
            $.mockjax({
                url: '/proxy',
                proxy: 'test_proxy.json'
            });

            $.ajax({
                url: '/proxy',
                dataType: 'json',
                async: false,
                success: (json) => {
                    assert.ok(json && json.proxy, 'Proxy callback request succeeded');
                },
                error: self._noErrorCallbackExpected
            });
        });

        t('Intercept asynchronized proxy calls', (assert) => {
            let done = assert.async();
            $.mockjax({
                url: '/proxy',
                proxy: 'test_proxy.json'
            });

            $.ajax({
                url: '/proxy',
                dataType: 'json',
                success: (json) => {
                    assert.ok(json && json.proxy, 'Proxy callback request succeeded');
                    done();
                },
                error: self._noErrorCallbackExpected
            });
        });

        t('Intercept and proxy (sub-ajax request)', (assert) => {
            let done = assert.async();

            $.mockjax({
                url: '/proxy',
                proxy: 'test_proxy.json'
            });

            $.ajax({
                url: '/proxy',
                dataType: 'json',
                success: (json) => {
                    assert.ok(json && json.proxy, 'Proxy request succeeded');
                },
                error: self._noErrorCallbackExpected,
                complete: done
            });
        });

        t('Proxy type specification', (assert) => {
            let done = assert.async();

            $.mockjax({
                url: '/proxy',
                proxy: 'test_proxy.json',
                proxyType: 'GET'
            });

            $.ajax({
                url: '/proxy',
                error: self._noErrorCallbackExpected,
                dataType: 'json',
                success: (json) => {
                    assert.ok(json && json.proxy, 'Proxy request succeeded');
                },
                complete: done
            });
        });

        t('Support 1.5 $.ajax(url, settings) signature.', (assert) => {
            let done = assert.async();

            $.mockjax({
                url: '/resource',
                responseText: 'Hello World'
            });

            $.ajax('/resource', {
                success: (response) => {
                    assert.equal(response, 'Hello World');
                },
                error: self._noErrorCallbackExpected,
                complete: done
            });
        });

        t('Dynamic response callback', (assert) => {
            let done = assert.async();

            let settings: MockJaxSettings = {
                url: '/response-callback',
                response: (settings) => {
                    settings.responseText = settings.data.response + ' 2';
                }
            };

            $.mockjax(settings);

            $.ajax({
                url: '/response-callback',
                dataType: 'text',
                data: {
                    response: 'Hello world'
                },
                error: self._noErrorCallbackExpected,
                complete: (xhr) => {
                    assert.equal(xhr.responseText, 'Hello world 2', 'Response Text matches');
                    done();
                }
            });
        });

        t('Asyncronous response callback', (assert) => {
            let done = assert.async();

            let settings: MockJaxSettings = {
                url: '/async-response-callback',
                response: (settings, completed) => {
                    setTimeout(() => {
                        settings.responseText = settings.data.response + ' 3';
                        completed();
                    }, 10);
                }
            };

            $.mockjax(settings);

            $.ajax({
                url: '/async-response-callback',
                dataType: 'text',
                data: {
                    response: 'Hello world'
                },
                error: self._noErrorCallbackExpected,
                complete: (xhr) => {
                    assert.equal(xhr.responseText, 'Hello world 3', 'Response Text matches');
                    done();
                }
            });
        });
    }
}

new Tests().run();
