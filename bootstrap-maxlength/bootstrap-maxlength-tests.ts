/// <reference path="bootstrap-maxlength.d.ts"/>
/// <reference path="../jquery/jquery.d.ts"/>

// Examples from the projects github page
$('input[maxlength]').maxlength();

$('input.className').maxlength({
    threshold: 20
});

$('input.className').maxlength({
    alwaysShow: true,
    threshold: 10,
    warningClass: "label label-info",
    limitReachedClass: "label label-warning",
    placement: 'top',
    preText: 'used ',
    separator: ' of ',
    postText: ' chars.'
});

$('input.className').maxlength({
    alwaysShow: true,
    threshold: 10,
    warningClass: "label label-info",
    limitReachedClass: "label label-warning",
    placement: 'top',
    message: 'used %charsTyped% of %charsTotal% chars.'
});
// Testing the events
$('input.className').on('maxlength.shown', function(){
    console.log('shown');
});
$('input.className').on('maxlength.hidden', function(){
    console.log('hidden');
});
$('textarea').on('autosize.resized', function () {
    $(this).trigger('maxlength.reposition');
});


// using message string
$('input.className').maxlength({
    message: 'used %charsTyped% of %charsTotal% chars.'
});
// using message function
$('input.className').maxlength({
    threshold: 20,
    message: function (currentText, maxLength) {
        return '' + Math.ceil(currentText.length / 160) + ' SMS Message(s)';
    }
});


// placement string
$('input.className').maxlength({
    placement: 'top-left'
});
// placement object
$('input.className').maxlength({
    placement: {
        top: 10,
        left: '30%'
    }
});
// placement function
$('input.className').maxlength({
    placement: function (currentInput: JQuery, maxLengthIndicator: JQuery, currentInputPosition: BootstrapMaxlength.PositionParam) {
    }
});
