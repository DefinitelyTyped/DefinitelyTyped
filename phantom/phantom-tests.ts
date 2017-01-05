import phantom = require("phantom");

phantom.create().then((ph: phantom.PhantomJS): void => {
    ph.createPage().then((page): void => {
        page.open("http://www.google.com").then((status: string) => {
            console.log("opened google? ", status);
            return page.evaluate((): string => {
                return document.title;
            });
        }).then((result: string): void => {
            console.log('Page title is ' + result);
            ph.exit();
        });
    });
});

phantom.create(["--web-security=no", "--ignore-ssl-errors=yes"]).then((ph) => {
    console.log("Phantom Bridge Initiated");
    ph.createPage().then((page) => {
        console.log("Page created!");

        return page.open("http://www.google.com").then(function(status) {
            if (status == "success") {
                console.log("Page is open!");
            }

            return page.evaluate(function() {
                var title = (<HTMLElement>document.querySelector("title")).innerText;
                console.log("The page title is " + title);
            });
        }).then(() => {
            return page.evaluate(function(selector) {
                var text = (<HTMLElement>document.querySelector(selector)).innerText;
                console.log(selector + " contains the following text: " + text);
            }, "title");
        }).then(() => {
            page.evaluate(f => f + 1, "zero");
            return page.evaluate(function(selector) {
                var text = (<HTMLElement>document.querySelector(selector)).innerText
                return text
            }, "mySelector")
        }).then(function(result) {
            console.log("The element contains the following text: " + result)

            return page.property('onConsoleMessage', function(msg: string) {
                console.log("Phantom Console: " + msg);
            });
        }).then(() => {
            return page.property('onUrlChanged', function(url: string) {
                console.log("New URL: " + url);
            });
        }).then(() => {
            return page.property('onResourceRequested', function() {
                console.log("Resource requested..");
            });
        }).then(() => {
            return page.property('onResourceReceived', function(res: any) {
                if (res.stage == 'end') {
                    console.log("Resource received!")
                }
            });
        }).then(() => {
            return page.property('onLoadStarted', function() {
                console.log("Loading started");
            });
        }).then(() => {
            return page.property('onLoadFinished', function(status: string) {
                console.log("Loading finished, the page is " + ((status == "success") ? "open." : "not open!"));
            });
        }).then(() => {
            return page.property('settings.loadImages', false);
        }).then(() => {
            return page.property('settings.resourceTimeout', 1000);
        }).then(() => {
            return page.property('settings.viewportSize', {
                width: 1920,
                height: 1080
            });
        }).then(() => {
            return page.open("http://google.co.jp");
        }).then((status) => {
            return page.render("/tmp/google-top.jpg", {
                format: 'jpeg',
                quality: '80'
            });
        }).then(() => {
            return page.close();
        });
    }).then(() => {
        ph.exit();
    });
});

phantom.create().then((ph) => {
    return ph.createPage().then((page) => {
        page.open("http://localhost:9901/cookie").then((status) => {
            var someFunc = (aaa: string, my_obj: Object) => {
                var attribute_to_want = aaa;
                var h2Arr: string[] = [];
                var results = document.querySelectorAll(attribute_to_want);
                for (var i = 0, len = results.length; i < len; ++i) {
                    var result = <HTMLElement>results[i];
                    h2Arr.push(result.innerText);
                }
                return {
                    h2: h2Arr,
                    aaa: this.arguments,
                    obj: my_obj
                };
            };
            var finishedFunc = (result: any) => {
                ph.exit();
            };
            return page.evaluate<string, { wahtt: number; }, void>(someFunc, 'div', { wahtt: 111 }).then(finishedFunc);
        });
    }).then(() => {
        return ph.createPage().then((page) => {
            page.open('http://www.phantomjs.org').then((status) => {
                if (status === 'success') {
                    page.includeJs('http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js').then(() => {
                        page.injectJs('do.js').then((res) => {
                            page.evaluate(() => {
                                return document.title;
                            }).then((title: string) => {
                                console.log(title);
                                ph.exit();
                            });
                        });
                    });

                    page.sendEvent('click', 350, 320);
                    page.sendEvent('click', 350, 320, 'right');
                    page.sendEvent('keypress', 'A', null, null, 0x02000000 | 0x08000000);
                    page.sendEvent('keypress', 'A');
                }
            });
        });
    });
});