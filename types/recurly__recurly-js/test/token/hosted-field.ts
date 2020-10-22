export default function hostedFieldToken() {
  const form = document.querySelector('form');

  if (form) {
    window.recurly.token(form, (err, token) => {
      if (err) {
        err.message;
        err.code;
      } else {
        token.id;
        token.type;
      }
    });
  }

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
