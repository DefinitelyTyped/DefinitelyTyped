import * as hb from "handbrake-js";

const options: hb.HandbrakeOptions = {
    version: true,
};

hb.exec(options, (err, stdout, stderr) => {
    if (err) {
        console.error(err);
        return;
    }

    console.log(stdout, stderr);
});

hb.run(options).then(result => {
    console.log(result.stdout, result.stderr);
}).catch(err => {
    console.error(err);
});

hb.spawn({
    input: "something.avi",
    output: "something.mp4",
    preset: "Normal",
    rotate: "1",
}).on("progress", (progress) => {
    console.log(progress.percentComplete);
}).on("error", (err) => {
    console.error(err);
}).on("end", () => {
    console.log("Process ended");
});
