export default function threeDSecure() {
  const risk = window.recurly.Risk();
  const threeDSecure = risk.ThreeDSecure({
    actionTokenId: 'token'
  });

  // $ExpectError
  threeDSecure.on('fake-event', () => {});
  threeDSecure.on('token', () => {});
  threeDSecure.on('error', () => {});

  const el = document.querySelector('div');
  if (el) {
    threeDSecure.attach(el);
  }

  // $ExpectError
  threeDSecure.attach();

  // $ExpectError
  threeDSecure.attach('el');
}
