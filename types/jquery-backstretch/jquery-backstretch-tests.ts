var backstretch = jQuery.backstretch(['image.png'], {
    centeredX: false,
    centeredY: false,
    duration: 'normal',
    fade: 1000
});

backstretch.next();
backstretch.prev();
backstretch.pause();
backstretch.resize();
backstretch.resume();
backstretch.destroy(true);

jQuery('body').backstretch(['image.png']).pause();
jQuery('body').backstretch('resume');
