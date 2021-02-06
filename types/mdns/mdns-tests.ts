/**
 * Created by stefansteinhart on 30.01.15.
 */



import mdns = require('mdns')

var ad:mdns.Advertisement = mdns.createAdvertisement(mdns.tcp('http'), 4321);

ad.start();

var browser = mdns.createBrowser(mdns.tcp('http'));

browser.on('serviceUp', function(service:mdns.Service) {
    console.log("service up: ", service);
});
browser.on('serviceDown', function(service:mdns.Service) {
    console.log("service down: ", service);
});

browser.start();

var r0 = mdns.tcp('http')                     // string form: _http._tcp
    , r1 = mdns.udp('osc', 'api-v1')            // string form: _osc._udp,_api-v1
    , r2 = new mdns.ServiceType('http', 'tcp')  // string form: _http._tcp
    , r3 = mdns.makeServiceType('https', 'tcp') // string form: _https._tcp
    ;

var txt_record = {
    name: 'bacon'
    , chunky: true
    , strips: 5
};
var ad:mdns.Advertisement = mdns.createAdvertisement(mdns.tcp('http'), 4321, {txtRecord: txt_record});

var sequence = [
    mdns.rst.DNSServiceResolve()
    , mdns.rst.DNSServiceGetAddrInfo({families: [4] })
];

var browser = mdns.createBrowser(mdns.tcp('http'), {resolverSequence: sequence});

interface HammerTimeService extends mdns.Service {
    hammerTime:Date;
}

function MCHammer(options:any) {
    options = options || {};
    return function MCHammer(service:HammerTimeService, next:()=>void) {
        console.log('STOP!');
        setTimeout(function() {
            console.log('hammertime...');
            service.hammerTime = new Date();
            next();
        }, options.delay || 1000);
    }
}

var browser = mdns.createBrowser( mdns.tcp('http')
    , { networkInterface: mdns.loopbackInterface()});

var ad:mdns.Advertisement;

function createAdvertisement() {
    try {
        ad = mdns.createAdvertisement(mdns.tcp('http'), 1337);
        ad.on('error', handleError);
        ad.start();
    } catch (ex) {
        handleError(ex);
    }
}

function handleError(error:mdns.DnsSdError) {
    switch (error.errorCode) {
        case mdns.kDNSServiceErr_Unknown:
            console.warn(error);
            setTimeout(createAdvertisement, 5000);
            break;
        default:
            throw error;
    }
}
