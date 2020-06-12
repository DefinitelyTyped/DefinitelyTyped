import * as typeformEmbed from '@typeform/embed';

const stubContainerEl = document.createElement('div');

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

typeformEmbed.makePopup('https://admin.typeform.com/to/PlBzgL', {
    mode: 'drawer_left',
    autoOpen: true,
    autoClose: 3,
    hideScrollbars: true,
    container: stubContainerEl,
    disableTracking: false,
    drawerWidth: 500,
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
