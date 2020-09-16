import * as whoIs from 'whois-parsed';

const lookupTestDomain = async () => {
    const result = await whoIs.lookup('https://codecademy.com');
    return result;
};

Promise.resolve(lookupTestDomain()).then(result => {});
