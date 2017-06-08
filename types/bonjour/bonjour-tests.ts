import * as bonjour from 'bonjour';

let bonjourOptions: bonjour.BonjourOptions;
let bonjourInstance: bonjour.Bonjour;

let serviceOptions: bonjour.ServiceOptions;
let service: bonjour.Service;

let browserOptions: bonjour.BrowserOptions;
let browser: bonjour.Browser;

bonjourOptions = {};
bonjourInstance = bonjour(bonjourOptions);

// Publish a dummy server under name 'My Website' type http port 3000
serviceOptions = { name: 'My Website', type: 'http', port: 3000 };
service = bonjourInstance.publish(serviceOptions);

browserOptions = { protocol: 'tcp', type: 'http' };
// Look for the server
browser = bonjourInstance.findOne(browserOptions, (srv: bonjour.Service) => {
    // You can test here if the found server (srv) name is 'My Website'
});
