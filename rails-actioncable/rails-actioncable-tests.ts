/// <reference path="./rails-actioncable.d.ts" />
App = {};
App.cable = ActionCable.createConsumer();
App.cable.subscriptions.create("NetworkChannel", {});
