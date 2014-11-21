/// <reference path="../jquery/jquery.d.ts"/>
/// <reference path="jquery.pnotify.d.ts" />

function test_pnotify() {


    $.pnotify({
        title: 'Regular Notice',
        text: 'Check me out! I\'m a notice.'
    });

    $.pnotify({
        title: 'Sticky Notice',
        text: 'Check me out! I\'m a sticky notice. You\'ll have to close me yourself.',
        hide: false
    });
    $.pnotify({
        title: 'See Through Notice',
        text: 'No one ever pays attention to me. Why should they? I\'m practically invisible.',
        opacity: .8
    });
    $.pnotify({
        title: 'No Shadow Notice',
        text: 'I don\'t have a shadow. (It\'s cause I\'m a vampire or something. Or is that reflections...)',
        shadow: false
    });
    $.pnotify('Check me out! I\'m a notice.');

    $.pnotify(Math.round(Math.random() * 9999));

    $.pnotify({
        title: 'PIcon Notice',
        text: 'I have an icon that uses the PIcon styles.',
        icon: 'picon picon-mail-unread-new'
    });

    $.pnotify({
        title: 'jQuery UI Icon Notice',
        text: 'I have an icon that uses the jQuery UI icon styles.',
        icon: 'ui-icon ui-icon-mail-closed'
    });

    $.pnotify({
        title: 'Bootstrap Icon Notice',
        text: 'I have an icon that uses the Bootstrap icon styles.',
        icon: 'glyphicon glyphicon-envelope'
    });

    $.pnotify({
        title: 'No Icon Notice',
        text: 'I have no icon.',
        icon: false
    });

    $.pnotify({
        title: 'Bootstrap Notice',
        text: 'Look at my beautiful styling! ^_^',
        styling: 'bootstrap3'
    });
    $.pnotify({
        title: 'Bootstrap Info',
        text: 'Look at my beautiful styling! ^_^',
        type: 'info',
        styling: 'bootstrap3'
    });
    $.pnotify({
        title: 'Bootstrap Success',
        text: 'Look at my beautiful styling! ^_^',
        type: 'success',
        styling: 'bootstrap3'
    });
    $.pnotify({
        title: 'Bootstrap Error',
        text: 'Look at my beautiful styling! ^_^',
        type: 'error',
        styling: 'bootstrap3'
    });
    $.pnotify({
        title: 'jQuery UI Notice',
        text: 'Look at my beautiful styling! ^_^',
        styling: 'jqueryui'
    });
    $.pnotify({
        title: 'jQuery UI Info',
        text: 'Look at my beautiful styling! ^_^',
        type: 'info',
        styling: 'jqueryui'
    });
    $.pnotify({
        title: 'jQuery UI Success',
        text: 'Look at my beautiful styling! ^_^',
        type: 'success',
        styling: 'jqueryui'
    });
    $.pnotify({
        title: 'jQuery UI Error',
        text: 'Look at my beautiful styling! ^_^',
        type: 'error',
        styling: 'jqueryui'
    });
    $.pnotify({
        title: 'Font Awesome Notice',
        text: 'Look at my beautiful styling! ^_^',
        styling: 'fontawesome'
    });
    $.pnotify({
        title: 'Font Awesome Info',
        text: 'Look at my beautiful styling! ^_^',
        type: 'info',
        styling: 'fontawesome'
    });
    $.pnotify({
        title: 'Font Awesome Success',
        text: 'Look at my beautiful styling! ^_^',
        type: 'success',
        styling: 'fontawesome'
    });
    $.pnotify({
        title: 'Font Awesome Error',
        text: 'Look at my beautiful styling! ^_^',
        type: 'error',
        styling: 'fontawesome'
    });

    $.pnotify({
        title: 'New Thing',
        text: 'Just to let you know, something happened.',
        type: 'info'
    });

    $.pnotify({
        title: 'Sticky Info',
        text: 'Sticky info, you know, like a newspaper covered in honey.',
        type: 'info',
        hide: false
    });

    $.pnotify({
        title: 'See Through Info',
        text: 'Not only does it not matter, but I don\'t even care if you see this info.',
        type: 'info',
        opacity: .8
    });

    $.pnotify({
        title: 'No Shadow Success',
        text: 'I don\'t have a shadow. (It\'s cause I\'m a vampire or something. Or is that reflections...)',
        type: 'success',
        shadow: false
    });

    $.pnotify({
        title: 'PIcon Success',
        text: 'We reached the moon first! See, we planted a flag.',
        type: 'success',
        icon: 'picon picon-flag-green'
    });

    $.pnotify({
        title: 'Oh No!',
        text: 'Something terrible happened.',
        type: 'error'
    });

    $.pnotify({
        title: 'No Icon Error',
        text: 'I have no icon.',
        type: 'error',
        icon: false
    });

    $.pnotify({
        title: 'No Sticky Button Notice',
        text: 'Check me out! I\'m a sticky notice with no unsticky button. You\'ll have to close me yourself.',
        hide: false,
        sticker: false
    });

    $.pnotify({
        title: 'No Mouse Reset Notice',
        text: 'I don\'t care if you move your mouse over me, I\'ll disappear when I want.',
        mouse_reset: false
    });

    $.pnotify({
        title: '<em>Escaped Notice</em>',
        title_escape: true,
        text: $('#evil_html').html(),
        text_escape: true
    });

    $.pnotify({
        title: 'Non-Blocking Notice',
        text: 'I\'m a special kind of notice called "non-blocking". When you hover over me I\'ll fade to show the elements underneath. Feel free to click any of them just like I wasn\'t even here.\n\nNote: HTML links don\'t trigger in some browsers, due to security settings.',
        nonblock: true,
        nonblock_opacity: .2
    });

    $.pnotify({
        title: 'Custom Styling',
        text: 'I have an additional class that\'s used to give me special styling. I always wanted to be pretty.',
        addclass: 'custom',
        icon: 'picon picon-32 picon-fill-color',
        opacity: .8,
        nonblock: true,
        nonblock_opacity: .2
    });

    $.pnotify({
        title: "PNotify Stacks",
        text: "Stacks are used to position notices and determine where new notices will go when they're created. Each notice that's placed into a stack will be positioned related to the other notices in that stack. There is no limit to the number of stacks, and no limit to the number of notices in each stack.",
        type: "info",
        icon: "fa fa-bars",
        delay: 20000,
        history: false,
        stack: false
    });

    var type = "error";
    var stack_bottomright = {"dir1": "up", "dir2": "left", "firstpos1": 25, "firstpos2": 25};

    var opts = {
        title: "Over Here",
        text: "Check me out. I'm in a different stack.",
        addclass: "stack-bar-top",
        cornerclass: "",
        width: "100%",
        stack: stack_bottomright,
        type: "error"

    };
    $.pnotify(opts);

    $.pnotify({
        title: 'Show Effect',
        text: 'I use a different effect.',
        animation: 'show'
    });

    $.pnotify_remove_all();

}
