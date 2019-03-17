function ksr_request_route() {
    if (KSR.maxfwd.process_maxfwd(16) < 0) {
        KSR.sl.send_reply(483, "Too Many Hops");
        return;
    }
    const reqURI = KSR.pv.get('$ru');
    const reqMethod = KSR.pv.get('$rm');

    if (KSR.isflagset(31)) {
        KSR.hdr.append_to_reply("Retry-After: 60");
        KSR.sl.send_reply(503, "Service Unavailable");
        return;
    }

    if (KSR.is_OPTIONS()) {
        KSR.sl.send_reply(200, "OK");
        return;
    }

    KSR.dbg(`IN ksr_request_route(): ${reqMethod} ${reqURI}`);

    KSR.pv.sets('$du', "sip:127.0.0.1:5080;transport=tcp");

    KSR.tm.t_on_branch("ksr_branch_route");
    KSR.tm.t_on_reply("ksr_onreply_route");
    KSR.tm.t_on_failure("ksr_failure_route");

    if (KSR.tm.t_relay() < 0) {
        KSR.sl.send_reply(500, "Server error");
    }
}
