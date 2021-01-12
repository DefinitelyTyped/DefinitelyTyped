import * as ProxyVerifier from "proxy-verifier";

const proxy: ProxyVerifier.Proxy = {
    ipAddress: "123.123.123.123",
    port: 8080,
    auth: "test",
    protocol: "socks5",
    protocols: [ "socks5", "https" ]
};

const requestOptions = {
    method: "GET"
};

const testOptions = {
    testUrl: "www.example.com",
    testFn: (data: string, status: number, headers: ProxyVerifier.Headers) => {}
};

function cb(error: any, result: string | ProxyVerifier.Result | ProxyVerifier.ProtocolResult | ProxyVerifier.CustomTestResult | ProxyVerifier.AllResults) {
    if (error) console.error(error);

    console.log(result);
}

ProxyVerifier.testAll(proxy, requestOptions, cb);
ProxyVerifier.testAll(proxy, requestOptions, cb);

ProxyVerifier.testProtocol(proxy, requestOptions, cb);
ProxyVerifier.testProtocol(proxy, requestOptions, cb);

ProxyVerifier.testProtocols(proxy, requestOptions, cb);
ProxyVerifier.testProtocols(proxy, requestOptions, cb);

ProxyVerifier.testAnonymityLevel(proxy, requestOptions, cb);
ProxyVerifier.testAnonymityLevel(proxy, requestOptions, cb);

ProxyVerifier.testTunnel(proxy, requestOptions, cb);
ProxyVerifier.testTunnel(proxy, requestOptions, cb);

ProxyVerifier.test(proxy, testOptions, cb);
ProxyVerifier.test(proxy, testOptions, cb);
