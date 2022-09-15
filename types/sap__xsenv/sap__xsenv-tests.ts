import xsenv = require('@sap/xsenv');

// code examples from the README.MD

function test1() {
    const services = xsenv.readCFServices();
    services.aservice.credentials; // prints { host: '...', port: '...', user: '...', passwrod: '...', ... }
}

function test2() {
    const services = xsenv.readCFServices();
    const svc = services['process.env.SERVICE_NAME'];
}

function test3() {
    const svc = xsenv.cfServiceCredentials({ tag: 'hdb' });
    // console.log(svc); // prints { host: '...', port: '...', user: '...', passwrod: '...', ... }
}

function test4() {
    const services = xsenv.getServices({
        hana: { tag: 'hdb' },
        scheduler: { label: 'jobs' }
    });

    const hanaCredentials = services.hana;
    const schedulerCredentials = services.scheduler;
}

function test5() {
    xsenv.cfServiceCredentials('hana');
    xsenv.cfServiceCredentials({ tag: 'relational' });
    xsenv.cfServiceCredentials({ label: 'hana', plan: 'shared' });
    xsenv.cfServiceCredentials((service: any) => {
        return /shared/.test(service.plan) && /hdi/.test(service.label);
    });
}

function test6() {
    xsenv.loadEnv();
    // console.log(process.env.PORT); // prints 3000
    xsenv.cfServiceCredentials('hana-R90'); // prints { host: 'myhana, port: '30015', user: 'SYSTEM', password: 'secret' }
}

function test7() {
    xsenv.loadEnv('myenv.json');
}

function test8() {
    xsenv.loadCertificates();
}
