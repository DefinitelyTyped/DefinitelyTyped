/**
 * These options are default
 */
const options: ICheck.Options = {
    // 'checkbox' or 'radio' to style only checkboxes or radio buttons, both by default
    handle: '',

    // base class added to customized checkboxes
    checkboxClass: 'icheckbox',

    // base class added to customized radio buttons
    radioClass: 'iradio',

    // class added on checked state (input.checked = true)
    checkedClass: 'checked',

    // if not empty, used instead of 'checkedClass' option (input type specific)
    checkedCheckboxClass: '',
    checkedRadioClass: '',

    // if not empty, added as class name on unchecked state (input.checked = false)
    uncheckedClass: '',

    // if not empty, used instead of 'uncheckedClass' option (input type specific)
    uncheckedCheckboxClass: '',
    uncheckedRadioClass: '',

    // class added on disabled state (input.disabled = true)
    disabledClass: 'disabled',

    // if not empty, used instead of 'disabledClass' option (input type specific)
    disabledCheckboxClass: '',
    disabledRadioClass: '',

    // if not empty, added as class name on enabled state (input.disabled = false)
    enabledClass: '',

    // if not empty, used instead of 'enabledClass' option (input type specific)
    enabledCheckboxClass: '',
    enabledRadioClass: '',

    // class added on indeterminate state (input.indeterminate = true)
    indeterminateClass: 'indeterminate',

    // if not empty, used instead of 'indeterminateClass' option (input type specific)
    indeterminateCheckboxClass: '',
    indeterminateRadioClass: '',

    // if not empty, added as class name on determinate state (input.indeterminate = false)
    determinateClass: '',

    // if not empty, used instead of 'determinateClass' option (input type specific)
    determinateCheckboxClass: '',
    determinateRadioClass: '',

    // class added on hover state (pointer is moved onto input)
    hoverClass: 'hover',

    // class added on focus state (input has gained focus)
    focusClass: 'focus',

    // class added on active state (mouse button is pressed on input)
    activeClass: 'active',

    // adds hoverClass to customized input on label hover and labelHoverClass to label on input hover
    labelHover: true,

    // class added to label if labelHover set to true
    labelHoverClass: 'hover',

    // increase clickable area by given % (negative number to decrease)
    increaseArea: '',

    // true to set 'pointer' CSS cursor over enabled inputs and 'default' over disabled
    cursor: false,

    // set true to inherit original input's class name
    inheritClass: false,

    // if set to true, input's id is prefixed with 'iCheck-' and attached
    inheritID: false,

    // set true to activate ARIA support
    aria: false,

    // add HTML code or text inside customized input
    insert: ''
};

$('input').iCheck({
    labelHover: false,
    cursor: true
});

// customize all inputs (will search for checkboxes and radio buttons)
$('input').iCheck();

// handle inputs only inside $('.block')
$('.block input').iCheck();

// handle only checkboxes inside $('.test')
$('.test input').iCheck({
    handle: 'checkbox'
});

// handle .vote class elements (will search inside the element, if it's not an input)
$('.vote').iCheck();

// you can also change options after inputs are customized
$('input.some').iCheck({
    // different options
});

$('input').on('ifChecked', function(event) {
    console.log(this);
    alert(event.type + ' callback');
});

// change input's state to 'checked'
$('input').iCheck('check');

// remove 'checked' state
$('input').iCheck('uncheck');

// toggle 'checked' state
$('input').iCheck('toggle');

// change input's state to 'disabled'
$('input').iCheck('disable');

// remove 'disabled' state
$('input').iCheck('enable');

// change input's state to 'indeterminate'
$('input').iCheck('indeterminate');

// remove 'indeterminate' state
$('input').iCheck('determinate');

// apply input changes, which were done outside the plugin
$('input').iCheck('update');

// remove all traces of iCheck
$('input').iCheck('destroy');

// You may also specify some function, that will be executed on each method call:
$('input').iCheck('check', () => {
    alert('Well done, Sir');
});
