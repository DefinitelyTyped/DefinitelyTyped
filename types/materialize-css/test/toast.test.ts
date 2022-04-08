import * as materialize from "materialize-css";

const elem = document.querySelector('.whatever')!;

// $ExpectType Toast
const _toast = M.toast({ html: 'I am a toast!' });

// $ExpectType Toast
const toast = materialize.toast({ html: 'I am a toast!' });
// $ExpectType ToastOptions
toast.options;
// $ExpectType Element
toast.el;
// $ExpectType void
toast.dismiss();
// $ExpectType void
materialize.Toast.dismissAll();
