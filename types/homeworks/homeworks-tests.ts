const element: JQuery = $('#element');
const target: JQuery = $('#target');

homeworks.disableHook();

element.checkbox({
    /* Empty options */
})
    .on('change', (event: JQuery.Event) => {
        /* HomeWorks native event */
    });

element.converter({
    /* Empty options */
});

element.dropdown({
    /* Empty options */
});

const dropdownHandlerTarget: JQuery = element.addHandler(target);

element.input({
    /* Empty options */
})
    .on('change', (event: JQuery.Event) => {
        /* HomeWorks native event */
    });

element.modal({
    /* Any options */
})
    .each(() => {
        /* Chaining */
    });
element.modal('show');
element.modal('hide');
element.modal('open');
element.modal('close');

notification('title', 'content', 'url', 'success');

element
    .ripple({
        /* Object options */
    })
    .on('start', (event: homeworks.RippleEvent) => {
    });

element
    .start({
        x: 1,
        y: 2
    });

element.spinner({
    type: 'any',
    empty: 'any'
})
    .on('change', (event: JQuery.Event) => {
        /* HomeWorks native event */
    });

element.tab('method');
element.tab({
    active: 0
})
    .on('move', (event: homeworks.TabEvent) => {
        /* HomeWorks step event */
    });

element.step('method');
element.step({
    active: 0
})
    .on('move', (event: homeworks.StepEvent) => {
        /* HomeWorks step event */
    });

toast('hello homeworks');
toast({
    message: 'hello homeworks'
});

element
    .toggle({
        placeholder: 'placeholder'
    })
    .on('change', (event: JQuery.Event) => {
        /* HomeWorks native event */
    });

element
    .upload({
        url: 'url',
        type: 'type',
        data: {},
        dest: 'dest',
        isBtn: true,
        beforeStart() {
        },
        complete(data: any) {
        },
        success(data?: any, state?: any, xhr?: any) {
        },
        error(xhr?: any, state?: any, error?: any) {
        },
        extensions: 'any'
    });
