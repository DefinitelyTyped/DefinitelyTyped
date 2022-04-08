import uuidApiKey from 'uuid-apikey';

const info = uuidApiKey.create();
const isValid = uuidApiKey.check(info.apiKey, info.uuid);
// true
