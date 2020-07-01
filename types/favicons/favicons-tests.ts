import * as favicons from "favicons";

let config: Partial<favicons.Configuration> = {
    path: "/foo/bar"
};

config = {
    icons: {
        android: true,
        favicons: {
            ovelayShadow: false
        }
    }
};

let html = "";
favicons("path/to/file.png", config, (err, res) => {
    html = res.html.join("");

    for (const { name, contents } of [...res.files, ...res.images]) {
        html = name + contents.toString();
    }
});

favicons("file.png", (err: any, res: any) => {
    html = res.html.join("");

    for (const { name, contents } of [...res.files, ...res.images]) {
        html = name + contents.toString();
    }
});

favicons("file.png").then((res) => {
    html = res.html.join("");

    for (const { name, contents } of [...res.files, ...res.images]) {
        html = name + contents.toString();
    }
});
