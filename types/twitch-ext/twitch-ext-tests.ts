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

// Twitch Extension Feature flags
window.Twitch.ext.features.onChanged(changed => {
	if (changed.indexOf("isChatEnabled") !== -1) {
		if (window.Twitch.ext.features.isChatEnabled) {
			console.log("Chat is now enabled");
		}
	}
});

// Twitch Extension Bits
window.Twitch.ext.bits
	.getProducts()
	.then(products => {
		console.log(`Got ${products.length} products`);
		for (const product of products) {
			console.log(
				`Found product "${product.displayName}" with SKU ${product.sku}`
			);
			console.log(
				`Product costs ${product.cost.amount} ${product.cost.type}`
			);
			if (typeof product.inDevelopment !== "undefined") {
				if (product.inDevelopment) {
					console.log("Product is in development");
				} else {
					console.log("Product is not in development");
				}
			} else {
				console.log("");
			}
		}
	})
	.catch(error => {
		console.error(`Got an error: ${error}`);
	});
window.Twitch.ext.bits.onTransactionCancelled(() =>
	console.log("Transaction cancelled")
);
window.Twitch.ext.bits.onTransactionComplete(transaction => {
	console.log(
		`${transaction.initiator} (${transaction.userId}) bought ${
			transaction.product.displayName
		}`
	);
	console.log(`Transaction id was ${transaction.transactionID}`);
});
window.Twitch.ext.bits.setUseLoopback(true);
window.Twitch.ext.bits.showBitsBalance();
window.Twitch.ext.bits.useBits("MY-PRODUCT");

// Developer Rig
window.Twitch.ext.rig.log("Hello, world!");
