function testSomeStaticMethods() {
    Promise.config({});
    Promise.delay(100).then(() => {});
    Promise.all([]).finally(() => {});
}

function testFunctionReturningPromise() {
    function functionReturningPromise(): Promise<string> {
        return new Promise<string>((resolve, reject, onCancel) => {
            if (onCancel) {
                onCancel(() => {
                    console.log("onCancel cleanup");
                });
            }

            resolve("lorem ipsum");
        })
            .then((value) => {
                return value + " dolor";
            });
    }

    functionReturningPromise()
        .then((value) => {
            console.log("then callback: " + value);
        })
        .finally(() => {
            console.log("finally callback");
        });
}

function testPromiseRejection() {
    new Promise<string>((resolve, reject) => {
        reject(new Error("problem occurred"));
    })
        .catch((error) => {
            return "recovered from error";
        })
        .then((value) => {
            return value.toUpperCase();
        });
}

function testGithubTicket28081Regression() {
    Promise.resolve([3]).map((n: number) => true);
}

import Bluebird = require("bluebird");

function testTheWalkaroundForCastingGlobalPromiseToBluebirdPromise() {
    const bluebirdString: Bluebird<string> = Bluebird.resolve(
        new Promise<string>(() => 'Lorem ipsum')
    );
}
