import {
    lookup,
    ADDRCONFIG,
    V4MAPPED,
    LookupAddress,
    lookupService,
    resolve,
    AnyRecord,
    MxRecord,
    resolve4,
    RecordWithTtl,
    resolve6,
    Resolver,
    ALL,
    promises,
    setDefaultResultOrder,
} from 'node:dns';

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
        all: false
    },
    (err, address, family) => {
        const _err: NodeJS.ErrnoException | null = err;
        const _address: string = address;
        const _family: number = family;
    }
);
lookup("nodejs.org", { all: true }, (err, addresses) => {
    const _err: NodeJS.ErrnoException | null = err;
    const _address: LookupAddress[] = addresses;
});
lookup("nodejs.org", { all: true, verbatim: true }, (err, addresses) => {
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
    resolver.setServers(["4.4.4.4"] as ReadonlyArray<string>);
    resolver.resolve("nodejs.org", (err, addresses) => {
        const _addresses: string[] = addresses;
    });
    resolver.cancel();

    resolver = new Resolver({ timeout: -1});
}

{
    let resolver = new promises.Resolver();
    resolver.setLocalAddress("4.4.4.4", "8.8.8.8");
    resolver.setServers(["4.4.4.4"] as ReadonlyArray<string>);
    // $ExpectType Promise<string[]>
    resolver.resolve("nodejs.org");
    resolver.cancel();

    resolver = new promises.Resolver({ timeout: 1500 });
}

setDefaultResultOrder('ipv4first');
setDefaultResultOrder('verbatim');
// @ts-expect-error
setDefaultResultOrder('wrong');
promises.setDefaultResultOrder('ipv4first');
promises.setDefaultResultOrder('verbatim');
// @ts-expect-error
promises.setDefaultResultOrder('wrong');
