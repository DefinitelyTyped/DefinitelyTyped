$.ajax('url');
const $div = $('div');
for (const x of $div) {
    x.children.length.toExponential();
}

$('div')[0].children.length.toFixed();

if ($('div') instanceof jQuery) {
    console.log('Success!');
}

$().on('events', false);

$('#myElement').on('custom', 45, function(event, data) {
    console.dir(this);
    console.dir(arguments);
    event.data === 23;
});

const testObj = {
    myProp: true,
    name: 'Rogers',
};

const results = $.map(testObj, (propertyOfObject, key) => {
    switch (key) {
        case 'myProp':
            return 1;
        case 'name':
            return false;
    }
});

for (const result of results) {
    result === 1;
}

const cb = $.Callbacks();

const pObj: jQuery.PlainObject = {};

{
    const e: jQuery.Event = {} as any;
    if (e instanceof jQuery.Event) {
        e.type === '';
    }
}

const toa: jQuery.TypeOrArray<string> = [];

const jq: JQueryStatic = $;

{
    // Create a new jQuery.Event object without the "new" operator.
    const e = new jQuery.Event('click');
    if (e instanceof jQuery.Event) {
        console.log(e);
    }

    // trigger an artificial click event
    jQuery('body').trigger(e);
}

{
    // Create a new jQuery.Event object without the "new" operator.
    const e = jQuery.Event('click');

    // trigger an artificial click event
    jQuery('body').trigger(e);
}

{
    // Create a new jQuery.Event object with specified event properties.
    const e = jQuery.Event('keydown', { keyCode: 64 });

    // trigger an artificial keydown event with keyCode 64
    jQuery('body').trigger(e);
}

{
    const el: HTMLElement = {} as any;
    const queue = jQuery.queue(el);
    queue[0] === '';
}

$().ajaxComplete(() => {
    return false;
});

$().attr('attribute') === '';

$.each({ length: 3 }, (index, val) => {
    index === 3;
});

{
    const context = {
        myFunc() { },
        myBool: false,
    };
    $.proxy(context, 'myFunc');
}

jQuery.readyException = (error) => {
    console.error(error);
};

{
    const p = new Promise((resolve, reject) => { });
    p.then();
}
