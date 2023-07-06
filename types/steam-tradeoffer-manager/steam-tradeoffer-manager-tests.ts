import TradeOfferManager = require('steam-tradeoffer-manager');
import SteamUser = require('steam-user');
import SteamCommunity = require('steamcommunity');
import SteamTotp = require('steam-totp');
import FS = require('fs');
import { SteamClient } from 'steam';
import TradeOffer = require("steam-tradeoffer-manager/lib/classes/TradeOffer");

const community = new SteamCommunity();
const client = new SteamUser();
const manager = new TradeOfferManager({
    steam: client, // Polling every 30 seconds is fine since we get notifications from Steam
    domain: 'example.com', // Our domain is example.com
    language: 'en', // We want English item descriptions
});

const client2 = new SteamClient();
const manager2 = new TradeOfferManager({
    steam: client2,
    domain: 'example.com',
    language: 'en',
});

// Steam logon options
const logOnOptions = {
    accountName: 'username',
    password: 'password',
    twoFactorCode: SteamTotp.getAuthCode('sharedSecret'),
};

if (FS.existsSync('polldata.json')) {
    manager.pollData = JSON.parse(FS.readFileSync('polldata.json').toString('utf8'));
}
client.logOn(logOnOptions);

client.on('loggedOn', () => {
    console.log('Logged into Steam');
});

client.on('webSession', (sessionID, cookies) => {
    manager.setCookies(cookies, err => {
        if (err) {
            console.log(err);
            process.exit(1); // Fatal error since we couldn't get our API key
        }

        console.log('Got API key: ' + manager.apiKey);

        // Get our inventory
        manager.getInventoryContents(730, 2, true, (err, inventory) => {
            if (err) {
                console.log(err);
                return;
            }

            if (inventory.length === 0) {
                // Inventory empty
                console.log('CS:GO inventory is empty');
                return;
            }

            console.log(`Found ${inventory.length} CS:GO items`);

            // Create and send the offer
            const offer = manager.createOffer(
                'https://steamcommunity.com/tradeoffer/new/?partner=12345678&token=xxxxxxxx',
            );

            offer.addMyItems(inventory);
            offer.setMessage('Here, have some items!');
            offer.send((err, status) => {
                if (err) {
                    console.log(err);
                    return;
                }

                if (status === 'pending') {
                    // We need to confirm it
                    console.log(`Offer #${offer.id} sent, but requires confirmation`);
                    community.acceptConfirmationForObject('identitySecret', offer.id, err => {
                        if (err) {
                            console.log(err);
                        } else {
                            console.log('Offer confirmed');
                        }
                    });
                } else {
                    console.log(`Offer #${offer.id} sent successfully`);
                }
            });
        });
    });

    community.setCookies(cookies);
});

manager.on('sentOfferChanged', (offer, oldState) => {
    console.log(
        `Offer #${offer.id} changed: ${TradeOfferManager.ETradeOfferState[oldState]} -> ${
            TradeOfferManager.ETradeOfferState[offer.state]
        }`,
    );
});

manager.on('pollData', pollData => {
    FS.writeFileSync('polldata.json', JSON.stringify(pollData));
});

/*
 * Example output:
 *
 * Logged into Steam
 * Got API key: xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
 * Found 117 CS:GO items
 * Offer #1601569319 sent, but requires confirmation
 * Offer confirmed
 */

manager.getOffers(TradeOfferManager.EOfferFilter.ActiveOnly, (err, sent, received) => {
    if (err) {
        console.log(err);
        return;
    }

    console.log(`Got ${sent.length} sent and ${received.length} received offers`);
});

console.log(new TradeOfferManager.SteamID('[U:1:46143802]').getBigIntID());

manager.getInventoryContents(440, 2, true, (err, inv, currencies) => {
    if (err) {
        throw err;
    }
    const offer = manager.createOffer('[U:1:46143802]');
    inv.forEach(offer.addMyItem);
    offer.send(err => {
        if (err) {
            throw err;
        }
        setTimeout(() => {
            offer.cancel(err => {
                if (err) {
                    throw err;
                }
                console.log('Offer cancelled after 30 seconds');
            });
        }, 1000 * 30);
    });
});

manager.on('realTimeTradeConfirmationRequired', offer => {
    if (offer.state === TradeOfferManager.ETradeOfferState.Active) {
        console.log(`Offer #${offer.id} requires confirmation`);
    }
});

class PromisifiedTradeOffer extends TradeOffer {}
