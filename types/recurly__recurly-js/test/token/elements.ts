export default function elementsToken() {
  const elements = window.recurly.Elements();
  const form = document.querySelector('form');

  if (!form) return;

  window.recurly.token(elements, form, (err, token) => {
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
  window.recurly.token(form, elements, (err, token) => {
    if (err) {
      err.message;
      err.code;
    } else {
      token.id;
      token.type;
    }
  });
}
