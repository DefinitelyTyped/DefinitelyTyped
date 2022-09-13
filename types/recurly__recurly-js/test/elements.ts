export default function elements() {
  const elements = recurly.Elements();
  const cardElement = elements.CardElement({
    inputType: 'mobileSelect',
    displayIcon: true,
    style: {
      fontSize: '1em',
      placeholder: {
        color: 'gray !important',
        fontWeight: 'bold',
        content: {
          number: 'Card number',
          cvv: 'CVC'
        }
      },
      invalid: {
        fontColor: 'red'
      }
    }
  });

  const elementOptions = {
    format: true,
    inputType: 'text',
    tabIndex: '1',
    style: {
      invalid: {},
      padding: '10px',
      placeholder: {
        color: 'red',
        content: 'content'
      }
    }
  };

  const el = document.querySelector('div');
  if (el) {
    cardElement.attach(el).configure({}).focus().remove();
  }

  [
    elements.CardNumberElement(elementOptions),
    elements.CardMonthElement(elementOptions),
    elements.CardYearElement(elementOptions),
    elements.CardCvvElement(elementOptions)
  ].forEach(element => {
    element.attach('#recurly-elements').configure({}).focus().remove();
    element.on('attach', () => {});
    element.on('blur', () => {});
    element.on('change', () => {});
    element.on('focus', () => {});
    element.on('remove', () => {});
    element.on('submit', () => {});
  });

  // @ts-expect-error
  cardElement.on('fake-event', () => {});

  elements.on('submit', () => {});
}
