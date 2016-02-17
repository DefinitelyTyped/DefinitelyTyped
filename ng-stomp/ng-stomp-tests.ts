/// <reference path="../angularjs/angular.d.ts" />
/// <reference path="ng-stomp.d.ts" />

module ngStompTesting {

    "use strict";
    var ngStompTest = "ngStompTest";

    class test {
        constructor(private ngstomp:ngStomp) {
            var connectHeaders ={
                "Auth": "user",
                "Accept": "lol"
            };

            ngstomp.connect('/endpoint', connectHeaders)


                // frame = CONNECTED headers
                .then(function (frame) {

                    this.subscription = ngstomp.subscribe('/dest', function (payload, headers, res) {
                        this.payload = payload;
                    }, {
                        "headers": "are awesome"
                    });

                    // Unsubscribe
                    this.subscription.unsubscribe();

                    // Send message
                    ngstomp.send('/dest', {
                        message: 'body'
                    }, {
                        priority: 9,
                        custom: 42 //Custom Headers
                    });

                    // Disconnect
                    ngstomp.disconnect(function () {

                    });
                });
        }

    }

    angular.module("app").controller(ngStompTest, test);
}