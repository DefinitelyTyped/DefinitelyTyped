function test_cases() {
    $('#switch').bootstrapSwitch();

    $('#switch').bootstrapSwitch({
        state: false
    });

    $('#switch').bootstrapSwitch({
        state: false,
        disabled: true
    });

    //var mySwitch = $('#switch').get(0);
    //mySwitch.toggleAnimate();

    $('#switch').bootstrapSwitch('state', true, true);

    $('#switch').bootstrapSwitch('state') === true;

    $('#switch').bootstrapSwitch('onText') === 'test';

    $('#switch').on('switchChange.bootstrapSwitch', (event) => {
        console.log($(event.target).val());
    });
}
