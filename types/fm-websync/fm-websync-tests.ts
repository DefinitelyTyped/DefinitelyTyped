const client = fm.websync.client.initialize({
    requestUrl: "",
    onSuccess: args => console.log(`Init success: {args.clientId}`),
    onFailure: args => console.log(`Init failure: {args.clientId}`),
    onComplete: args => console.log(`Init complete: {args.clientId}`)
});

client.subscribe({
    channel: "/my/channel",
    onReceive: args => console.log(`Receive data: {args.data}`),
    onFailure: args => console.log(`Subscribe failure: {args.data}`),
    onComplete: args => console.log(`Subscribe complete`)
});

client.disconnect({
    onSuccess: args => console.log(`Disconnect success: {args.clientId}`),
    onFailure: args => console.log(`Disconnect failure: {args.clientId}`),
    onComplete: args => console.log(`Disconnect complete: {args.clientId}`)
});
