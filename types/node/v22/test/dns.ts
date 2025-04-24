import {
    ADDRCONFIG,
    ADDRGETNETWORKPARAMS,
    ALL,
    AnyRecord,
    BADFAMILY,
    BADFLAGS,
    BADHINTS,
    BADNAME,
    BADQUERY,
    BADRESP,
    BADSTR,
    CANCELLED,
    CONNREFUSED,
    DESTRUCTION,
    EOF,
    FILE,
    FORMERR,
    LOADIPHLPAPI,
    lookup,
    LookupAddress,
    lookupService,
    MxRecord,
    NODATA,
    NOMEM,
    NONAME,
    NOTFOUND,
    NOTIMP,
    NOTINITIALIZED,
    promises,
    RecordWithTtl,
    REFUSED,
    resolve,
    resolve4,
    resolve6,
    Resolver,
    SERVFAIL,
    setDefaultResultOrder,
    TIMEOUT,
    V4MAPPED,
} from "node:dns";

lookup("nodejs.org", (err, address, family) => {
    const _err: NodeJS.ErrnoException | null = err;
    const _address: string = address;
    const _family: number = family;
});
lookup("nodejs.org", 4, (err, address, family) => {
    const _err: NodeJS.ErrnoException | null = err;
    const _address: string = address;
    const _family: number = family;
});
lookup("nodejs.org", 6, (err, address, family) => {
    const _err: NodeJS.ErrnoException | null = err;
    const _address: string = address;
    const _family: number = family;
});
lookup("nodejs.org", {}, (err, address, family) => {
    const _err: NodeJS.ErrnoException | null = err;
    const _address: string = address;
    const _family: number = family;
});
lookup(
    "nodejs.org",
    {
        family: 4,
        hints: ADDRCONFIG | V4MAPPED | ALL,
        all: false,
    },
    (err, address, family) => {
        const _err: NodeJS.ErrnoException | null = err;
        const _address: string = address;
        const _family: number = family;
    },
);
lookup("nodejs.org", { all: true }, (err, addresses) => {
    const _err: NodeJS.ErrnoException | null = err;
    const _address: LookupAddress[] = addresses;
});
lookup("nodejs.org", { all: true, order: "ipv6first" }, (err, addresses) => {
    const _err: NodeJS.ErrnoException | null = err;
    const _address: LookupAddress[] = addresses;
});

function trueOrFalse(): boolean {
    return Math.random() > 0.5 ? true : false;
}
lookup("nodejs.org", { all: trueOrFalse() }, (err, addresses, family) => {
    const _err: NodeJS.ErrnoException | null = err;
    const _addresses: string | LookupAddress[] = addresses;
    const _family: number | undefined = family;
});

lookupService("127.0.0.1", 0, (err, hostname, service) => {
    const _err: NodeJS.ErrnoException | null = err;
    const _hostname: string = hostname;
    const _service: string = service;
});

resolve("nodejs.org", (err, addresses) => {
    const _addresses: string[] = addresses;
});
resolve("nodejs.org", "A", (err, addresses) => {
    const _addresses: string[] = addresses;
});
resolve("nodejs.org", "AAAA", (err, addresses) => {
    const _addresses: string[] = addresses;
});
resolve("nodejs.org", "ANY", (err, addresses) => {
    const _addresses: AnyRecord[] = addresses;
});
resolve("nodejs.org", "MX", (err, addresses) => {
    const _addresses: MxRecord[] = addresses;
});

resolve4("nodejs.org", (err, addresses) => {
    const _addresses: string[] = addresses;
});
resolve4("nodejs.org", { ttl: true }, (err, addresses) => {
    const _addresses: RecordWithTtl[] = addresses;
});
{
    const ttl = false;
    resolve4("nodejs.org", { ttl }, (err, addresses) => {
        const _addresses: string[] | RecordWithTtl[] = addresses;
    });
}

resolve6("nodejs.org", (err, addresses) => {
    const _addresses: string[] = addresses;
});
resolve6("nodejs.org", { ttl: true }, (err, addresses) => {
    const _addresses: RecordWithTtl[] = addresses;
});
{
    const ttl = false;
    resolve6("nodejs.org", { ttl }, (err, addresses) => {
        const _addresses: string[] | RecordWithTtl[] = addresses;
    });
}
{
    let resolver = new Resolver();
    resolver.setLocalAddress("4.4.4.4", "8.8.8.8");
    resolver.setServers(["4.4.4.4"] as readonly string[]);
    resolver.resolve("nodejs.org", (err, addresses) => {
        const _addresses: string[] = addresses;
    });
    resolver.cancel();

    resolver = new Resolver({ timeout: -1, tries: 3 });
}

{
    let resolver = new promises.Resolver();
    resolver.setLocalAddress("4.4.4.4", "8.8.8.8");
    resolver.setServers(["4.4.4.4"] as readonly string[]);
    // $ExpectType Promise<string[]>
    resolver.resolve("nodejs.org");
    resolver.cancel();

    resolver = new promises.Resolver({ timeout: 1500 });
}

setDefaultResultOrder("ipv4first");
setDefaultResultOrder("verbatim");
// @ts-expect-error
setDefaultResultOrder("wrong");
promises.setDefaultResultOrder("ipv4first");
promises.setDefaultResultOrder("verbatim");
// @ts-expect-error
promises.setDefaultResultOrder("wrong");

// DNS error codes
{
    const nodata: typeof NODATA = "ENODATA";
    const formerr: typeof FORMERR = "EFORMERR";
    const servfail: typeof SERVFAIL = "ESERVFAIL";
    const notfound: typeof NOTFOUND = "ENOTFOUND";
    const notimp: typeof NOTIMP = "ENOTIMP";
    const refused: typeof REFUSED = "EREFUSED";
    const badquery: typeof BADQUERY = "EBADQUERY";
    const badname: typeof BADNAME = "EBADNAME";
    const badfamily: typeof BADFAMILY = "EBADFAMILY";
    const badresp: typeof BADRESP = "EBADRESP";
    const connrefused: typeof CONNREFUSED = "ECONNREFUSED";
    const timeout: typeof TIMEOUT = "ETIMEOUT";
    const eof: typeof EOF = "EOF";
    const file: typeof FILE = "EFILE";
    const nomem: typeof NOMEM = "ENOMEM";
    const destruction: typeof DESTRUCTION = "EDESTRUCTION";
    const badstr: typeof BADSTR = "EBADSTR";
    const badflags: typeof BADFLAGS = "EBADFLAGS";
    const noname: typeof NONAME = "ENONAME";
    const badhints: typeof BADHINTS = "EBADHINTS";
    const notinitialized: typeof NOTINITIALIZED = "ENOTINITIALIZED";
    const loadiphlpapi: typeof LOADIPHLPAPI = "ELOADIPHLPAPI";
    const addrgetnetworkparams: typeof ADDRGETNETWORKPARAMS = "EADDRGETNETWORKPARAMS";
    const cancelled: typeof CANCELLED = "ECANCELLED";

    // @ts-expect-error
    const wrongNotfound: typeof NOTFOUND = "NOTFOUND";
    // @ts-expect-error
    const wrongConnrefused: typeof CONNREFUSED = "CCONNREFUSED";
    // @ts-expect-error
    const wrongEof: typeof EOF = "WAT";
}
