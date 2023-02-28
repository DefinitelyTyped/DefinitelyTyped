import { jwk2pem, pem2jwk, JWK } from 'pem-jwk';

const rsa_pem = `-----BEGIN PUBLIC KEY-----
MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDh6RzHEsTFjD8NlB4echurwfV2
Zrlcg0k2JoP0Z3QAgXPMwJynvs2LeBHYaOFzGzjXRKsvaLwc5PjP3NcqcP3KkX5y
1VA31VrJLfFbXthi0a8c/UBwxJD8i4S35OKr6yui3bJatgYWrSQ4MT9ktaS1TP9l
XBW58V4VlkypTaQTSQIDAQAB
-----END PUBLIC KEY-----`;

const rsa_jwk: JWK<{ kid: string }> = {
    kty: 'RSA',
    n: '4ekcxxLExYw_DZQeHnIbq8H1dma5XINJNiaD9Gd0AIFzzMCcp77Ni3gR2Gjhcxs410SrL2i8HOT4z9zXKnD9ypF-ctVQN9VayS3xW17YYtGvHP1AcMSQ_IuEt-Tiq-srot2yWrYGFq0kODE_ZLWktUz_ZVwVufFeFZZMqU2kE0k',
    e: 'AQAB',
    kid: 'bKaIVhTvI4Oo3pIE1E78P',
};

jwk2pem(rsa_jwk); // $ExpectType string
pem2jwk(rsa_pem, { kid: 'bKaIVhTvI4Oo3pIE1E78P' }); // $ExpectType JWK<{ kid: string; }>
