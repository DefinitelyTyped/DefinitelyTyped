

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

/** Reference to: 
  * https://github.com/less/less.js/blob/master/lib/less/default-options.js
  */
var options: Less.Options = {
    plugins: [myPlugin],
    /** Tells less to generate a sourcemap. */
    sourceMap: {},
    /* Inline Javascript - @plugin still allowed */
    javascriptEnabled: false,
    /* Outputs a makefile import dependency list to stdout. */
    depends: false,
    /** (DEPRECATED) This does not utilise all the tricks of css compression. */
    compress: false,
    /* Runs the less parser and just reports errors without any output. */
    lint: false,
    /** Less will look for the file in @import rules through locations here. */
    paths: [],
    /* color output in the terminal */
    color: true,
    /** See: https://github.com/less/less.js/issues/656 */
    strictImports: false,
    /* Allow Imports from Insecure HTTPS Hosts */
    insecure: true,
    /** Add a path to every generated import and url in your css */
    rootpath: '',
    /** 
      * How to process math
      * 0 always           - eagerly try to solve all operations
      * 1 parens-division  - require parens for division "/"
      * 2 parens | strict  - require parens for all operations
      * 3 strict-legacy    - legacy strict behavior (super-strict)
      * https://github.com/less/less.js/blob/master/lib/less/constants.js#L2
      * https://github.com/less/less.js/blob/master/lib/less/utils.js#L54
    */
    math: 0,
    /* Guess at the output unit when it does maths. */
    strictUnits: false,
    /** Put declaration at the top of base less file. */
    globalVars: null,
    /** Put the declaration at the end of base file. */
    modifyVars: null
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