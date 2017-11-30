import URLSearchParams = require("url-search-params");

const params = new URLSearchParams();

params.append("a", "1");

params.delete("a");

params.get("a");

params.has("a");

params.getAll();

params.toString();
