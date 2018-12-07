interface HelloChannel extends ActionCable.Channel {
  hello(world: string, name?: string): void;
}

App = {};
App.cable = ActionCable.createConsumer();
const helloChannel = App.cable.subscriptions.create('NetworkChannel', {
  connected(): void {
    console.log('connected');
  },
  disconnected(): void {
    console.log('disconnected');
  },
  received(obj: Object): void {
    console.log(obj);
  },
  hello(world: string, name: string = 'John Doe'): void {
    console.log(`Hello, ${world}! name[${name}]`);
  }
}) as HelloChannel;

helloChannel.hello('World');

const channelParams: ActionCable.ChannelNameWithParams = {
  channel: 'NetworkChannel',
  token: 'foo',
  data: {
    bar: 'baz'
  }
};
const channelWithParams = App.cable.subscriptions.create(channelParams, {
  connected(): void {
    console.log('connected');
  },
  disconnected(): void {
    console.log('disconnected');
  },
  received(obj: Object): void {
    console.log(obj);
  }
});
