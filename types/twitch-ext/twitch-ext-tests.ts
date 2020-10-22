console.log(`Running ${Twitch.ext.version} on ${Twitch.ext.environment}`);

Twitch.ext.onAuthorized(auth => {
    console.log('The JWT that will be passed to the EBS is', auth.token);
    console.log('The channel ID is', auth.channelId);
});

Twitch.ext.onContext((context, changed) => {
    for (const key of changed) {
        console.log(`Context changed ${context[key]}`);
    }
});

Twitch.ext.onVisibilityChanged((isVisible, context) => {
    if (isVisible) {
        console.log('Extension became visible');
        if (context.game) {
            console.log(`Current game is ${context.game}`);
        }
    } else {
        console.log('Extension became invisible');
    }
});

Twitch.ext.onHighlightChanged(isHighlighted => {
    if (isHighlighted) {
        console.log('Extension was highlighted');
    } else {
        console.log('Extension is no longer highlighted');
    }
});

Twitch.ext.onPositionChanged(position => {
    console.log(`Extension moved to x=${position.x}, y=${position.y}`);
});

Twitch.ext.onError(e => console.error(e));

// Twitch Extension Actions
Twitch.ext.actions.onFollow((didFollow, channelName) => {
    if (didFollow) {
        console.log(`You followed ${channelName}`);
    }
});
Twitch.ext.actions.minimize();
Twitch.ext.actions.followChannel('hearthsim');
Twitch.ext.actions.requestIdShare();

// Twitch Extension Configuration
Twitch.ext.configuration.onChanged(() => {
    console.log('Configuration changed');
    if (Twitch.ext.configuration.broadcaster) {
        console.log('Caster configuration');
        console.log('version: ', Twitch.ext.configuration.broadcaster.version);
        console.log('content: ', Twitch.ext.configuration.broadcaster.content);
    }
    if (Twitch.ext.configuration.developer) {
        console.log('Developer configuration');
        console.log('version:', Twitch.ext.configuration.developer.version);
        console.log('content: ', Twitch.ext.configuration.developer.content);
    }
    if (Twitch.ext.configuration.global) {
        console.log('Global configuration');
        console.log('version: ', Twitch.ext.configuration.global.version);
        console.log('content: ', Twitch.ext.configuration.global.content);
    }
});

Twitch.ext.configuration.set('broadcaster', '0.0.1', '{"test": "test"}');

// Twitch Extension Feature flags
Twitch.ext.features.onChanged(changed => {
    if (changed.indexOf('isChatEnabled') !== -1) {
        if (Twitch.ext.features.isChatEnabled) {
            console.log('Chat is now enabled');
        }
    }
});

// Twitch Extension Bits
Twitch.ext.bits
    .getProducts()
    .then(products => {
        console.log(`Got ${products.length} products`);
        for (const product of products) {
            console.log(`Found product "${product.displayName}" with SKU ${product.sku}`);
            console.log(`Product costs ${product.cost.amount} ${product.cost.type}`);
            if (typeof product.inDevelopment !== 'undefined') {
                if (product.inDevelopment) {
                    console.log('Product is in development');
                } else {
                    console.log('Product is not in development');
                }
            } else {
                console.log('');
            }
        }
    })
    .catch(error => {
        console.error(`Got an error: ${error}`);
    });
Twitch.ext.bits.onTransactionCancelled(() => console.log('Transaction cancelled'));
Twitch.ext.bits.onTransactionComplete(transaction => {
    console.log(`${transaction.initiator} (${transaction.userId}) bought ${transaction.product.displayName}`);
    console.log(`Transaction id was ${transaction.transactionID}`);
});
Twitch.ext.bits.setUseLoopback(true);
Twitch.ext.bits.showBitsBalance();
Twitch.ext.bits.useBits('MY-PRODUCT');

// Twitch Viewer
Twitch.ext.viewer.onChanged(() => {
    console.log('Viewer id: ' + Twitch.ext.viewer.id);
});

// Developer Rig
Twitch.ext.rig.log('Hello, world!');
