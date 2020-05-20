import page from 'page';

//***********************************************************************
// Basic Example
// https://github.com/visionmedia/page.js/tree/master/examples/basic
//************************************************************************
page.base('/basic');
page('/', index);
page('/about', about);
page('/contact', contact);
page('/contact/:contactName', contact);
page('/contact/inline/:contactName', ctx => { });
page();
page({
    click: false,
    popstate: true,
    dispatch: false,
    hashbang: true,
    decodeURLComponents: false
});
page({
    hashbang: true
});

var index: PageJS.Callback = function() {
    document.querySelector('p')
    .textContent = 'viewing index';
}
var about: PageJS.Callback = function() {
    document.querySelector('p')
    .textContent = 'viewing about';
}
var contact: PageJS.Callback = function(ctx) {
    document.querySelector('p')
    .textContent = 'viewing contact ' + (ctx.params.contactName || '');
}

//***********************************************************************
// State Example
// https://github.com/visionmedia/page.js/tree/master/examples/state/app.js
//************************************************************************
interface Avatars {
    [idx: string]: string;
}
var avatars: Avatars = {
    glottis: 'http://homepage.ntlworld.com/stureek/images/glottis03.jpg',
    manny: 'http://kprojekt.net/wp-content/uploads/manny.jpg',
    sal: 'http://homepage.ntlworld.com/stureek/images/sal01.jpg'
};

page.base('/state');
page('/', index2);
page('/user/:name', load, show);
page('*', notfound);
page();
// everything below is not part of page.js
// just callbacks etc..
function text(str: string) {
    document.querySelector('p').textContent = str;
}
function index2() {
    text('Click a user below to load their avatar');
    (<HTMLElement>document.querySelector('img'))
    .style.display = 'none';
}
var load: PageJS.Callback = function (ctx, next) {
    // check if we have .state.avatar already available
    // this could for example be a cached html fragment.
    if (ctx.state.avatar) {
        ctx['avatar'] = ctx.state.avatar;
        next();
        return;
    }
    // pretend we're querying some database etc
    setTimeout(function () {
        // you can assign properties to the context
        // for use between these functions. The .state
        // property is what's saved in history.
        ctx.state.avatar = ctx['avatar'] = avatars[ctx.params.name];
        ctx.save();
        next();
    }, 600);
}
var show: PageJS.Callback = function (ctx) {
    var img: any = document.querySelector('img');
    img.src = ctx['avatar'];
    img.style.display = 'block';
    text('Showing ' + ctx.params.name);
}
function notfound() {
    document.querySelector('p')
    .textContent = 'not found';
}
