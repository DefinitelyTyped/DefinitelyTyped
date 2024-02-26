import { cron, date, env, every, HttpEventHandler, HttpRequest, HttpResponse, on, sleep } from "mokapi";
import { KafkaRecord } from "mokapi/kafka";
import { LdapSearchRequest, LdapSearchResponse } from "mokapi/ldap";

const handler = () => {
    return false;
};

// @ts-expect-error
on("foo");
// @ts-expect-error
on("http", () => {});
on("http", (): boolean => {
    return false;
});
// @ts-expect-error
on("http", (s: string): boolean => {
    return false;
});
on("http", (req: HttpRequest, res: HttpResponse): boolean => {
    return false;
});
on("kafka", (): boolean => {
    return false;
});
// @ts-expect-error
on("kafka", (s: string): boolean => {
    return false;
});
on("kafka", (r: KafkaRecord): boolean => {
    return false;
});
on("ldap", (): boolean => {
    return false;
});
// @ts-expect-error
on("ldap", (s: string): boolean => {
    return false;
});
on("ldap", (req: LdapSearchRequest, res: LdapSearchResponse): boolean => {
    return false;
});
// @ts-expect-error
on("http", handler, "");
on("http", handler, {});
on("http", handler, { tags: { foo: "bar" } });

// @ts-expect-error
every(12, () => {});
every("12m", () => {});
// @ts-expect-error
every("12m", () => {}, 12);
every("12m", () => {}, {});
every("12m", () => {}, { tags: { foo: "bar" } });
// @ts-expect-error
every("12m", () => {}, { times: "" });
every("12m", () => {}, { times: 3 });
// @ts-expect-error
every("12m", () => {}, { runFirstTimeImmediately: 1 });
every("12m", () => {}, { runFirstTimeImmediately: true });

// @ts-expect-error
cron(12, () => {});
cron("12m", () => {});
// @ts-expect-error
cron("12m", () => {}, 12);
cron("12m", () => {}, {});
cron("12m", () => {}, { tags: { foo: "bar" } });
// @ts-expect-error
cron("12m", () => {}, { times: "" });
cron("12m", () => {}, { times: 3 });
// @ts-expect-error
cron("12m", () => {}, { runFirstTimeImmediately: 1 });
cron("12m", () => {}, { runFirstTimeImmediately: true });

// @ts-expect-error
env(12);
// @ts-expect-error
env({});
env("foo");
// @ts-expect-error
const v1: int = env("foo");
const v2: string = env("foo");

// @ts-expect-error
date("");
// @ts-expect-error
date(12345);
date();
// @ts-expect-error
const d1: int = date();
const d2: string = date();
date({});
// @ts-expect-error
date({ layout: "foo" });
date({ layout: "DateOnly" });
// @ts-expect-error
date({ timestamp: "123" });
date({ timestamp: 123 });

// @ts-expect-error
sleep({});
sleep(12);
sleep("1s");

// @ts-expect-error
let h: HttpEventHandler = () => {};
h = () => {
    return false;
};
// @ts-expect-error
h = (s: string) => {
    return false;
};
// @ts-expect-error
h = (s: LdapSearchRequest) => {
    return false;
};
h = (req: HttpRequest) => {
    return false;
};
// @ts-expect-error
h = (req: HttpRequest, s: string) => {
    return false;
};
h = (req: HttpRequest, res: HttpResponse) => {
    return false;
};
h = (req: HttpRequest, res: HttpResponse) => {
    // @ts-expect-error
    res.statusCode = "200";
    res.statusCode = 200;
    // @ts-expect-error
    res.body = {};
    // @ts-expect-error
    res.body = 12;
    res.body = "foo";
    res.data = 12;
    res.data = "foo";
    res.data = {};
    // @ts-expect-error
    res.headers.foo = 12;
    res.headers.foo = "bar";
    res.headers["Content-Type"] = "application/json";

    return false;
};

on("http", function(request, response) {
    if (request.url.host === "mokapi.io") {}
    if (request.url.query === "foo=bar") {}
    if (request.path.username === "bob") {
        if (request.query.limit === 20) {
            if (request.header["Accept"] === "text/plain") {
                if (request.cookie.foo === "bar") {
                    if (request.key === "foo") {
                        if (request.operationId === "time") {
                            response.body = date();
                            return true;
                        }
                    }
                }
            }
        }
    }
    return false;
});
