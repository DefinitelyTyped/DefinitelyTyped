const options: Glider.Options = {
    slidesToShow: 5,
    slidesToScroll: 5,
    draggable: true,
    dots: '.dots',
    arrows: {
        prev: '.glider-prev',
        next: document.querySelector('.glider-next'),
    },
    eventPropagate: true,
};

// Options.dots
new Glider(new HTMLDivElement(), {
    dots: '.dots',
});
new Glider(new HTMLDivElement(), {
    dots: document.querySelector('.dots'),
});

// Options.arrows
new Glider(new HTMLDivElement(), {
    arrows: {
        prev: '.glider-prev',
        next: '.glider-next',
    },
});
new Glider(new HTMLDivElement(), {
    arrows: {
        prev: document.querySelector('.glider-prev'),
        next: document.querySelector('.glider-next'),
    },
});

// $ExpectType Static<HTMLDivElement>
const glider = new Glider(new HTMLDivElement(), options);

// $ExpectType void
glider.destroy();

// $ExpectType void
glider.addItem(new HTMLElement());

// $ExpectType void
glider.refresh(true);

// $ExpectType void
glider.removeItem(0);

// $ExpectType void
glider.scrollItem(0, true);

// $ExpectType void
glider.scrollTo(0);

// $ExpectType void
glider.setOption(options, true);

// $ExpectType void
glider.updateControls();

// $ExpectType HTMLDivElement
glider.ele;

// $ExpectType Options
glider.opt;

document.querySelector('.glider')?.addEventListener('glider-add', event => {
    // $ExpectType GliderEvent<{ scroll: () => void; }>
    event;
});

document.querySelector('.glider')?.addEventListener('glider-animated', event => {
    // $ExpectType GliderEvent<{ value: string | number; type: "arrow" | "dot" | "slide"; }>
    event;
});

document.querySelector('.glider')?.addEventListener('glider-destroy', event => {
    // $ExpectType GliderEvent<undefined>
    event;
});

document.querySelector('.glider')?.addEventListener('glider-loaded', event => {
    // $ExpectType GliderEvent<undefined>
    event;
});

document.querySelector('.glider')?.addEventListener('glider-refresh', event => {
    // $ExpectType GliderEvent<undefined>
    event;
});

document.querySelector('.glider')?.addEventListener('glider-remove', event => {
    // $ExpectType GliderEvent<undefined>
    event;
});

document.querySelector('.glider')?.addEventListener('glider-slide-hidden', event => {
    // $ExpectType GliderEvent<{ slide: number; }>
    event;
});

document.querySelector('.glider')?.addEventListener('glider-slide-visible', event => {
    // $ExpectType GliderEvent<{ slide: number; }>
    event;
});
