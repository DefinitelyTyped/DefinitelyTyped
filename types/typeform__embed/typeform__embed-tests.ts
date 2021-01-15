import * as typeformEmbed from '@typeform/embed';

const stubContainerEl = document.createElement('div');

// optional options param
typeformEmbed.makeWidget(stubContainerEl, 'https://admin.typeform.com/to/PlBzgL');

typeformEmbed.makeWidget(stubContainerEl, 'https://admin.typeform.com/to/PlBzgL', {
    opacity: 55,
    buttonText: 'Answer this!',
    hideScrollbars: true,
    disableTracking: true,
    hideFooter: true,
    hideHeaders: false,
    onSubmit: ({ response_id }) => {
        isString(response_id);
        console.log('Typeform successfully submitted');
    },
    onReady: () => {},
});

// optional options param
typeformEmbed.makePopup('https://admin.typeform.com/to/PlBzgL');

typeformEmbed.makePopup('https://admin.typeform.com/to/PlBzgL', {
    mode: 'drawer_left',
    autoOpen: true,
    open: 'scroll',
    openValue: 0,
    autoClose: 3,
    hideScrollbars: true,
    container: stubContainerEl,
    disableTracking: false,
    drawerWidth: 500,
    width: 500,
    height: 600,
    hideFooter: true,
    hideHeaders: true,
    onSubmit: ({ response_id }) => {
        isString(response_id);
        console.log('Typeform successfully submitted');
    },
    onReady: () => {},
    onClose: () => {},
});

function isString(value: string) {
    /* empty */
}
