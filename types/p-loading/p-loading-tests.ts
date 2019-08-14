$('#test').ploading({action: 'show'});

$('#test').ploading({action: 'hide'});

$('#test').ploading({action: 'destroy'});

$('#test').ploading({action: 'hide', useAddOns: ['addOnName']});

$.fn.ploading.defaults = {
    // ploading static settings
    useAddOns: ['addOnName']
};

$.fn.ploading.defaults = {
    spinnerClass: 'your-spinner-class'
};

$.fn.ploading.defaults = {
    spinnerHTML: '<i></i>',
    spinnerClass: 'fa fa-spinner fa-spin p-loading-fontawesome'
};
