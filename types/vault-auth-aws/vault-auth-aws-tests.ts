import vaultAuthAws = require('vault-auth-aws');

const config: vaultAuthAws.Config = {
    ssl: false,
    host: 'localhost',
    port: 3000,
    apiVersion: 'v1',
    vaultLoginUrl: 'auth/aws/login',
    vaultAppName: '',
    followAllRedirects: true,
    certFilePath: undefined,
    sslRejectUnAuthorized: true
};

const creds: vaultAuthAws.Creds = {
    accessKeyId: '',
    secretAccessKey: '',
    sessionToken: ''
};

const vault = new vaultAuthAws(config);

vault.getOptions(creds);
Promise.resolve(vault.authenticate());
