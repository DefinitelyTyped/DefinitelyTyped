import terminalLink = require('terminal-link');

// $ExpectType string
terminalLink('My Website', 'https://sindresorhus.com');
terminalLink('My Website', 'https://sindresorhus.com', {
    fallback(text, url) {
        // $ExpectType string
        text;
        // $ExpectType string
        url;
        return text;
    },
});

// $ExpectType boolean
terminalLink.isSupported();
