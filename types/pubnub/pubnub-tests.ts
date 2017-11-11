import Pubnub from 'pubnub';

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
    if (statusEvent.category === "PNConnectedCategory") {
      console.log(statusEvent.category);
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
