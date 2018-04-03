import * as dnscache from "dnscache";

const _dnscache = dnscache({
    enable: true
});

_dnscache.lookup(
    "mail.google.com",
    (err: any, result: string) => {
        console.log(result);
    }
);
