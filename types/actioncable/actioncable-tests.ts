App = {};
App.cable = ActionCable.createConsumer();
const helloChannel = App.cable.subscriptions.create("NetworkChannel", {
    connected(): void {
        console.log("connected");
    },
    disconnected(): void {
        console.log("disconnected");
    },
    received(obj: Object): void {
        console.log(obj);
    },
    hello(world: string, name: string = "John Doe"): void {
        console.log(`Hello, ${world}! name[${name}]`);
    },
});

// Methods introduced in the mixin param are available in the channel
// subscription instance.
helloChannel.hello("World");

const channelParams: ActionCable.ChannelNameWithParams = {
    channel: "NetworkChannel",
    token: "foo",
    data: {
        bar: "baz",
    },
};
const channelWithParams = App.cable.subscriptions.create(channelParams, {
    connected(): void {
        console.log("connected");
    },
    disconnected(): void {
        console.log("disconnected");
    },
    received(obj: Object): void {
        console.log(obj);
    },
    bye(): void {
        // Methods introduced in the mixin param can read channel methods.
        this.unsubscribe();
        console.log("Goodbye!");
    },
});
