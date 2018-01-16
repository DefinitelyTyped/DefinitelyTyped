import * as Twit from 'twit';

const t = new Twit( {
  consumer_key: '',
  consumer_secret: '',
  app_only_auth: true,
} );

t.post('statuses/update', { status: 'hello!' }).then(res => {
    const status = res.data as Twit.Twitter.Status
    console.log(status.id_str)
    console.log(res.resp.statusCode)
})
