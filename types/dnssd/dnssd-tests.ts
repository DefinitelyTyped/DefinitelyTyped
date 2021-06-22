import * as dnssd from 'dnssd';

const serviceType = dnssd.ServiceType.tcp('_mqtt', '_mqtt._udp');

const advertisement = new dnssd.Advertisement(serviceType, 1883, { name: 'broker' });
const browser: dnssd.Browser = new dnssd.Browser(serviceType);
