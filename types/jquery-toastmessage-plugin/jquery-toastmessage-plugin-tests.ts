/* code examples from documentation */

$().toastmessage('showNoticeToast', 'some message here');
$().toastmessage('showSuccessToast', "some message here");
$().toastmessage('showWarningToast', "some message here");
$().toastmessage('showErrorToast', "some message here");

// user configured toastmessage:
const toastObject = $().toastmessage('showToast', {
  text: 'Hello World',
  sticky: true,
  position: 'top-right',
  type: 'success',
  close() { console.log("toast is closed ..."); }
});

$().toastmessage('removeToast', toastObject);

// reconfiguring the toasts as sticky
$().toastmessage({sticky : true});

// saving the newly created toast into a variable
const myToast =  $().toastmessage('showNoticeToast', 'some message here');

// removing the toast
$().toastmessage('removeToast', myToast);

// user configuration of all toastmessages to come:
$().toastmessage({
    text: 'Hello World',
    sticky: true,
    position: 'top-right',
    type: 'success',
    close() { console.log("toast is closed ..."); }
});

$().toastmessage({
  inEffectDuration: 600, // in effect duration in miliseconds
  stayTime: 3000, // time in miliseconds before the item has to disappear
  text: '', // content of the item
  sticky: false, // should the toast item sticky or not?
  type: 'notice', // notice, warning, error, success
  position: 'top-right', // top-left, top-center, top-right, middle-left, middle-center, middle-right
                         // Position of the toast container holding different toast.
                         // Position can be set only once at the very first call,
                         // changing the position after the first call does nothing
  closeText: '', // text which will be shown as close button,
                 // set to '' when you want to introduce an image via css
  close: undefined // callback function when the toastmessage is closed
});

/* code examples from tests */

$('.toast-container').remove();

$().toastmessage('showSuccessToast', "SUCCESS");
$().toastmessage('showNoticeToast', "NOTICE");
$().toastmessage('showWarningToast', "WARNING");
$().toastmessage('showErrorToast', "ERROR");
$().toastmessage({
    sticky: true,
    position: 'top-right',
    closeText: ''
});
$().toastmessage('showToast', {
    text: 'Success Dialog',
    type: 'success'
});
$().toastmessage('showToast', {
    text: 'Success Dialog',
    sticky: true,
    position: 'top-right',
    type: 'success',
    closeText: '',
    close() {}
});
const toast = $().toastmessage('showToast', {
    text: 'Success Dialog',
    sticky: true,
    position: 'top-right',
    type: 'success',
    closeText: '',
    close() {}
});
$().toastmessage('removeToast', toast, { close() {} });
