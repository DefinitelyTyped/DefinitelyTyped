export default function bankAccount() {
  const formEl = document.querySelector('form');

  if (!formEl) return;

  window.recurly.bankAccount.token(formEl, (err, token) => {
    if (err) {
      err.message;
      err.code;
    } else {
      token.id;
      token.type;
    }
  });

  window.recurly.bankAccount.token(formEl, (err, token) => {
    if (err) {
      err.message;
      err.code;
    } else {
      token.id;
      token.type;
    }
  });

  // $ExpectError
  window.recurly.bankAccount.token(document.querySelector('div'), (err, token) => {
    if (err) {
      err.message;
      err.code;
    } else {
      token.id;
      token.type;
    }
  });

  // $ExpectError
  window.recurly.bankAccount.token('selector', (err, token) => {
    if (err) {
      err.message;
      err.code;
    } else {
      token.id;
      token.type;
    }
  });
}
