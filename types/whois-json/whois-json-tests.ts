import whois = require('whois-json');

const lookupTestDomain = async () => {
    const result = await whois('https://codecademy.com');

    if (Array.isArray(result)) {
        return result[0].data.domainName;
    } else {
        return result.domainName;
    }
};

Promise.resolve(lookupTestDomain()).then(result => {});
