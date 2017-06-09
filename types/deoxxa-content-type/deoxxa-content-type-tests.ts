import MediaType = require('content-type');

// https://github.com/deoxxa/content-type/blob/master/README.md
function new_test(): void {
    var p = new MediaType('text/html;level=1;q=0.5');
    p.q === 0.5;
    p.params.level === "1";

    var q = new MediaType('application/json', { profile: 'http://example.com/schema.json' });
    q.type === "application/json";
    q.params.profile === "http://example.com/schema.json";

    q.q = 1;
    q.toString() === 'application/json;q=1;profile="http://example.com/schema.json"';
}

function mediaCmp_test(): void {
    MediaType.mediaCmp(MediaType.parseMedia('text/html'), MediaType.parseMedia('text/html')) === 0;
    MediaType.mediaCmp(MediaType.parseMedia('*/*'), MediaType.parseMedia('text/html')) === 1;
    MediaType.mediaCmp(MediaType.parseMedia('text/html;level=1'), MediaType.parseMedia('text/html')) === -1;
    MediaType.mediaCmp(MediaType.parseMedia('application/json;profile="v1.json"'), MediaType.parseMedia('application/json;profile="v2.json"')) === null;
}

// https://github.com/deoxxa/content-type/blob/master/example.js
function example(): void {
    var representations = [
        'application/json',
        'text/html',
        'application/json;profile="schema.json"',
        'application/json;profile="different.json"',
    ];

    var accept = [
        'text/html;q=0.50',
        '*/*;q=0.01',
        'application/json;profile=different.json',
        'application/json;profile="a,b;c.json?d=1;f=2";q=0.2',
    ];

    console.log('Formats:\n\t' + representations.map(MediaType.parseMedia).join('\n\t'));

    console.log('Accept:\n\t' + accept.map(MediaType.parseMedia).join('\n\t'));

    console.log('Selected:', (MediaType.select(representations.map(MediaType.parseMedia), accept.map(MediaType.parseMedia)) || 'None').toString());
}
