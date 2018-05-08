import * as dnssd from 'dnssd';

const serviceType = new dnssd.ServiceType(dnssd.tcp('_mqtt'), dnssd.udp('_mqtt'));

const advertisement = new dnssd.Advertisement(serviceType, 1883, { name: 'broker' });
const browser: dnssd.Browser = new dnssd.Browser(serviceType);
