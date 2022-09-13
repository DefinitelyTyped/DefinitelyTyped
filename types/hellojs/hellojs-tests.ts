hello.init({
    serviceName: {
        name: 'Test',
        oauth: {
            version: 2,
            auth: '',
            grant: '',
            response_type: 'id_token token',
        },
        refresh: true,
        scope_delim: ' ',
        logout: () => {
            const id_token = hello('networkName').getAuthResponse().id_token;
            hello.utils.store('networkName', null);
        },
        xhr: p => {
            const token = p.query.access_token;
            delete p.query.access_token;
            if (token) {
                p.headers = {
                    Authorization: 'Bearer ' + token,
                };
            }

            switch (p.method) {
                case 'post':
                case 'put':
                    if (typeof p.data === 'object') {
                        try {
                            p.data = JSON.stringify(p.data);
                            p.headers['content-type'] = 'application/json';
                        } catch (e) {}
                    }
                    break;
                case 'patch':
                    hello.utils.extend(p.query, p.data);
                    p.data = null;
                    break;
            }
            return true;
        },
        form: false,
    },
});

// Test code copied from hello.js built-in modules at
// https://github.com/MrSwitch/hello.js/blob/v1.15.1/src/modules/joinme.js
hello.init({
    joinme: {
        name: 'join.me',
        oauth: {
            version: 2,
            auth: '',
            grant: '',
        },
        refresh: false,
        scope: {
            basic: 'user_info',
            user: 'user_info',
            scheduler: 'scheduler',
            start: 'start_meeting',
            email: '',
            friends: '',
            share: '',
            publish: '',
            photos: '',
            publish_files: '',
            files: '',
            videos: '',
            offline_access: '',
        },
        scope_delim: ' ',
        login: p => {
            p.options.popup.width = 400;
            p.options.popup.height = 700;
        },
        base: 'https://api.join.me/v1/',
        get: {
            me: 'user',
            meetings: 'meetings',
            'meetings/info': 'meetings/@{id}',
        },
        post: {
            'meetings/start/adhoc': (p, callback) => {
                callback('meetings/start');
            },
        },
        patch: {
            'meetings/update': (p, callback) => {
                callback('meetings/' + p.data.meetingId);
            },
        },
        del: {
            'meetings/delete': 'meetings/@{id}',
        },
        wrap: {
            me: (o, headers) => {
                if (!o.email) {
                    return o;
                }

                o.name = o.fullName;
                o.first_name = o.name.split(' ')[0];
                o.last_name = o.name.split(' ')[1];
                o.id = o.email;

                return o;
            },
            default: (o, headers) => {
                return o;
            },
        },
        xhr: (p, qs) => {
            const token = qs.access_token;
            delete qs.access_token;
            p.headers.Authorization = 'Bearer ' + token;
        },
    },
});

hello.init(
    {
        facebook: '<app key>',
    },
    {
        redirect_uri: 'hello.html',
        display: 'page',
    },
);

// handle a mix of service definitions (linkedin) and clientIds (facebook), with an options argument
hello.init(
    {
        linkedin: {
            id: '<linkedin app key>',
            oauth: {
                version: 2,
                response_type: 'code',
                auth: 'https://www.linkedin.com/oauth/v2/authorization',
                grant: 'https://www.linkedin.com/oauth/v2/accessToken',
            },
            scope: {
                basic: 'r_liteprofile',
                email: 'r_emailaddress',
            },
            base: 'https://api.linkedin.com/v2/',

            get: {
                me: 'me?projection=(id,firstName,lastName,profilePicture(displayImage~:playableStreams))',
                email: 'emailAddress?q=members&projection=(elements*(handle~))',
            },
        },
        facebook: '<facebook app key>',
    },
    {
        redirect_uri: 'hello.html',
        display: 'page',
    },
);

hello.init({
    facebook: '359288236870',
    windows: '000000004403AD10',
});

hello('facebook').login();

hello('facebook').logout();

hello
    .on('auth.login', auth => {
        alert('log to ' + auth.network);
    })
    .on('auth.logout', auth => {
        alert('unlog from ' + auth.network);
    });

hello.getAuthResponse('facebook');

hello.login('facebook', null, () => {
    const req = hello.getAuthResponse('facebook');
});

hello.logout('facebook');

hello('facebook')
    .api('me')
    .then(
        json => {
            alert('Your name is ' + json.name);
        },
        () => {
            alert('Whoops!');
        },
    );

const sessionstart = () => {
    alert('Session has started');
};
hello.on('auth.login', sessionstart);

hello.off('auth.login', sessionstart);

hello('facebook').login({ scope: 'friends,photos,publish' });
