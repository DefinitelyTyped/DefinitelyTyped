import { alert, force, confirm, input, select, date, setOptions, hideAlerts } from 'notie';

// @ts-expect-error
alert({});
alert({ text: 'Hello, World!', position: 'bottom' });
alert({ text: 'Hello, World!', type: 4 });
alert({ text: 'Hello, World!', type: 'info' });

// @ts-expect-error
force({});
force({
    text: 'Alert',
    callback() {
        alert({ text: 'callback' });
    },
});
force({ text: 'Alert' }, () => alert({ text: 'callback' }));

// @ts-expect-error
confirm({});
confirm({ text: 'Are you sure?' });
confirm({
    text: 'Are you sure?',
    submitCallback() {
        alert({ text: 'Confirmed' });
    },
    cancelCallback() {
        alert({ text: 'Cancelled' });
    },
});
confirm({ text: 'Are you sure?' }, () => alert({ text: 'Confirmed' }));
confirm(
    { text: 'Are you sure?' },
    () => alert({ text: 'Confirmed' }),
    () => alert({ text: 'Cancelled' }),
);

// @ts-expect-error
input({});
input({
    text: 'Input',
    submitCallback() {
        alert({ text: 'Confirmed' });
    },
    cancelCallback() {
        alert({ text: 'Cancelled' });
    },
});
input({ text: 'Input' }, () => alert({ text: 'Confirmed' }));
input(
    { text: 'Input' },
    () => alert({ text: 'Confirmed' }),
    () => alert({ text: 'Cancelled' }),
);

// @ts-expect-error
select({});
// @ts-expect-error
select({ text: 'Select' });
select({
    text: 'Select',
    choices: [
        {
            type: 'abc',
            text: 'Option 1',
            handler: () => {},
        },
        {
            text: 'Option 2',
            handler: () => {},
        },
    ],
});
select({
    text: 'Select',
    choices: [{ text: 'foo', handler: () => {} }],
    cancelCallback() {
        alert({ text: 'Cancelled' });
    },
});
select(
    {
        text: 'Select',
        choices: [{ text: 'foo', handler: () => {} }],
    },
    () => alert({ text: 'Cancelled' }),
);

// @ts-expect-error
date({});
date({ value: new Date() });
date({
    value: new Date(),
    submitCallback() {
        alert({ text: 'Confirmed' });
    },
    cancelCallback() {
        alert({ text: 'Cancelled' });
    },
});
date({ value: new Date() }, () => alert({ text: 'Confirmed' }));
date(
    { value: new Date() },
    () => alert({ text: 'Confirmed' }),
    () => alert({ text: 'Cancelled' }),
);

setOptions({});
setOptions({ dateMonths: [] });
setOptions({ classes: {} });
setOptions({ ids: {} });
setOptions({ positions: {} });

hideAlerts();
hideAlerts(() => alert({ text: 'Alerts hidden' }));
