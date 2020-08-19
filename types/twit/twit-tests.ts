import Twit = require('twit');

const t = new Twit({
    consumer_key: '',
    consumer_secret: '',
    app_only_auth: true,
});

t.post('statuses/update', { status: 'hello!' }).then(res => {
    const status = res.data as Twit.Twitter.Status;
    console.log(status.id_str);
    console.log(res.resp.statusCode);
    console.log(status.is_quote_status);
});

t.stream('statuses/filter', {
    track: ['#love', '#goscha'],
    follow: ['40436619', '606663038', '14466815'],
});

t.post('lists/members/create_all', {
    list_id: '1',
    user_id: '1,2,3'
});

t.post('lists/create', {
    name: 'foo',
    description: 'foobar',
    mode: 'public'
});
