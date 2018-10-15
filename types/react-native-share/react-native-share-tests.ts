import Share from 'react-native-share';

// $ExpectType Promise<any>
Share.open({
    url: '',
    message: '',
});

// $ExpectType Promise<any>
Share.open({
    url: '',
    type: '',
    message: '',
    title: '',
    subject: '',
    excludedActivityTypes: '',
    showAppsToview: true,
});

// $ExpectType Promise<any>
Share.shareSingle({
    url: '',
    message: '',
    social: 'facebook',
});

// $ExpectType Promise<any>
Share.shareSingle({
    url: '',
    type: '',
    message: '',
    title: '',
    subject: '',
    social: 'facebook',
});
