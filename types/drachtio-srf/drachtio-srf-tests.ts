import Srf = require("drachtio-srf");

// Constructor
const srf = new Srf();
const srfTagged = new Srf("myTag");
const srfMultiTagged = new Srf(["tag1", "tag2"]);

// Connect / listen
srf.connect({ host: "127.0.0.1", port: 9022, secret: "cymru" });
srf.listen({ host: "127.0.0.1", port: 9022 });

// Events
srf.on("connect", (err, hostPort) => {
    const hp: string = hostPort;
});
srf.on("listening", () => {});
srf.on("reconnecting", ({ delay, attempt }) => {
    const d: number = delay;
    const a: number = attempt;
});
srf.on("error", (err: Error) => {});
srf.on("close", (socket) => {
    const s: import("net").Socket = socket;
});
srf.on("disconnect", () => {});

// Middleware
srf.use((req, res, next) => {
    next();
});
srf.use("invite", (req, res, next) => {
    next();
});

// SIP method handlers
srf.invite((req, res) => {
    const method: Srf.SipMethod = req.method;
    const isNew: boolean = req.isNewInvite;
    const sdp: string = req.sdp;
    const callId: string = req.callId;
    const from: string = req.from;
    const to: string = req.to;
    const uri: string = req.uri;

    // getParsedHeader
    const contact = req.getParsedHeader("contact");
    const via = req.getParsedHeader("via");
    const toAor = req.getParsedHeader("to");
    const fromAor = req.getParsedHeader("from");
    const generic = req.getParsedHeader("x-custom");

    // Registration
    if (req.registration) {
        const type: "register" | "unregister" = req.registration.type;
        const expires: number = req.registration.expires;
    }
});

srf.on("register", (req, res) => {
    res.send(200);
    res.send(200, "OK", {});
    res.send(200, "OK", {}, (err, msg) => {});
});

// SIP method route handlers
srf.register((req, res) => { res.send(200); });
srf.options((req, res) => { res.send(200); });
srf.message((req, res) => { res.send(200); });
srf.info((req, res) => { res.send(200); });
srf.bye((req, res) => { res.send(200); });
srf.cancel((req, res) => { res.send(200); });
srf.ack((req, res) => { res.send(200); });
srf.notify((req, res) => { res.send(200); });
srf.prack((req, res) => { res.send(200); });
srf.publish((req, res) => { res.send(200); });
srf.refer((req, res) => { res.send(200); });
srf.subscribe((req, res) => { res.send(200); });
srf.update((req, res) => { res.send(200); });

// on("response") — res is non-optional
srf.invite((req, res) => {
    srf.request("sip:1234@10.0.0.1", { method: "OPTIONS" }, (err, outReq) => {
        outReq.on("response", (inRes) => {
            const status: number = inRes.status;
        });
    });
});

srf.on("message", (req, res) => {});
srf.on("cdr:attempt", (source, time, msg) => {});
srf.on("cdr:start", (source, time, role, msg) => {});
srf.on("cdr:stop", (source, time, reason, msg) => {});

// parseUri / stringifyUri
const parsed = Srf.parseUri("sip:1234@10.0.0.1");
const scheme: "sip" | "sips" | "tel" = parsed.scheme;
const str: string = Srf.stringifyUri({ scheme: "sip", host: "10.0.0.1" });

// createUAS — Promise form
srf.invite(async (req, res) => {
    const uas: Srf.Dialog = await srf.createUAS(req, res, {
        localSdp: req.body,
        headers: { "X-Custom": "value" },
    });
    uas.on("destroy", (msg) => {});
    uas.on("modify", (req2, res2) => {});

    // Dialog.modify — normal (resolves string)
    const result1 = await uas.modify("v=0...");
    if (typeof result1 === "string") {
        const sdp: string = result1;
    }

    // Dialog.modify — 3PCC without sdp (noAck: true, resolves ModifyResult directly)
    const result2: Srf.ModifyResult = await uas.modify({ noAck: true });
    const remoteSdp: string = result2.sdp;
    result2.ack("v=0...");
    result2.ack(); // no sdp also valid

    // Dialog.modify — 3PCC with sdp (noAck: true, resolves ModifyResult directly)
    const result3: Srf.ModifyResult = await uas.modify("v=0...", { noAck: true });
    result3.ack("v=0...");

    // Dialog.once — ack receives SrfRequest
    uas.once("ack", (req: Srf.SrfRequest) => {
        const body: string = req.body;
    });

    // Dialog.modify — callback form
    uas.modify("v=0...", { noAck: true }, (err, sdp, ack) => {
        if (ack) ack("v=0...");
    });

    // Dialog.destroy
    uas.destroy({ headers: { Reason: "Q.850;cause=16" } });
});

