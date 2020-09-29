import * as metaget from 'metaget';

metaget.fetch('https://wordpress.com').then(response => {
    response; // $ExpectType Record<string, string>
});

metaget.fetch('https://wordpress.com', (error, response) => {
    error; // $ExpectType Error | null
    response; // $ExpectType Record<string, string>
});
