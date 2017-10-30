import Pubnub from 'pubnub';

const config: Pubnub.PubnubConfig = {
  subscribeKey: '',
  publishKey: '',
  secretKey: '',
  ssl: true,
  authKey: ''
};

const pubnub = new Pubnub(config);

pubnub.publish({channel: 'channel-1', message: {data: 1}}, (status, response) => {
  /*
   * Do something
   */
});

pubnub.subscribe({channels: ['channel-1']});

pubnub.addListener({
  status: statusEvent => {
    if (statusEvent.category === "PNConnectedCategory") {
    }
  },
  message: message => {
    // handle message
  },
  presence: presenceEvent => {
    // handle presence
  }
});
