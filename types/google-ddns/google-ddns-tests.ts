import { DynamicDNS, Service } from 'google-ddns';

const ddns = new DynamicDNS({
    hostname: 'subdomain.example.com',
    username: 'foo',
    password: 'bar',
});

ddns.sync(); // $ExpectType Promise<true | SuccessResponse>
ddns.getCurrentIP(); // $ExpectType Promise<string>
ddns.getPublicIP(); // $ExpectType Promise<string>

const service = new Service({
    hostname: 'subdomain.example.com',
    username: 'foo',
    password: 'bar',
});

service.start();
