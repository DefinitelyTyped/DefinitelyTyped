import convert = require("convert-source-map");

const comment =
    "//@ sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9vLmpzIiwic291cmNlcyI6WyJjb25zb2xlLmxvZyhcImhpXCIpOyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIvIn0=";

// $ExpectType string
convert.fromComment(comment).toJSON();

// $ExpectType string
convert.fromComment(comment).toURI();

// $ExpectType string
convert.fromComment(comment).toComment();

// $ExpectType string
convert.fromComment(comment).toComment({ encoding: "uri" });

// $ExpectType string
convert.fromComment(comment).setProperty("sources", ["CONSOLE.LOG(\"HI\");"]).toJSON();

// $ExpectType string
convert.fromMapFileComment(comment, filename => filename + "dummy").toJSON();
(async () => {
    // $ExpectType string
    (await convert.fromMapFileComment(comment, async filename => filename + "dummy")).toJSON();
})();

// $ExpectType string | undefined
convert.fromMapFileSource(comment, filename => filename + "dummy")?.toJSON();
(async () => {
    // $ExpectType string | undefined
    (await convert.fromMapFileSource(comment, async filename => filename + "dummy"))?.toJSON();
})();
