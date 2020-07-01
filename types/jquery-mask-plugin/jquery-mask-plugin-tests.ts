// basic usage
$(document).ready(() => {
    $('.date').mask('00/00/0000');
    $('.time').mask('00:00:00');
    $('.date_time').mask('00/00/0000 00:00:00');
    $('.cep').mask('00000-000');
    $('.phone').mask('0000-0000');
    $('.phone_with_ddd').mask('(00) 0000-0000');
    $('.phone_us').mask('(000) 000-0000');
    $('.mixed').mask('AAA 000-S0S');
    $('.cpf').mask('000.000.000-00', { reverse: true });
    $('.cnpj').mask('00.000.000/0000-00', { reverse: true });
    $('.money').mask('000.000.000.000.000,00', { reverse: true });
    $('.money2').mask("#.##0,00", { reverse: true });
    $('.ip_address').mask('0ZZ.0ZZ.0ZZ.0ZZ', {
        translation: {
            Z: {
                pattern: /[0-9]/, optional: true
            }
        }
    });
    $('.ip_address').mask('099.099.099.099');
    $('.percent').mask('##0,00%', { reverse: true });
    $('.clear-if-not-match').mask("00/00/0000", { clearIfNotMatch: true });
    $('.placeholder').mask("00/00/0000", {
        translation: {
            placeholder: "__/__/____"
        }
    });
    $('.placeholder2').mask("00/00/0000", {
        placeholder: "__/__/____"
    });
    $('.fallback').mask("00r00r0000", {
        translation: {
            r: {
                pattern: /[\/]/,
                fallback: '/'
            },
            placeholder: "__/__/____"
        }
    });
    $('.selectonfocus').mask("00/00/0000", { selectOnFocus: true });
});

// callback examples
let options: jQueryMask.Options = {
    onComplete(cep: Object) {
        alert('CEP Completed!:' + cep);
    },
    onKeyPress(cep: Object, event: Event, currentField: JQuery, options: jQueryMask.Options) {
        console.log('An key was pressed!:', cep, ' event: ', event,
            'currentField: ', currentField, ' options: ', options);
    },
    onChange(cep: Object) {
        console.log('cep changed! ', cep);
    },
    onInvalid(val: Object, e: Event, f: JQuery, invalid: jQueryMask.Invalid[], options: jQueryMask.Options) {
        const error = invalid[0];
        console.log("Digit: ", error.v, " is invalid for the position: ", error.p, ". We expect something like: ", error.e);
    }
};

$('.cep_with_callback').mask('00000-000', options);

// on the fly mask changed
options = {
    onKeyPress(cep, e, field, options) {
        const masks: string[] = ['00000-000', '0-00-00-00'];
        const mask: string = (cep.length > 7) ? masks[1] : masks[0];
        $('.crazy_cep').mask(mask, options);
    }
};

$('.crazy_cep').mask('00000-000', options);

// mask as a function
let maskBehavior: (value: string) => string = val => {
  return val.replace(/\D/g, '').length === 11 ? '(00) 00000-0000' : '(00) 0000-00009';
};

options = {
  onKeyPress(val: string, e: Event, field: JQuery, options: jQueryMask.Options) {
      field.mask(maskBehavior.apply({}, arguments), options);
    }
};

$('.sp_celphones').mask(maskBehavior, options);

// translation
// now the digit 0 on your mask pattern will be interpreted
// as valid characters like 0,1,2,3,4,5,6,7,8,9 and *
$('.your-field').mask('00/00/0000', {translation: {0: {pattern: /[0-9*]/}}});

// optional digits
// way 1
$('.ip_address').mask('099.099.099.099');
// way 2
$('.ip_address').mask('0ZZ.0ZZ.0ZZ.0ZZ', {translation:  {Z: {pattern: /[0-9]/, optional: true}}});

// recursive digits
$('.money_example').mask('#.##0,00', {reverse: true});

// fallback digits
$('.field_with_fallback').mask("00r00r0000", {
  translation: {
    r: {
      pattern: /[\/]/,
      fallback: '/'
    },
    placeholder: "__/__/____"
  }
});

// Removing the mask
$('.date').unmask();

// Getting the unmasked typed value
$('.date').cleanVal();

// Getting a masked value programmatically
$('.date').masked('19840807');
