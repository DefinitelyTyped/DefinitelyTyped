export default function giftCard() {
  window.recurly.giftCard({ code: 'basic' }, (error, giftCard) => {
    if (error) {
      error.message;
      error.code;
    } else {
      giftCard.currency;
      giftCard.unit_amount;
    }
  });

  // $ExpectError
  recurly.giftCard('basic', (error, giftCard) => {
    if (error) {
      error.message;
      error.code;
    } else {
      giftCard.currency;
      giftCard.unit_amount;
    }
  });
}
