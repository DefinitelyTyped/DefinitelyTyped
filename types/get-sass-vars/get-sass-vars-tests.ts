import sassVars = require("get-sass-vars");

(async () => {
    // $ExpectType Record<string, unknown>
    const vars = await sassVars(
        `
        $a: red;
        $b: #000;
        $c: 10px;`,
        {
            camelize: true,
            sassOptions: {
                data: "",
                includePaths: [
                    "/workspace/src/scss",
                ],
            },
        },
    );

    // $ExpectType unknown
    vars["$a"];
})();
