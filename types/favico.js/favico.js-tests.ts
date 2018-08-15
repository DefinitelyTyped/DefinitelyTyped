// constructor options

var plain = (): favicojs.Favico => new Favico({
});

var repositioned = (): favicojs.Favico => new Favico({
    position: 'upleft'
});

var shaped = (): favicojs.Favico => new Favico({
    type: 'rectangle'
});

var usingCustomFont = (): favicojs.Favico => new Favico({
    fontFamily: 'FontAwesome',
    elementId: 'badgefont'
});

var colored = (): favicojs.Favico => new Favico({
    bgColor: '#5CB85C',
    textColor: '#ff0'
});

var domBound = (): favicojs.Favico => new Favico({
    element: document.getElementById('favico')
});

var iconUrlHandler = (url: string): void => {
    console.log(url);
};
var withDataUrl = (): favicojs.Favico => new Favico({
    dataUrl: iconUrlHandler
});


var favicons: favicojs.Favico[] = [
    plain(),
    repositioned(),
    shaped(),
    usingCustomFont(),
    colored(),
    domBound(),
    withDataUrl(),
];


// public methods

favicons.map(favico => {

    // badge
    favico.badge(2);
    favico.badge(3, 'slide');
    favico.badge(3000, {animation: 'none', type: 'rectangle'});
    favico.reset();

    // image
    favico.image(document.getElementById('image'));

    // video
    favico.video(document.getElementById('video'));

    // webcam
    favico.webcam();
});
