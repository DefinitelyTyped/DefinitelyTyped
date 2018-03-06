import * as dnscache from "dnscache";

const _dnscache = dnscache({
    enable: true
});

(() => console.log(_dnscache))();
