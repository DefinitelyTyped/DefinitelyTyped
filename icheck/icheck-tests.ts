/// <reference types="jquery" />

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

$('input').on('ifChecked', function (event) {
    alert(event.type + ' callback');
});

$('input').iCheck('check', function () {
    alert('Well done, Sir');
});