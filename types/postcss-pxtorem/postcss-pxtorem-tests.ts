import postcss from "postcss";
import pxtorem = require("postcss-pxtorem");

postcss([pxtorem]);
postcss([pxtorem()]);
postcss([pxtorem({})]);

pxtorem({ rootValue: 16 });
// @ts-expect-error
pxtorem({ rootValue: "16px" });

pxtorem({ unitPrecision: 5 });
// @ts-expect-error
pxtorem({ unitPrecision: "5" });

pxtorem({ propList: ["*"] });
// @ts-expect-error
pxtorem({ propList: [false] });

pxtorem({ selectorBlackList: ["body"] });
// @ts-expect-error
pxtorem({ selectorBlackList: [false] });

pxtorem({ replace: true });
// @ts-expect-error
pxtorem({ replace: "true" });

pxtorem({ mediaQuery: true });
// @ts-expect-error
pxtorem({ mediaQuery: "true" });

pxtorem({ minPixelValue: 2 });
// @ts-expect-error
pxtorem({ minPixelValue: "2" });

pxtorem({ exclude: "file" });
// @ts-expect-error
pxtorem({ exclude: 2 });

pxtorem({ rootValue: () => 16 });
// @ts-expect-error
pxtorem({ rootValue: () => "16px" });

pxtorem({ root_value: 16 });
// @ts-expect-error
pxtorem({ root_value: "16px" });

pxtorem({ root_value: () => 16 });
// @ts-expect-error
pxtorem({ root_value: () => "16px" });

pxtorem({ unit_precision: 5 });
// @ts-expect-error
pxtorem({ unit_precision: "5" });

pxtorem({ selector_black_list: ["body"] });
// @ts-expect-error
pxtorem({ selector_black_list: [false] });

pxtorem({ prop_white_list: ["*"] });
// @ts-expect-error
pxtorem({ prop_white_list: [false] });

pxtorem({ media_query: true });
// @ts-expect-error
pxtorem({ media_query: "true" });

pxtorem({ propWhiteList: ["*"] });
// @ts-expect-error
pxtorem({ propWhiteList: [false] });
