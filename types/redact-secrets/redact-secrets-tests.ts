import redactSecrets from 'redact-secrets';

const REDACTED = '[REDACTED]';
const redact = redactSecrets(REDACTED);

const info = {
    username: 'watson',
    password: 'hhGu38gf',
    extra: {
        id: 1,
        token: 'some-secret-stuff',
        card: '1234 1234 1234 1234'
    }
};

const redacted = redact.map(info);

assert(redacted.password === REDACTED);
