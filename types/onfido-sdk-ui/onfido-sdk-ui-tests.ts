import { init, OnfidoResponse } from 'onfido-sdk-ui';

const fidoObj = init({
    token: 'someTokenHere',
    containerId: 'onfido-mount',
    onComplete: (data: OnfidoResponse) => {
        // Some completion here..
    },
    steps: [
        {
            type: 'welcome',
            options: {
                title: 'Open your new bank account',
            },
        },
        'document',
        'face',
    ],
    language: {
        locale: 'en',
        phrases: 'some phrase',
        mobilePhrases: 'some phrase',
    },
    options: {
        documentTypes: {
            passport: true,
            driving_licence: true,
            national_identity_card: false,
            residence_permit: false,
        },
        showCountrySelection: true,
        forceCrossDevice: true,
    },
    userDetails: {},
});

// Changing options at runtime..
const AdditionalOptions: string[] = ['document', 'face', 'complete'];

fidoObj.setOptions({
    steps: [
        {
            type: 'welcome',
            options: { title: 'New title!' },
        },
        ...AdditionalOptions,
    ],
});

fidoObj.setOptions({ token: 'new token' });

fidoObj.setOptions({ token: 'Your JWT', isModalOpen: true, containerId: 'onfido-mount' });
