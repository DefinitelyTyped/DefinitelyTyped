import nv = require("node-vault");

// Test code came from the sample code in README of the module.
const options: nv.VaultOptions = {
  apiVersion: 'v1', // default
  endpoint: 'http://127.0.0.1:8200', // default
  token: '1234', // optional client token; can be fetched after valid initialization of the server
};

// get new instance of the client
const vault = nv(options);

// init vault server
vault.init({ secret_shares: 1, secret_threshold: 1 })
  .then((result) => {
    const keys = result.keys;
    // set token for all following requests
    vault.token = result.root_token;
    // unseal vault server
    return vault.unseal({ secret_shares: 1, key: keys[0] });
  })
  .catch(console.error);

// write, read and delete secrets
vault.write('secret/hello', { value: 'world', lease: '1s' })
  .then(() => vault.read('secret/hello'))
  .then(() => vault.delete('secret/hello'))
  .catch(console.error);
