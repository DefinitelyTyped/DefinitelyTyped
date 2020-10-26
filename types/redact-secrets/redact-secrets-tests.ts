import Redact from 'redact-secrets';

const REDACTED = '[REDACTED]';

interface Info {
    username: string;
    password: string;
    extra: {
        id: number;
        token: string;
        card: string;
    };
}

const redact = Redact(REDACTED);

const info: Info = {
    username: 'watson',
    password: 'hhGu38gf',
    extra: {
        id: 1,
        token: 'some-secret-stuff',
        card: '1234 1234 1234 1234'
    }
};

const redacted = redact.map(info);

if (redacted.password !== REDACTED) {
    // password should be redacted
}
