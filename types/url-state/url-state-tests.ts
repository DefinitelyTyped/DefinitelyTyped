import url from "url-state";

const replace: boolean | undefined = <any> {};

url.addEventListener("change", () => {
});

url.push("/pathnames");
url.pop();
url.push("#hashes");
url.pop();
url.push("?query=strings");
url.query({ query: "objects" }, true);
url.query({ query: null }, true);
url.pop();
const back: boolean = url.back;

const params: Record<string, any> = url.params;

const fauxUrl: Partial<URL> = url;
const { href, protocol, hostname, port, pathname, search, hash, host, origin } = fauxUrl;

// v3

url.push({ pathname: "/foo", replace });
url.push({ query: "?foo=bar", replace });
url.push({ params: "?foo=bar", replace });
url.push({ hash: "#hash", replace });
url.push({
    hash: "#hash",
    query: "?foo=bar",
    pathname: "/foo",
    replace,
});
url.push({
    hash: "#hash",
    query: "?foo=bar",
    pathname: "/foo",
}, true);

url.replace({ pathname: "/foo" });
url.replace({ query: "?foo=bar" });
url.replace({ hash: "#hash" });
url.replace({
    hash: "#hash",
    query: "?foo=bar",
    pathname: "/foo",
});
