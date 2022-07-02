export default function threeDSecure() {
  const risk = window.recurly.Risk();
  const threeDSecure = risk.ThreeDSecure({
    actionTokenId: 'token'
  });

  // @ts-expect-error
  threeDSecure.on('fake-event', () => {});
  threeDSecure.on('token', () => {});
  threeDSecure.on('error', () => {});

  const el = document.querySelector('div');
  if (el) {
    threeDSecure.attach(el);
  }

  // @ts-expect-error
  threeDSecure.attach();

  // @ts-expect-error
  threeDSecure.attach('el');
}
