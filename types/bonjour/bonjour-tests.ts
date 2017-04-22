import * as bonjour from 'bonjour';

let bonjourOptions: bonjour.BonjourOptions;
let bonjourInstance: bonjour.Bonjour;

let serviceOptions: bonjour.ServiceOptions;
let service: bonjour.Service;

let browserOptions: bonjour.BrowserOptions;
let browser: bonjour.Browser;

bonjourOptions = {};
bonjourInstance = bonjour(bonjourOptions);

serviceOptions = { name: 'ich-investor-nicolas', type: 'http', port: 3001 };
service = bonjourInstance.publish(serviceOptions);

// browserOptions = { protocol: 'tcp', type: 'http' };
// browser = bonjourInstance.find(browserOptions);
