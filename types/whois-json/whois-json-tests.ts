import whois = require('whois-json');

const lookupTestDomain = async () => {
    const result = await whois('https://codecademy.com');
    return result.domainName;
};

Promise.resolve(lookupTestDomain()).then(result => {});
