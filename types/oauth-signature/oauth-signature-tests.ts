import * as oauthSignature from 'oauth-signature';

const httpMethod = 'GET';
const url = 'http://photos.example.net/photos';
const parameters = {
    oauth_consumer_key: 'dpf43f3p2l4k3l03',
    oauth_token: 'nnch734d00sl2jdk',
    oauth_nonce: 'kllo9940pd9333jh',
    oauth_timestamp: '1191242096',
    oauth_signature_method: 'HMAC-SHA1',
    oauth_version: '1.0',
    file: 'vacation.jpg',
    size: 'original',
};
const consumerSecret = 'kd94hf93k423kf44';
const tokenSecret = 'pfkkdhi9sl3r4s00';

// generates a RFC 3986 encoded, BASE64 encoded HMAC-SHA1 hash
const hash1: string = oauthSignature.generate(httpMethod, url, parameters, consumerSecret, tokenSecret);
// generates a BASE64 encode HMAC-SHA1 hash
const hash2: string = oauthSignature.generate(httpMethod, url, parameters, consumerSecret, tokenSecret, {
    encodeSignature: false,
});
