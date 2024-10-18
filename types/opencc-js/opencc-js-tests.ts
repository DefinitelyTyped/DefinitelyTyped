import OpenCC = require("opencc-js");

OpenCC.Converter({});
OpenCC.Converter({ from: "cn" });
OpenCC.Converter({ to: "hk" });
OpenCC.Converter({ from: "hk", to: "tw" });

OpenCC.CustomConverter([]);
OpenCC.CustomConverter([["a", "b"]]);

declare const rootNode: Element;
const handler = OpenCC.HTMLConverter(OpenCC.Converter({}), rootNode, "zh-CN", "zh-TW");
handler.convert();
handler.restore();
