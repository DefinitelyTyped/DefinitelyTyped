import intlTelInput = require('intl-tel-input');

function test_import() {
    // $ExpectType (node: Element, options?: Options) => Plugin
    intlTelInput;
}

function test_IntlTelInput_not_visible() {
    // $ExpectError
    const options: IntlTelInput.Options = {
        allowDropdown: true
    };
}

function test_intlTelInputUtils_global() {
    const input = document.querySelector('#phone');
    const iti = intlTelInput(input, {
        utilsScript: 'node_modules/intl-tel-input/build/js/utils.js'
    });

    iti.promise.then(() => {
        console.log(intlTelInputUtils.numberFormat.E164);
    });
}
