import * as owasp from 'owasp-password-strength-test';

owasp.config({
    allowPassphrases: true,
    maxLength: 128,
    minLength: 10,
    minPhraseLength: 20,
    minOptionalTestsToPass: 4,
});

owasp.tests.required.push(password => {
    if (password === 'one two three four five') {
        return "That's the kind of thing an idiot would have on his luggage!";
    }
});

const result = owasp.test('correct horse battery staple');
result.errors.length;
