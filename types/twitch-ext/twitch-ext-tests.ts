console.log(
	`Running ${window.Twitch.ext.version} on ${window.Twitch.ext.environment}`
);

window.Twitch.ext.onAuthorized(auth => {
	console.log("The JWT that will be passed to the EBS is", auth.token);
	console.log("The channel ID is", auth.channelId);
});

window.Twitch.ext.onContext((context, changed) => {
	for (const key of changed) {
		console.log(`Context changed ${context[key]}`);
	}
});

window.Twitch.ext.onVisibilityChanged((isVisible, context) => {
	if (isVisible) {
		console.log("Extension became visible");
		if (context.game) {
			console.log(`Current game is ${context.game}`);
		}
	} else {
		console.log("Extension became invisible");
	}
});

window.Twitch.ext.onError(e => console.error(e));

// Twitch Extension Actions
window.Twitch.ext.actions.onFollow((didFollow, channelName) => {
	if (didFollow) {
		console.log(`You followed ${channelName}`);
	}
});
window.Twitch.ext.actions.minimize();
window.Twitch.ext.actions.followChannel("hearthsim");
window.Twitch.ext.actions.requestIdShare();

// Developer Rig
window.Twitch.ext.rig.log("Hello, world!");
