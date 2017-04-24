import * as bonjour from 'bonjour';

let bonjourOptions: Bonjour.BonjourOptions;
let bonjourInstance: Bonjour;

let serviceOptions: Bonjour.ServiceOptions;
let service: Bonjour.Service;

let browserOptions: Bonjour.BrowserOptions;
let browser: Bonjour.Browser;

bonjourOptions = { interface: '192.168.1.1', port: 5353 };
bonjourInstance = bonjour(bonjourOptions);

serviceOptions = { name: 'My Web Server', type: 'http', port: 3000 };
service = bonjourInstance.publish(serviceOptions);

browserOptions = { protocol: 'tcp', type: 'http' };
browser = bonjourInstance.find(browserOptions, (service: Bonjour.Service) => { });
