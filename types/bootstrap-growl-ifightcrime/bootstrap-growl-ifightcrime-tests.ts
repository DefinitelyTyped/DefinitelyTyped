// basic usage
$(document).ready(() => {
    $.bootstrapGrowl('Message to show in alert');
});

// with options example
let offsetOptions: BootstrapGrowlIfightcrime.OffsetOption = {
    from: 'top',
    amount: 20
};

let options: BootstrapGrowlIfightcrime.Options = {
    ele: 'body',
    type: 'info',
    offset: offsetOptions,
    align: 'right',
    width: 250,
    delay: 4000,
    allow_dismiss: true,
    stackup_spacing: 10
};

$(document).ready(() => {
    $.bootstrapGrowl('Alert with options', options);
});
