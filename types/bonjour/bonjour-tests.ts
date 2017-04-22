import * as bonjour from 'bonjour';

let bonjourOptions: bonjour.BonjourOptions;
let bonjourInstance: bonjour.Bonjour;

let serviceOptions: bonjour.ServiceOptions;
let service: bonjour.Service;

let browserOptions: bonjour.BrowserOptions;
let browser: bonjour.Browser;

bonjourOptions = { interface: '192.168.0.80', port: 5353 };
bonjourInstance = bonjour(bonjourOptions);

serviceOptions = { name: 'My Web Server', type: 'http', port: 3000 };
service = bonjourInstance.publish(serviceOptions);

browserOptions = { protocol: 'tcp', type: 'http' };
browser = bonjourInstance.find(browserOptions);
