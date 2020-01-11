$('.js-timeago').timeago()
    .timeago('update', '2019-12-25T01:17:13');
$('.js-timeago2')
    .timeago('updateFromDOM')
    .timeago('dispose');

$.timeago.settings.cutoff = 86400;
$.timeago.settings.allowFuture = true;

const a: string = $.timeago('2019-12-25T01:17:13');
