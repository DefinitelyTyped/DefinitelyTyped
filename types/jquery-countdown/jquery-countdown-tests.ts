// basic usage
$(document).ready(() => {
    $('#countdown').countdown('2019/01/01');

    // with options
    $('#countdown').countdown('2019/01/01', {
        elapse: true
    });

    // with options and callback
    $('#countdown').countdown('2019/01/01', {
        elapse: true
    }, event => {
        $('#countdown').html(event.strftime('%w weeks %d days %H:%M:%S'));
    });

    // Methods
    $('#countdown').on('update.countdown', (event => {
        $('#countdown').html(event.strftime('%w weeks %d days %H:%M:%S'));
    }));
    $('#countdown').on('finish.countdown', (event => {
        $('#countdown').html(event.strftime('%w weeks %d days %H:%M:%S'));
    }));
    $('#countdown').on('stop.countdown', (event => {
        $('#countdown').html(event.strftime('%w weeks %d days %H:%M:%S'));
    }));

    // Controls
    $('#countdown').countdown('start');
    $('#countdown').countdown('stop');
    $('#countdown').countdown('pause');
    $('#countdown').countdown('resume');
});
