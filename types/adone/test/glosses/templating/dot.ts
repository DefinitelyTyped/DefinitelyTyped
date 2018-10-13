namespace adoneTests.templating.dot {
    const {
        templating: {
            dot
        }
    } = adone;

    let str: string;
    let bool;
    let regexp: RegExp;

    str = dot.version;

    bool = dot.templateSettings.append;
    regexp = dot.templateSettings.conditional;
    regexp = dot.templateSettings.define;
    regexp = dot.templateSettings.defineParams;
    regexp = dot.templateSettings.encode;
    regexp = dot.templateSettings.evaluate;
    regexp = dot.templateSettings.interpolate;
    regexp = dot.templateSettings.iterate;
    bool = dot.templateSettings.selfcontained;
    bool = dot.templateSettings.strip;
    regexp = dot.templateSettings.use;
    regexp = dot.templateSettings.useParams;
    str = dot.templateSettings.varname;

    const r = dot.template("asd", {
        append: true,
        define: /a/,
        encode: /a/,
        evaluate: /a/,
        conditional: /a/,
        defineParams: /a/,
        interpolate: /a/,
        iterate: /a/,
        selfcontained: true,
        strip: false,
        use: /a/,
        useParams: /a/,
        varname: "a"
    });
    str = r("a");

    str = dot.compile("asd")();
    str = dot.compile("asd", {})();

    const a = dot.process();
    str = a["hello"]();

    dot.process({
        destination: "a"
    });
    dot.process({
        global: "a"
    });
    dot.process({
        path: "a"
    });
    dot.process({
        templateSettings: {
            append: true
        }
    });
    dot.process({
        templateSettings: {
            useParams: /a/
        }
    });
}
