import * as whoIs from 'whois-parsed';

const lookupTestDomain = async () => {
    const { domainName, isAvailable } = await whoIs.lookup('https://codecademy.com');
    return { domainName, isAvailable };
};

Promise.resolve(lookupTestDomain()).then(result => {});
