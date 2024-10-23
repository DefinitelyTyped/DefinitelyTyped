import Zeroconf, { ImplType, Service } from "react-native-zeroconf";

const zeroconf = new Zeroconf();

// $ExpectType Zeroconf
zeroconf.on("start", () => console.log("[Start]"));
// $ExpectType Zeroconf
zeroconf.on("stop", () => console.log("[Stop]"));
// $ExpectType Zeroconf
zeroconf.on("found", (name: string) => console.log(`[Found] '${name}'`));
// $ExpectType Zeroconf
zeroconf.on("resolved", (service: Service) => console.log(`[Resolved]\n${JSON.stringify(service, null, 2)}`));
// $ExpectType Zeroconf
zeroconf.on("remove", (name: string) => console.log(`[Remove] '${name}'`));
// $ExpectType Zeroconf
zeroconf.on("published", (service: Service) => {});
// $ExpectType Zeroconf
zeroconf.on("unpublished", (service: Service) => {});
// $ExpectType Zeroconf
zeroconf.on("update", () => console.log("[Update]"));
// $ExpectType Zeroconf
zeroconf.on("error", (error: Error) => console.log(`[Error] ${error}`));

// $ExpectType void
zeroconf.publishService("http", "tcp", "local.", "test-device", 3000, { svc: "my-service", id: 5 }, ImplType.DNSSD);

// $ExpectType void
zeroconf.scan("http", "tcp", "local.", ImplType.DNSSD);
// $ExpectType { [name: string]: Service; }
const services = zeroconf.getServices();
for (const serviceName in services) {
    // $ExpectType Service
    const service = services[serviceName];
    console.log(`[${service.name}] - ${service.fullName}`);
}

setTimeout(() => {
    // $ExpectType void
    zeroconf.stop(ImplType.DNSSD);
}, 5000);
