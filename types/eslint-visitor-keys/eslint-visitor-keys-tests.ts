import * as evk from "eslint-visitor-keys";

const keys = evk.KEYS.ArrayExpression;
if (keys) {
    const stringArray: ReadonlyArray<string> = keys;
}
const stringArray: ReadonlyArray<string> = evk.getKeys({type: "Literal", value: 777, raw: "777"});
const keys2: evk.VisitorKeys = evk.unionWith({
    Decorator: ["expression"],
    CustomType: [],
    CustomType2: ["aaaa", "bbbb"]
});
