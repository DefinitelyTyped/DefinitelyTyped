import { del, get, head, options, patch, post, put, fetch } from "mokapi/http";

// @ts-expect-error
get();
// @ts-expect-error
get(123);
get("http://foo.bar");
// @ts-expect-error
get("", 123);
get("", {});
get("", { headers: { "Accept": "application/json" } });
get("", { maxRedirects: 3 });
get("http://foo.bar", { timeout: 3000 });
get("http://foo.bar", { timeout: "3s" });

// @ts-expect-error
post();
// @ts-expect-error
post(123);
post("http://foo.bar");
post("", 123);
post("", { foo: "bar" });
// @ts-expect-error
post("", {}, 123);
post("", "", { headers: { "Accept": "application/json" } });
post("", undefined, { maxRedirects: 3 });
post("http://foo.bar", undefined, { timeout: 3000 });
post("http://foo.bar", undefined, { timeout: "3s" });

// @ts-expect-error
put();
// @ts-expect-error
put(123);
put("http://foo.bar");
put("", 123);
put("", { foo: "bar" });
// @ts-expect-error
put("", {}, 123);
put("", "", { headers: { "Accept": "application/json" } });
put("", undefined, { maxRedirects: 3 });
put("http://foo.bar", undefined, { timeout: 3000 });
put("http://foo.bar", undefined, { timeout: "3s" });

// @ts-expect-error
head();
// @ts-expect-error
head(123);
head("http://foo.bar");
head("", { headers: { "Accept": "application/json" } });
head("", { maxRedirects: 3 });
head("http://foo.bar", { timeout: 3000 });
head("http://foo.bar", { timeout: "3s" });

// @ts-expect-error
patch();
// @ts-expect-error
patch(123);
patch("http://foo.bar");
patch("", 123);
patch("", { foo: "bar" });
// @ts-expect-error
patch("", {}, 123);
patch("", "", { headers: { "Accept": "application/json" } });
patch("", undefined, { maxRedirects: 3 });
patch("http://foo.bar", undefined, { timeout: 3000 });
patch("http://foo.bar", undefined, { timeout: "3s" });

// @ts-expect-error
del();
// @ts-expect-error
del(123);
del("http://foo.bar");
del("", 123);
del("", { foo: "bar" });
// @ts-expect-error
del("", {}, 123);
del("", "", { headers: { "Accept": "application/json" } });
del("", undefined, { maxRedirects: 3 });
del("http://foo.bar", undefined, { timeout: 3000 });
del("http://foo.bar", undefined, { timeout: "3s" });

// @ts-expect-error
options();
// @ts-expect-error
options(123);
options("http://foo.bar");
options("", 123);
options("", { foo: "bar" });
// @ts-expect-error
options("", {}, 123);
options("", "", { headers: { "Accept": "application/json" } });
options("", { maxRedirects: 3 });
options("http://foo.bar", undefined, { timeout: 3000 });
options("http://foo.bar", undefined, { timeout: "3s" });

// @ts-expect-error
fetch();
fetch("http://foo.bar");
fetch("http://foo.bar", {});
fetch("http://foo.bar", { method: "POST" });
// @ts-expect-error
fetch("http://foo.bar", { method: 12 });
fetch("http://foo.bar", { headers: { "Accept": "application/json" } });
fetch("http://foo.bar", { body: { foo: "bar" } });
fetch("http://foo.bar", { maxRedirects: 1 });
fetch("http://foo.bar", { timeout: 3000 });
fetch("http://foo.bar", { timeout: "3s" });