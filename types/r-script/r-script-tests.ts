import R = require('r-script');

function RPromise(r: R): Promise<any> {
    return new Promise((resolve, reject) => {
        r.call((err, d) => {
            if (err) {
                reject(err);
            } else {
                resolve(d);
            }
        });
    });
}

const options: R.Options = {
    dataframe: "rows",
    anotherRandomOption: true
};
const result1 = R("foo.R").data("string data param", "another one").callSync();
const result2 = R("foo.R").data("string data param", "another one").callSync(options);
R("foo.R").data("string data param", "another one").call(options, (err, d) => d);
R("foo.R").data("string data param", "another one").call((err, d) => d);
