import URLSearchParams = require("url-search-params");

new URLSearchParams([["1", "2"]]);
new URLSearchParams({ x: "y" });
new URLSearchParams();
new URLSearchParams(new URLSearchParams());

const params = new URLSearchParams("a=1&b=2");

params.append("b", "3");
params.delete("a");
params.delete("c");
params.get("b");
params.get("d");
params.getAll("b");
params.has("b");
params.keys();
params.set("b", "4");
params.set("c", "5");
params.toString();
params.values();

params.forEach((value, key, params) => {
    const test: [string, string, URLSearchParams] = [value, key, params];
});

for (const [key, value] of params) {
    const test: [string, string] = [key, value];
}

for (const [key, value] of params.entries()) {
    const test: [string, string] = [key, value];
}
