import convertApiPackage from 'convertapi';

const convertAPI = convertApiPackage('your-secret-api-key', {});

// To convert a new file to pdf
convertAPI.convert('pdf', {});

// To post a new file with params
convertAPI.client.post('some path', {});
