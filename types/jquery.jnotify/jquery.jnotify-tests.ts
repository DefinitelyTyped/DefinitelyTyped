$(document).ready(function () {
    $('#StatusBar').jnotifyInizialize({
        oneAtTime: true
    });
    $('#Notification')
        .jnotifyInizialize({
            oneAtTime: false,
            appendType: 'append'
        })
        .css({
            'position': 'absolute',
            'marginTop': '20px',
            'right': '20px',
            'width': '250px',
            'z-index': '9999'
        });
    $('#addStatusBarMessage').click(function () {
        $('#StatusBar').jnotifyAddMessage({
            text: 'This is a non permanent message.',
            permanent: false,
            showIcon: false
        });
    });

    $('#addStatusBarError').click(function () {
        $('#StatusBar').jnotifyAddMessage({
            text: 'This is a permanent error.',
            permanent: true,
            type: 'error'
        });
    });

    $('#addNotificationMessage').click(function () {
        $('#Notification').jnotifyAddMessage({
            text: 'This is a non permanent message.',
            permanent: false
        });
    });

    $('#addNotificationError').click(function () {
        $('#Notification').jnotifyAddMessage({
            text: 'This is a permanent error.',
            permanent: true,
            type: 'error'
        });
    });
});
