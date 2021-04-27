import Zumly from 'zumly';

const homeView = `<div class="z-view">
    <div class='card zoom-me' data-to='newView'></div>
  </div>`;

const app = new Zumly({
    mount: '.className',
    initialView: 'homeView',
    views: {
        homeView,
    },
    transitions: {
        effects: ['sepia'],
        cover: 'height',
        duration: '1300ms',
        ease: 'cubic-bezier(0.25,0.1,0.25,1)',
    },
    debug: true,
});

// $ExpectType Promise<void>
app.init();

// $ExpectType number
app.zoomLevel();

// $ExpectType Promise<void>
app.zoomIn(new Element());

// $ExpectType void
app.zoomOut();
