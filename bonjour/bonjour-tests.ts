import * as bonjour from 'bonjour';

var bonjourOptions: bonjour.BonjourOptions;
var bonjourInstance: bonjour.Bonjour;

var serviceOptions: bonjour.ServiceOptions;
var service: bonjour.Service;

var browserOptions: bonjour.BrowserOptions;
var browser: bonjour.Browser;

bonjourOptions = { interface: '192.168.1.1', port: 5353 };
bonjourInstance = new bonjour.Bonjour(bonjourOptions);

serviceOptions = { name: 'My Web Server', type: 'http', port: 3000 };
service = bonjourInstance.publish(serviceOptions);

browserOptions = { protocol: 'tcp', type: 'http' };
browser = bonjour.find(browserOptions);

