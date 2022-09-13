const options: Glider.Options = {
    slidesToShow: 'auto',
    slidesToScroll: 'auto',
    itemWidth: undefined,
    exactWidth: false,
    duration: 0.5,
    dots: 'CSS Selector',
    arrows: {
        prev: 'CSS Selector',
        next: document.querySelector('CSS Selector'),
    },
    draggable: false,
    dragVelocity: 3.3,
    easing(x, t, b, c, d) {
        return c * (t /= d) * t + b;
    },
    scrollPropagate: false,
    eventPropagate: true,
    scrollLock: false,
    scrollLockDelay: 150,
    resizeLock: true,
    responsive: [
        {
            breakpoint: 900,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            },
        },
        {
            breakpoint: 575,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
            },
        },
    ],
};

new Glider(new HTMLDivElement());
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

// $ExpectType Glider<HTMLDivElement>
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

// $ExpectType void
glider.init();

// $ExpectType HTMLDivElement
glider.ele;

// $ExpectType Options
glider.opt;

// $ExpectType Arrow | undefined
glider.arrows.next;

// $ExpectType Arrow | undefined
glider.arrows.prev;

if (glider.arrows.prev) {
    glider.arrows.prev._func;
}

const element = document.querySelector<HTMLDivElement>('.glider');

if (element) {
    element.addEventListener('glider-add', event => {
        // $ExpectType GliderEvent<{ scroll: () => void; }>
        event;
    });

    element.addEventListener('glider-animated', event => {
        // $ExpectType GliderEvent<{ value: string | number; type: "arrow" | "dot" | "slide"; }>
        event;
    });

    element.addEventListener('glider-destroy', event => {
        // $ExpectType GliderEvent<undefined>
        event;
    });

    element.addEventListener('glider-loaded', event => {
        // $ExpectType GliderEvent<undefined>
        event;
    });

    element.addEventListener('glider-refresh', event => {
        // $ExpectType GliderEvent<undefined>
        event;
    });

    element.addEventListener('glider-remove', event => {
        // $ExpectType GliderEvent<undefined>
        event;
    });

    element.addEventListener('glider-slide-hidden', event => {
        // $ExpectType GliderEvent<{ slide: number; }>
        event;
    });

    element.addEventListener('glider-slide-visible', event => {
        // $ExpectType GliderEvent<{ slide: number; }>
        event;
    });

    Glider(element).setOption({ draggable: true });

    Glider(element).refresh();

    Glider(element).destroy();
}
