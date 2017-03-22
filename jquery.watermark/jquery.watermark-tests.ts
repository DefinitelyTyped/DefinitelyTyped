$('#inputId').watermark('Required information');
$('#inputId').watermark('Required information', { className: 'myClassName' });
$('#inputId').watermark('Search', { useNative: false });

$.watermark.options.className = 'myClass';

$.watermark.options.useNative = false;

var myFunction;
$.watermark.options.useNative = myFunction;

$.watermark.options.hideBeforeUnload = false;

$.watermark.options = {
    className: 'myClass',
    useNative: false,
    hideBeforeUnload: false
};

$.watermark.options.hideBeforeUnload = true;
$.watermark.show('input.optional');
$.watermark.hide('#myInput');
$.watermark.showAll();
$.watermark.hideAll();