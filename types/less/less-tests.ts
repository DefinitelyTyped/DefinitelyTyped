

import less = require("less");

less.render(".class { width: (1 + 1) }").then((output) => {
    console.log(output.css);
});

less.render("fail").then((output) => {
    throw new Error("promise should have been rejected");
}, (error: Less.RenderError) => {
    console.log("rejected as expected on line number " + error.line);
});

var preProcessor: Less.PreProcessor = {
    process: (src, extra) => {
        console.log(extra.imports, extra.context);
        if (extra.fileInfo.filename === "foo.less") {
            return ".other-rule { width: (1 + 1); }\n " + src;
        } else {
            return src;
        }
    }
};

var myPlugin: Less.Plugin = {
    install: (less, pluginManager) => {
        alert(less.version[2]);
        pluginManager.addPreProcessor(preProcessor, 1000);
    }
};

var options: Less.Options = {
    plugins: [myPlugin]
};

less.render("h1 { background: red; }", options);

less.modifyVars({
  '@buttonFace': '#5B83AD',
  '@buttonText': '#D9EEF2'
}).then((output) => {
    console.log('Successfully modified vars.');
});

less.refreshStyles();

less.watch();

less.refresh(true, {
    '@buttonFace': '#5B83AD'
}, true).then((output) => {
    console.log('successfully refreshed less files');
});

if (less.importManager) {
    for (let fileName in less.importManager.contents) {
        let fileContents = less.importManager.contents[fileName];
    }
}