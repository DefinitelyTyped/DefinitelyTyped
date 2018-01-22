import URLSearchParams = require("url-search-params");

const params = new URLSearchParams('a=1&b=2');

params.append("b", 3);

params.delete("a");
params.delete("c");

params.entries();

params.get("b");

params.getAll("b");

params.has("b");

params.keys();

params.set("b", 4);
params.set("c", 5);

params.toString();

params.values();
