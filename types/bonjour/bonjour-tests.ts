import bonjour = require("bonjour");

let bonjourOptions: bonjour.BonjourOptions;
let bonjourInstance: bonjour.Bonjour;

let serviceOptions: bonjour.ServiceOptions;
let service: bonjour.Service;

let browserOptions: bonjour.BrowserOptions;
let browser: bonjour.Browser;

bonjourOptions = {};
bonjourInstance = bonjour(bonjourOptions);

// Publish a dummy server under name 'My Website' type http port 3000
serviceOptions = { name: "My Website", type: "http", port: 3000 };
service = bonjourInstance.publish(serviceOptions);

const name: string = service.name;
const type: string = service.type;
const subtypes: string[] = service.subtypes;
const protocol: string = service.protocol;
const host: string = service.host;
const port: number = service.port;
const fqdn: string = service.fqdn;
const txt: Object = service.txt;
const published: boolean = service.published;
const addresses: string[] = service.addresses;
service.stop();
service.start();
service.stop(() => {});

browserOptions = {
    protocol: "tcp",
    type: "http",
    subtypes: ["subtype1"],
    txt: {},
};
// Look for the server
browser = bonjourInstance.findOne(browserOptions, (srv: bonjour.RemoteService) => {});
