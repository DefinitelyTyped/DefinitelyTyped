import attachBanner from '@beyonk/gdpr-cookie-consent-banner';

attachBanner(document.body, {
    acceptLabel: 'Accept',
    closeLabel: 'Close',
    heading: 'Cookies',
    description: 'We use cookies to improve your experience on our site.',
    choices: {
        necessary: {
            label: 'Necessary',
            description: 'Necessary cookies help make a website usable by enabling basic functions like...',
            value: true,
        },
    },
    showEditIcon: false,
    categories: {
        analytics: () => {
            console.log('analytics');
        },
    },
});
