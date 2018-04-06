import * as dnssd from 'dnssd'

let serviceType = new dnssd.ServiceType(dnssd.tcp('_mqtt'), dnssd.udp('_mqtt'))

let advertisement = new dnssd.Advertisement(serviceType, 1883, { name: 'broker' })
let browser: dnssd.Browser = new dnssd.Browser(serviceType)
