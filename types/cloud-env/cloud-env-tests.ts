import * as cloudEnv from 'cloud-env';

if (cloudEnv.get('IP', '0.0.0.0') !== '0.0.0.0') {
    throw new Error(`cloudEnv.get: expected value 0.0.0.0, but actually received value ${cloudEnv.get('IP', '0.0.0.0')}`);
}

if (!(cloudEnv.defaults instanceof Object)) {
    throw new Error(`cloudEnv.defaults: expected value of defaults be an instance of Object, but it was actually an instance of another class: ${typeof cloudEnv.defaults}`);
}
