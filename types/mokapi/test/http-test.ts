import { del, get, head, options, patch, post, put } from "mokapi/http";

// @ts-expect-error
get();
// @ts-expect-error
get(123);
get("http://foo.bar");
// @ts-expect-error
get("", 123);
get("", {});
get("", { header: { "Accept": "application/json" } });

// @ts-expect-error
post();
// @ts-expect-error
post(123);
post("http://foo.bar");
post("", 123);
post("", { foo: "bar" });
// @ts-expect-error
post("", {}, 123);
post("", "", { header: { "Accept": "application/json" } });

// @ts-expect-error
put();
// @ts-expect-error
put(123);
put("http://foo.bar");
put("", 123);
put("", { foo: "bar" });
// @ts-expect-error
put("", {}, 123);
put("", "", { header: { "Accept": "application/json" } });

// @ts-expect-error
head();
// @ts-expect-error
head(123);
head("http://foo.bar");
head("", { header: { "Accept": "application/json" } });

// @ts-expect-error
patch();
// @ts-expect-error
patch(123);
patch("http://foo.bar");
patch("", 123);
patch("", { foo: "bar" });
// @ts-expect-error
patch("", {}, 123);
patch("", "", { header: { "Accept": "application/json" } });

// @ts-expect-error
del();
// @ts-expect-error
del(123);
del("http://foo.bar");
del("", 123);
del("", { foo: "bar" });
// @ts-expect-error
del("", {}, 123);
del("", "", { header: { "Accept": "application/json" } });

// @ts-expect-error
options();
// @ts-expect-error
options(123);
options("http://foo.bar");
options("", 123);
options("", { foo: "bar" });
// @ts-expect-error
options("", {}, 123);
options("", "", { header: { "Accept": "application/json" } });
