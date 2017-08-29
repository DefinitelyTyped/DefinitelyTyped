import * as URLSearchParams from "url-search-params";

const params: URLSearchParams.URLSearchParams = new URLSearchParams();

params.append("a", "1");

params.delete("a");

params.get("a");

params.has("a");

params.getAll();

params.toString();
