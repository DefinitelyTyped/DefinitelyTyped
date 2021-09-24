import page, { Callback, Context } from 'page';

const index: Callback = () => {
    document.querySelector('p')!
        .textContent = 'viewing index';
};
const about: Callback = () => {
    document.querySelector('p')!
        .textContent = 'viewing about';
};

function callback(ctx: Context, next: () => void) {
}

const customCallback: Callback = callback;

const contact: Callback = (ctx) => {
    document.querySelector('p')!
        .textContent = 'viewing contact ' + (ctx.params.contactName || '');
};
const load: Callback = (ctx, next) => {
    // check if we have .state.avatar already available
    // this could for example be a cached html fragment.
    if (ctx.state.avatar) {
        ctx['avatar'] = ctx.state.avatar;
        next();
        return;
    }
    // pretend we're querying some database etc
    setTimeout(() => {
            // you can assign properties to the context
            // for use between these functions. The .state
            // property is what's saved in history.
            ctx.state.avatar = ctx['avatar'] = avatars[ctx.params.name];
            ctx.save();
            next();
        }, 600);
};

const show: Callback = (ctx) => {
    const img: any = document.querySelector('img');
    img.src = ctx['avatar'];
    img.style.display = 'block';
    text('Showing ' + ctx.params.name);
};

function text(str: string) {
    document.querySelector('p')!.textContent = str;
}

function index2() {
    text('Click a user below to load their avatar');
    (<HTMLElement> document.querySelector('img'))
    .style.display = 'none';
}

function notfound() {
    document.querySelector('p')!
    .textContent = 'not found';
}

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
    decodeURLComponents: false,
});
page({
    hashbang: true
});

//***********************************************************************
// State Example
// https://github.com/visionmedia/page.js/tree/master/examples/state/app.js
//************************************************************************
interface Avatars {
    [idx: string]: string;
}
const avatars: Avatars = {
    glottis: 'http://homepage.ntlworld.com/stureek/images/glottis03.jpg',
    manny: 'http://kprojekt.net/wp-content/uploads/manny.jpg',
    sal: 'http://homepage.ntlworld.com/stureek/images/sal01.jpg'
};

page.base('/state');
page('/', index2);
page('/user/:name', load, show);
page('*', notfound);
page();

const homePage = page.create();
const aboutPage = page.create({});

declare var iframe: HTMLIFrameElement;
const otherPage = page.create({
    window: iframe.contentWindow!,
});
otherPage('/', index2);
otherPage.clickHandler; // $ExpectType (e: MouseEvent) => void

page.strict(true); // $ExpectType void
page.strict(false); // $ExpectType void
page.strict(); // $ExpectType boolean
page.current; // $ExpectType string
page.len; // $ExpectType number
