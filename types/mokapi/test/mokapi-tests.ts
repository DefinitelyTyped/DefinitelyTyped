import {
    cron,
    date,
    Delete,
    env,
    every,
    HttpEventHandler,
    HttpRequest,
    HttpResponse,
    KafkaEventHandler,
    KafkaEventMessage,
    LdapEventHandler,
    LdapSearchRequest,
    LdapSearchResponse,
    on,
    patch,
    sleep,
    SmtpEventHandler,
    SmtpEventMessage,
} from "mokapi";

const handler = () => {};

// @ts-expect-error
on("foo");
on("http", () => {});
// @ts-expect-error
on("http", (): boolean => {
    return false;
});
// @ts-expect-error
on("http", (s: string) => {});
on("http", (req: HttpRequest, res: HttpResponse) => {});
on("kafka", () => {});
// @ts-expect-error
on("kafka", (s: string) => {});
on("ldap", () => {});
// @ts-expect-error
on("ldap", (s: string): boolean => {
    return false;
});
on("ldap", (req: LdapSearchRequest, res: LdapSearchResponse) => {});
// @ts-expect-error
on("http", handler, "");
on("http", handler, {});
on("http", handler, { tags: { foo: "bar" } });
on("http", async () => {});

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
every("", async () => {});

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
cron("", async () => {});

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
date({ layout: 123 });
date({ layout: "DateOnly" });
// @ts-expect-error
date({ timestamp: "123" });
date({ timestamp: 123 });

// @ts-expect-error
sleep({});
sleep(12);
sleep("1s");

let h: HttpEventHandler = () => {};
h = () => {};
// @ts-expect-error
h = (s: string) => {};
// @ts-expect-error
h = (s: LdapSearchRequest) => {};
h = (req: HttpRequest) => {};
// @ts-expect-error
h = (req: HttpRequest, s: string) => {};
h = (req: HttpRequest, res: HttpResponse) => {};
h = (req: HttpRequest, res: HttpResponse) => {
    // @ts-expect-error
    res.statusCode = "200";
    res.statusCode = 200;
    res.data.name = "foo";
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
                        }
                    }
                }
            }
        }
    }
});

let kafka: KafkaEventHandler = () => {};
kafka = (r: KafkaEventMessage) => {};
// @ts-expect-error
kafka = (r: KafkaEventMessage): boolean => {
    return false;
};
kafka = (record: KafkaEventMessage) => {
    // @ts-expect-error
    record.offset = 12;
    // @ts-expect-error
    record.key = 123;
    record.key = "key";
    // @ts-expect-error
    record.value = 12;
    record.value = "value";
    // @ts-expect-error
    record.headers = 123;
    record.headers = {};
    record.headers = null;
    record.headers = { foo: "bar" };
};

let ldap: LdapEventHandler = () => {};
// @ts-expect-error
ldap = () => {
    return false;
};
// @ts-expect-error
ldap = (s: string) => {};
ldap = (req: LdapSearchRequest) => {};
// @ts-expect-error
h = (req: LdapSearchRequest, s: string) => {};
ldap = (req: LdapSearchRequest, res: LdapSearchResponse) => {};
ldap = (req: LdapSearchRequest, res: LdapSearchResponse) => {
    // @ts-expect-error
    res.results = "";
    // @ts-expect-error
    res.results.push({});
    // @ts-expect-error
    res.results.push({ dn: 12 });
    res.results.push({ dn: "foo", attributes: {} });
    // @ts-expect-error
    res.results.push({ dn: "foo", attributes: { foo: "bar" } });
    res.results.push({ dn: "foo", attributes: { foo: ["bar"] } });
    res.status = 0;
    // @ts-expect-error
    res.message = 12;
    res.message = "";
};

let smtp: SmtpEventHandler = () => {};
// @ts-expect-error
smtp = () => {
    return false;
};
// @ts-expect-error
smtp = (s: string) => {};
smtp = (msg: SmtpEventMessage) => {};
// @ts-expect-error
h = (msg: SmtpEventMessage, s: string) => {};
smtp = (msg: SmtpEventMessage) => {
    msg.server = "";
    // @ts-expect-error
    msg.sender = "";
    // @ts-expect-error
    msg.sender = {};
    msg.sender = { address: "" };
    msg.sender = { name: "", address: "" };

    // @ts-expect-error
    msg.from = "";
    // @ts-expect-error
    msg.from = {};
    msg.from = [];
    msg.from = [{ address: "" }];
    msg.from = [{ name: "", address: "" }];

    // @ts-expect-error
    msg.to = "";
    // @ts-expect-error
    msg.to = {};
    msg.to = [];
    msg.to = [{ address: "" }];
    msg.to = [{ name: "", address: "" }];

    // @ts-expect-error
    msg.replyTo = "";
    // @ts-expect-error
    msg.replyTo = {};
    msg.replyTo = [];
    msg.replyTo = [{ address: "" }];
    msg.replyTo = [{ name: "", address: "" }];

    // @ts-expect-error
    msg.cc = "";
    // @ts-expect-error
    msg.cc = {};
    msg.cc = [];
    msg.cc = [{ address: "" }];
    msg.cc = [{ name: "", address: "" }];

    // @ts-expect-error
    msg.bcc = "";
    // @ts-expect-error
    msg.bcc = {};
    msg.bcc = [];
    msg.bcc = [{ address: "" }];
    msg.bcc = [{ name: "", address: "" }];

    msg.messageId = "";
    // @ts-expect-error
    msg.messageId = 12;

    msg.inReplyTo = "";
    // @ts-expect-error
    msg.inReplyTo = 12;

    msg.time = new Date();
    // @ts-expect-error
    msg.time = "";

    msg.subject = "";
    // @ts-expect-error
    msg.subject = 12;

    msg.contentType = "";
    // @ts-expect-error
    msg.contentType = 12;

    msg.encoding = "";
    // @ts-expect-error
    msg.encoding = 12;

    msg.body = "";
    // @ts-expect-error
    msg.body = 12;

    // @ts-expect-error
    msg.attachments = {};
    msg.attachments = [];
    // @ts-expect-error
    msg.attachments = [{}];
    msg.attachments = [{
        name: "",
        contentType: "",
        data: new Uint8Array(2),
    }];
};

const i: number = patch(1, 2);
patch({ x: 1 }, { y: 1 });
patch({ x: 1 }, { x: Delete });
patch([1, 2], [3, 4]);
patch([1, 2], [undefined, Delete]);