// createUAS — callback form
srf.invite((req, res) => {
    srf.createUAS(req, res, { localSdp: req.body }, (err, dialog) => {
        if (err) return;
        const type: "uac" | "uas" = dialog.type;
        dialog.destroy();
    });
});

// createUAC — Promise form
async function makeOutboundCall() {
    const uac: Srf.Dialog = await srf.createUAC("sip:1234@10.0.0.1", {
        localSdp: "v=0...",
        headers: { "X-Custom": "value" },
        auth: { username: "alice", password: "secret" },
    });
    uac.on("destroy", () => {});
    return uac;
}

// createUAC — with progress callbacks
srf.createUAC(
    "sip:1234@10.0.0.1",
    { localSdp: "v=0..." },
    {
        cbRequest: (req) => {
            req.cancel((err, cancelReq) => {});
        },
        cbProvisional: (res) => {
            const status: number = res.statusCode;
        },
    },
);

// createUAC — callback form
srf.createUAC("sip:1234@10.0.0.1", { localSdp: "v=0..." }, {}, (err, dialog) => {
    if (err) return;
    const local = dialog.local;
    const remote = dialog.remote;
});

// createB2BUA — Promise form
srf.invite(async (req, res) => {
    const { uas, uac }: Srf.B2BDialogs = await srf.createB2BUA(req, res, "sip:1234@10.0.0.1", {
        localSdpB: req.body,
        proxyRequestHeaders: ["X-Custom"],
        proxyResponseHeaders: ["X-Custom"],
        passFailure: false,
        passProvisionalResponses: true,
    });
    uas.other; // Dialog
    uac.other; // Dialog
});

// createB2BUA — with progress callbacks
srf.invite((req, res) => {
    srf.createB2BUA(
        req,
        res,
        "sip:1234@10.0.0.1",
        { localSdpB: req.body },
        {
            cbRequest: (outboundReq) => {},
            cbProvisional: (provisionalRes) => {},
            cbFinalizedUac: (uac) => {
                const sip = uac.sip;
            },
        },
        (err, dialogs) => {
            if (err) return;
            const { uas, uac } = dialogs;
        },
    );
});

// proxyRequest
srf.invite((req, res) => {
    srf.proxyRequest(req, "sip:1234@10.0.0.1", { forking: "simultaneous", remainInDialog: true });
    srf.proxyRequest(req, ["sip:a@10.0.0.1", "sip:b@10.0.0.2"], {}, (err, results) => {});
});

// request (out-of-dialog) — uri-first form
srf.request("sip:1234@10.0.0.1", { method: "OPTIONS" }).then((req) => {
    const sent: Srf.SrfRequest = req;
});
srf.request("sip:1234@10.0.0.1", { method: "MESSAGE", body: "hello" }, (err, req) => {});

// request — opts-first form (uri inside opts)
srf.request({ method: "REGISTER", uri: "sip:1234@10.0.0.1", proxy: "sip:proxy@10.0.0.1" }).then((req) => {
    const sent: Srf.SrfRequest = req;
});
srf.request({ method: "OPTIONS", uri: "sip:1234@10.0.0.1" }, (err, req) => {});

// locals and socket
srf.locals["myKey"] = "value";
const sock: import("net").Socket = srf.socket;

// Dialog.request
async function dialogRequest(dialog: Srf.Dialog) {
    const res: Srf.SrfResponse = await dialog.request({ method: "INFO" });
    dialog.request({ method: "NOTIFY" }, (err, msg) => {});
}
