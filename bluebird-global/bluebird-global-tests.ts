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
