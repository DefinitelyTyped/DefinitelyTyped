import * as acme from 'acme-client';

async function wrap() {
    const accountKey = await acme.forge.createPrivateKey();
    const client = new acme.Client({
        directoryUrl: acme.directory.letsencrypt.staging,
        accountKey
    });
    await client.createAccount({
        termsOfServiceAgreed: true,
        contact: ['mailto:test@example.com']
    });

    const order = await client.createOrder({
        identifiers: [
            { type: 'dns', value: 'example.com' },
            { type: 'dns', value: '*.example.com' }
        ]
    });

    const authz = (await client.getAuthorizations(order))[0];
    const challenge = authz.challenges[0];
    await client.getChallengeKeyAuthorization(challenge);
    await client.verifyChallenge(authz, challenge);
    await client.completeChallenge(challenge);
    await client.waitForValidStatus(challenge);
    const [, csr] = await acme.forge.createCsr({
        commonName: '*.example.com',
        altNames: ['example.com']
    });
    await client.finalizeOrder(order, csr);
    await client.getCertificate(order);

    const autoOpts: acme.AutoOptions = {
        csr: '<PEM encoded CSR>',
        email: 'test@example.com',
        termsOfServiceAgreed: true,
        challengeCreateFn: async (authz, challenge, keyAuthorization) => {},
        challengeRemoveFn: async (authz, challenge, keyAuthorization) => {}
    };

    await client.auto(autoOpts);
}
