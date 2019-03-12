import {createCA, createCert} from 'mkcert';

// createCA tests
createCA({countryCode: "US", locality: "Redmond", organization: "test cert", state: "WA", validityDays: 365}); // $ExpectType Promise<Certificate>
createCA({countryCode: "US", locality: "Redmond", organization: "test cert", state: "WA", validityDays: "365"}); //$ExpectError
createCA({}); //$ExpectError
createCA({countryCode: "US", locality: "Redmond", organization: "test cert", state: "WA"}); //$ExpectError

// createCert tests
createCert({domains: ["localhost"], caKey : "test key", caCert: "test cert", validityDays: 365}); // $ExpectType Promise<Certificate>
createCert({domains: ["localhost"], caKey : "test key", caCert: "test cert", validityDays: "365"}); // $ExpectError
createCert({}); // $ExpectError
createCert({domains: ["localhost"], caKey : "test key", caCert: "test cert"}); // $ExpectError