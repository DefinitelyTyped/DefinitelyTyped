/// <reference path="./rails-actioncable.d.ts" />
App = {};
App.cable = ActionCable.createConsumer();
const mixin: ActionCable.CreateMixin = {
  connected: (): void => console.log('connected.'),
  disconnected: (): void => console.log('disconnected.'),
  received: (obj: {}): void => console.log('receiced.' + obj),
  test: (): void => console.log('test.'),
  test2: (obj: {}): void => console.log('test2.' + obj)
};
App.cable.subscriptions.create('NetworkChannel', mixin);
