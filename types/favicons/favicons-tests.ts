import favicons, { Configuration } from "favicons";

let config: Partial<Configuration> = {
    path: "/foo/bar"
};

config = {
    icons: {
        android: true
    }
};

let html = "";
favicons("path/to/file.png", config, (err, res) => {
    html = res.html.join("");

    for (const { name, contents } of [...res.files, ...res.images]) {
        html = name + contents.toString();
    }
});

favicons("file.png", (err, res) => {
    html = res.html.join("");

    for (const { name, contents } of [...res.files, ...res.images]) {
        html = name + contents.toString();
    }
});
