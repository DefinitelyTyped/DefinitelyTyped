import { Options, Scenario } from 'k6/options';

const options: Options = {
    vus: 10,
    duration: '10s'
};

const moreOptions: Options = {
    vus: 10,
    duration: '10s',
    blockHostnames: ["*.k6.io" , "www.example.com"],
    dns: {
        ttl: '6s',
        select: 'first',
        policy: 'preferIPv4'
    }
};

const scenarios: Scenario[] = [{
            executor: "shared-iterations",
            iterations: 100
}];

const scenarioExample: Options = {
    executionSegment: "0:1",
    noCookiesReset: true,
    scenarios: {
        myScenario1: {
            executor: "shared-iterations",
            iterations: 100
        },
        myScenario2: {
            executor: "per-vu-iterations",
            iterations: 100
        },
        myScenario3: {
            executor: "constant-vus",
            vus: 100,
            duration: "10s"
        },
        myScenario4: {
            executor: "ramping-vus",
            stages: [{duration: "10s", target: 10}]
        },
        myScenario5: {
            executor: "constant-arrival-rate",
            rate: 2,
            duration: "10s",
            preAllocatedVUs: 20
        },
        myScenario6: {
            executor: "ramping-arrival-rate",
            stages: [{duration: "10s", target: 10}],
            preAllocatedVUs: 20
        },
        myScenario7: {
            executor: "externally-controlled",
            duration: "10s"
        }
    }
};

const tlsOptions1: Options = {
    tlsAuth: [
        {
            domains: ["example.com"],
            cert: open("mycert.pem"),
            key: open("mycert-key.pem"),
            password: "mycert-passphrase",
        },
    ],
};

const tlsOptions2: Options = {
    tlsAuth: [
        {
            domains: ["example.com"],
            cert: open("mycert.pem"),
            key: open("mycert-key.pem"),
        },
    ],
};

const tlsOptions3: Options = {
    tlsAuth: [ // @ts-expect-error
        {
            domains: ["example.com"],
            cert: open("mycert.pem"),
        },
    ],
};

const tlsOptions4: Options = {
    tlsAuth: [
        {
            cert: open("mycert.pem"),
            key: open("mycert-key.pem"),
        },
    ],
};
