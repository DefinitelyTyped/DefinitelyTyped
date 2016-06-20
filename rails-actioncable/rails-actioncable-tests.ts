
App = {};
App.cable = ActionCable.createConsumer();
App.cable.subscriptions.create("NetworkChannel", {});
