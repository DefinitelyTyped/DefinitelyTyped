import intlTelInput = require('intl-tel-input');

// $ExpectType (node: Element, options?: Options) => Plugin
intlTelInput;

// $ExpectError
const options: IntlTelInput.Options = {
    allowDropdown: true
};
