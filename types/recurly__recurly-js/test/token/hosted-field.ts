export default function hostedFieldToken() {
    window.recurly.token(document.querySelector('form') as HTMLFormElement, (err, token) => {
        if (err) {
            err.message;
            err.code;
        } else {
            token.id;
            token.type;
            // $ExpectError
            token.fake;
        }
    });

    // $ExpectError
    window.recurly.token(document.querySelector('div'), () => {});

    // $ExpectError
    window.recurly.token((err, token) => {
        if (err) {
            err.message;
            err.code;
        } else {
            token.id;
            token.type;
        }
    });
}
