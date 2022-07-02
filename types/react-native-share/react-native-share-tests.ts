import Share from 'react-native-share';

// $ExpectType Promise<OpenReturn>
Share.open({
    url: '',
    message: '',
});

// $ExpectType Promise<OpenReturn>
Share.open({
    title: '',
    message: '',
    urls: [],
});

// $ExpectType Promise<OpenReturn>
Share.open({
    url: '',
    type: '',
    title: '',
    saveToFiles: true,
});

// $ExpectType Promise<OpenReturn>
Share.open({
    url: '',
    type: '',
    message: '',
    title: '',
    subject: '',
    excludedActivityTypes: '',
    showAppsToView: true,
});

// $ExpectType Promise<ShareSingleReturn>
Share.shareSingle({
    url: '',
    message: '',
    social: Share.Social.FACEBOOK,
});

// $ExpectType Promise<ShareSingleReturn>
Share.shareSingle({
    url: '',
    type: '',
    message: '',
    title: '',
    subject: '',
    social: Share.Social.FACEBOOK,
});

// $ExpectType Promise<ShareSingleReturn>
Share.shareSingle({
    url: '',
    type: '',
    message: '',
    title: '',
    subject: '',
    filename: 'test',
    social: Share.Social.FACEBOOK,
});

// $ExpectType Promise<ShareSingleReturn>
Share.isPackageInstalled('');
