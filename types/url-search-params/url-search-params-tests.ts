import URLSearchParams = require("url-search-params");

const params = new URLSearchParams('a=1&b=2');

params.append("c", "3");

params.delete("a");

params.entries();

params.get("b");

params.getAll("b");

params.has("b");

params.keys();

params.set("d", "4")

params.toString();

params.values();
