import { createCA, createCert } from 'mkcert';

createCA({countryCode: "US", locality: "Redmond", organization: "test cert", state: "WA", validityDays: 365}); // $ExpectType Promise<Certificate>
createCert({domains: ["localhost"], caKey : "test key", caCert: "test cert", validityDays: 365}); // $ExpectType Promise<Certificate>
