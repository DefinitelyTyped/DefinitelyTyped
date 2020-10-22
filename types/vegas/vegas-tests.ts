$(() => {
    $('body')
        .vegas({
            slides: [{ src: 'img1.jpg' }, { src: 'img2.jpg' }, { src: 'img3.jpg' }],
            init: settings => {},
            end: (index, slide) => {},
            pause: (index, slide) => {},
            play: (index, slide) => {},
            walk: (index, slide) => {},
        })
        .on('vegasend', (event, index, slide) => {})
        .on('vegasinit', (event, settings) => {})
        .on('vegaspause', (event, index, slide) => {})
        .on('vegasplay', (event, index, slide) => {})
        .on('vegaswalk', (event, index, slide) => {});
    $.fn.vegas.defaults;
    $.fn.vegas.isVideoCompatible();
    $.fn.vegas({
        timer: false,
        transition: 'slideLeft2',
        slides: [
            { src: '/img/slide1.jpg' },
            { src: '/img/slide2.jpg', transition: 'slideRight2' },
            { src: '/img/slide3.jpg' },
            { src: '/img/slide4.jpg', transition: 'slideRight2' },
        ],
        overlay: true,
    });
    $.fn.vegas({
        delay: 7000,
        timer: false,
        shuffle: true,
        firstTransition: 'fade',
        firstTransitionDuration: 5000,
        transition: 'slideDown2',
        transitionDuration: 2000,
        animation: ['kenburnsUp', 'kenburnsDown', 'kenburnsLeft', 'kenburnsRight'],
        slides: [
            { src: '/img/slide1.jpg' },
            { src: '/img/slide2.jpg' },
            { src: '/img/slide3.jpg' },
            { src: '/img/slide4.jpg' },
        ],
    });
    $.fn.vegas({
        slides: [
            { src: '/img/slide1.jpg' },
            {
                src: '/img/slide2.jpg',
                video: {
                    src: ['/videos/video.mp4', '/videos/video.webm', '/videos/video.ogv'],
                    loop: false,
                    mute: true,
                },
            },
        ],
    });
    $.vegas.isVideoCompatible = () => {
        const devices = /(Android|webOS|Phone|iPad|iPod|BlackBerry|Windows Phone)/i;
        return !devices.test(navigator.userAgent);
    };
});
