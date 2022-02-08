import Zeroconf, { Service } from 'react-native-zeroconf';

const zeroconf = new Zeroconf();

zeroconf.on('start', () => console.log('[Start]'));
zeroconf.on('stop', () => console.log('[Stop]'));
zeroconf.on('found', (name: string) => console.log(`[Found] '${name}'`));
zeroconf.on('resolved', (service: Service) => console.log(`[Resolved]\n${JSON.stringify(service, null, 2)}`));
zeroconf.on('remove', (name: string) => console.log(`[Remove] '${name}'`));
zeroconf.on('update', () => console.log('[Update]'));
zeroconf.on('error', (error: Error) => console.log(`[Error] ${error}`));

zeroconf.publishService('http', 'tcp', 'local.', 'test-device', 3000, { svc: 'my-service', id: 5 });

zeroconf.scan('http', 'tcp', 'local.');
const services = zeroconf.getServices();
for (const serviceName in services) {
    const service = services[serviceName];
    console.log(`[${service.name}] - ${service.fullName}`);
}

setTimeout(() => zeroconf.stop(), 5000);
