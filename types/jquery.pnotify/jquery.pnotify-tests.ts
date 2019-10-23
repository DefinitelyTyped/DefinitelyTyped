function test_pnotify() {


    new PNotify({
        title: 'Regular Notice',
        text: 'Check me out! I\'m a notice.'
    });

    new PNotify({
        title: 'Sticky Notice',
        text: 'Check me out! I\'m a sticky notice. You\'ll have to close me yourself.',
        hide: false
    });
    new PNotify({
        title: 'See Through Notice',
        text: 'No one ever pays attention to me. Why should they? I\'m practically invisible.',
        opacity: .8
    });
    new PNotify({
        title: 'No Shadow Notice',
        text: 'I don\'t have a shadow. (It\'s cause I\'m a vampire or something. Or is that reflections...)',
        shadow: false
    });
    // new PNotify('Check me out! I\'m a notice.');

    // new PNotify(Math.round(Math.random() * 9999));

    new PNotify({
        title: 'PIcon Notice',
        text: 'I have an icon that uses the PIcon styles.',
        icon: 'picon picon-mail-unread-new'
    });

    new PNotify({
        title: 'jQuery UI Icon Notice',
        text: 'I have an icon that uses the jQuery UI icon styles.',
        icon: 'ui-icon ui-icon-mail-closed'
    });

    new PNotify({
        title: 'Bootstrap Icon Notice',
        text: 'I have an icon that uses the Bootstrap icon styles.',
        icon: 'glyphicon glyphicon-envelope'
    });

    new PNotify({
        title: 'No Icon Notice',
        text: 'I have no icon.',
        icon: false
    });

    new PNotify({
        title: 'Bootstrap Notice',
        text: 'Look at my beautiful styling! ^_^',
        styling: 'bootstrap3'
    });
    new PNotify({
        title: 'Bootstrap Info',
        text: 'Look at my beautiful styling! ^_^',
        type: 'info',
        styling: 'bootstrap3'
    });
    new PNotify({
        title: 'Bootstrap Success',
        text: 'Look at my beautiful styling! ^_^',
        type: 'success',
        styling: 'bootstrap3'
    });
    new PNotify({
        title: 'Bootstrap Error',
        text: 'Look at my beautiful styling! ^_^',
        type: 'error',
        styling: 'bootstrap3'
    });
    new PNotify({
        title: 'jQuery UI Notice',
        text: 'Look at my beautiful styling! ^_^',
        styling: 'jqueryui'
    });
    new PNotify({
        title: 'jQuery UI Info',
        text: 'Look at my beautiful styling! ^_^',
        type: 'info',
        styling: 'jqueryui'
    });
    new PNotify({
        title: 'jQuery UI Success',
        text: 'Look at my beautiful styling! ^_^',
        type: 'success',
        styling: 'jqueryui'
    });
    new PNotify({
        title: 'jQuery UI Error',
        text: 'Look at my beautiful styling! ^_^',
        type: 'error',
        styling: 'jqueryui'
    });
    new PNotify({
        title: 'Font Awesome Notice',
        text: 'Look at my beautiful styling! ^_^',
        styling: 'fontawesome'
    });
    new PNotify({
        title: 'Font Awesome Info',
        text: 'Look at my beautiful styling! ^_^',
        type: 'info',
        styling: 'fontawesome'
    });
    new PNotify({
        title: 'Font Awesome Success',
        text: 'Look at my beautiful styling! ^_^',
        type: 'success',
        styling: 'fontawesome'
    });
    new PNotify({
        title: 'Font Awesome Error',
        text: 'Look at my beautiful styling! ^_^',
        type: 'error',
        styling: 'fontawesome'
    });

    new PNotify({
        title: 'New Thing',
        text: 'Just to let you know, something happened.',
        type: 'info'
    });

    new PNotify({
        title: 'Sticky Info',
        text: 'Sticky info, you know, like a newspaper covered in honey.',
        type: 'info',
        hide: false
    });

    new PNotify({
        title: 'See Through Info',
        text: 'Not only does it not matter, but I don\'t even care if you see this info.',
        type: 'info',
        opacity: .8
    });

    new PNotify({
        title: 'No Shadow Success',
        text: 'I don\'t have a shadow. (It\'s cause I\'m a vampire or something. Or is that reflections...)',
        type: 'success',
        shadow: false
    });

    new PNotify({
        title: 'PIcon Success',
        text: 'We reached the moon first! See, we planted a flag.',
        type: 'success',
        icon: 'picon picon-flag-green'
    });

    new PNotify({
        title: 'Oh No!',
        text: 'Something terrible happened.',
        type: 'error'
    });

    new PNotify({
        title: 'No Icon Error',
        text: 'I have no icon.',
        type: 'error',
        icon: false
    });

    new PNotify({
        title: 'No Sticky Button Notice',
        text: 'Check me out! I\'m a sticky notice with no unsticky button. You\'ll have to close me yourself.',
        hide: false,
        buttons: {
            sticker: false
        }
    });

    new PNotify({
        title: 'No Mouse Reset Notice',
        text: 'I don\'t care if you move your mouse over me, I\'ll disappear when I want.',
        mouse_reset: false
    });

    new PNotify({
        title: '<em>Escaped Notice</em>',
        title_escape: true,
        text: $('#evil_html').html(),
        text_escape: true
    });

    new PNotify({
        title: 'Non-Blocking Notice',
        text: 'I\'m a special kind of notice called "non-blocking". When you hover over me I\'ll fade to show the elements underneath. Feel free to click any of them just like I wasn\'t even here.\n\nNote: HTML links don\'t trigger in some browsers, due to security settings.',
        nonblock: {
            nonblock: true,
            nonblock_opacity: .2
        }
    });

    new PNotify({
        title: 'Custom Styling',
        text: 'I have an additional class that\'s used to give me special styling. I always wanted to be pretty.',
        addclass: 'custom',
        icon: 'picon picon-32 picon-fill-color',
        opacity: .8,
        nonblock: {
            nonblock: true,
            nonblock_opacity: .2
        }
    });

    new PNotify({
        title: "PNotify Stacks",
        text: "Stacks are used to position notices and determine where new notices will go when they're created. Each notice that's placed into a stack will be positioned related to the other notices in that stack. There is no limit to the number of stacks, and no limit to the number of notices in each stack.",
        type: "info",
        icon: "fa fa-bars",
        delay: 20000,
        history: false,
        stack: {}
    });

    var type = "error";
    var stack_bottomright = { "dir1": "up", "dir2": "left", "firstpos1": 25, "firstpos2": 25 };

    var opts = {
        title: "Over Here",
        text: "Check me out. I'm in a different stack.",
        addclass: "stack-bar-top",
        cornerclass: "",
        width: "100%",
        stack: stack_bottomright,
        type: "error"
    } as PNotifyOptions;

    new PNotify(opts);

    new PNotify({
        title: 'Show Effect',
        text: 'I use a different effect.',
        animation: 'show'
    });

    new PNotify({
        title: 'Custom styling',
        text: 'Test all custom styling properties',
        styling: {
            container: "alert",
            notice: "alert-warning",
            notice_icon: "fa fa-exclamation-circle",
            info: "alert-info",
            info_icon: "fa fa-info",
            success: "alert-success",
            success_icon: "fa fa-check",
            error: "alert-danger",
            error_icon: "fa fa-warning",
            closer: "fa fa-times",
            pin_up: "fa fa-pause",
            pin_down: "fa fa-play"
        }
    });

    PNotify.removeAll();
}
