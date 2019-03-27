import Pubnub = require('pubnub');

const console = {
  log: (params: any) => {}
};

const config: Pubnub.PubnubConfig = {
  subscribeKey: '',
  publishKey: '',
  secretKey: '',
  ssl: true,
  authKey: ''
};

const pubnub = new Pubnub(config);

pubnub.setAuthKey('myAuthenKey');

// publish with callback
pubnub.publish({channel: 'channel-1', message: {data: 1}}, (status, response) => {
  /*
   * Do something
   */
   console.log(response.timetoken);
});

// publish promise
pubnub.publish({channel: 'channel-1', message: {data: 1}}).then((response) => {
  /*
   * Do something
   */
   console.log(response.timetoken);
});

pubnub.subscribe({channels: ['channel-1']});

pubnub.addListener({
  status: statusEvent => {
    if (statusEvent.category === Pubnub.CATEGORIES.PNConnectedCategory) {
      console.log(statusEvent.category);
    } else if (statusEvent.operation === Pubnub.OPERATIONS.PNAccessManagerAudit) {
      console.log(statusEvent.operation);
    }
  },
  message: message => {
    // handle message
  },
  presence: presenceEvent => {
    // handle presence
  }
});

pubnub.unsubscribe({channels: ['channel-1']});

pubnub.unsubscribeAll();

pubnub.setUUID(Pubnub.generateUUID());
const uuid = pubnub.getUUID();

pubnub.whereNow({ uuid: '' }, (status, res) => {
  if (!status.error) {
    console.log(res.channels[0]);
  }
});

pubnub.whereNow({ uuid: '' }).then(res => {
  console.log(res.channels[1]);
});

pubnub.getState({ uuid: '' }, (status, res) => {
  if (!status.error) {
    console.log(res.channels[0]);
  }
});

pubnub.getState({ uuid: '' }).then(res => {
  console.log(res.channels[1]);
});

pubnub.setState({ channels: [] }, (status, res) => {
  if (!status.error) {
    console.log(res.state);
  }
});

pubnub.setState({ channels: [] }).then(res => {
  console.log(res.state);
});

const grantOptions = {
  channels: ['channel-1'],
  authKeys: ['auth-key'],
  read: true,
  write: false,
  manage: false
};
pubnub.grant(grantOptions).then(status => {
  console.log(status);
});

pubnub.history({channel: 'channel-1', count: 2}, (status, res) => {
  console.log(status);
  console.log(res);
});

const cryptoOptions = {
  encryptKey: true,
  keyEncoding: 'utf8',
  keyLength: 256,
  mode: 'cbc'
};
const mySecret = {
  message: 'Hi!',
};
pubnub.decrypt(mySecret, undefined, cryptoOptions);
pubnub.encrypt('egrah5rwgrehwqh5eh3hwfwef', undefined, cryptoOptions);
