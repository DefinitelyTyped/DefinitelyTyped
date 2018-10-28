import transform = require("parallel-transform");

let stream = transform(10, (data, callback) => {
    setTimeout(() => callback(undefined, data), Math.random() * 1000);
});

stream.write("1");
stream.write("2");
stream.write("3");
stream.write("4");
stream.end();

stream.on("data", data => console.log(data.toString()));
stream.on("end", () => "end of stream");

stream = transform(10, { objectMode: false },
    (data, callback) => callback(undefined, data));

stream = transform({ ordered: false }, (data, callback) => callback(new Error("fail"), null));
