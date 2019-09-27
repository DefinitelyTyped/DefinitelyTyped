import badgen from 'badgen';

// $ExpectType string
badgen({
    subject: 'SUBJECT',
    status: 'STATUS'
});

// $ExpectType string
badgen({
    subject: 'SUBJECT',
    status: 'STATUS',
    color: 'green'
});

// $ExpectType string
badgen({
    subject: 'SUBJECT',
    status: 'STATUS',
    color: '#FF0000',
    style: 'flat',
    icon: 'data:image/svg+xml;base64,...',
    iconWidth: 20
});
