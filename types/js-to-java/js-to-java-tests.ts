import java = require("js-to-java");
const javaObj: object = java("java.lang.String", "hello world");

// const cur1 = java.Currency();
const cur1 = java.Currency(null);
const cur2 = java.Currency("eu");
const cur3 = java.Currency({ currencyCode: "eu" });
const cur4 = java.Currency({ currencyCode: "cn", other: 1});
// const cur4 = java.Currency({ currencyCode: 100 });

const arrStr = java.array.String(["a", "b"]);
