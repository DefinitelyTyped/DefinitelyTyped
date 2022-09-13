import * as Readmore from 'readmore-js';

const options: Readmore.Options = {
    speed: 100,
    collapsedHeight: 200,
    heightMargin: 16,
    moreLink: '<a href="#">Read more</a>',
    lessLink: () => '<a href="#">Close</a>',
    embedCSS: true,
    blockCSS: 'display: block; width: 100%;',
    startOpen: false,
    sourceOrder: 'after',
    beforeToggle: (trigger: Element, element: Element, expanded: boolean) => {
        console.log(trigger, element, element);
    },
    afterToggle: (trigger: Element, element: Element, expanded: boolean) => {
        console.log(trigger, element, element);
    },
    blockProcessed: (element: Element, collapsable: boolean) => {
        console.log(element, element);
    }
};

new Readmore('.selector', options);

const outer = new Readmore('.outer');
outer.toggle('.inner');
outer.destroy();
