import SteamCommunity = require('steamcommunity');

const EResult = SteamCommunity.EResult;

const community = new SteamCommunity();

/* register events */
community.on("confKeyNeeded", (tag, callback) => {
    const time = Math.floor(Date.now() / 1000);
    callback(null, time, "conf_key_value");
});

community.on("error", (err) => {
    console.error("SteamCommunity error occured", err);
});

/* login */
community.login({
    accountName: 'anything',
    password: 'anything123',
    steamguard: '7554A',
    authCode: '7554A',
    twoFactorCode: '7554A',
    captcha: 'anything',
    disableMobile: false,
}, (err, sessionID, cookies, steamguard) => {
    if (err) {
        if (err.message === 'SteamGuard') {
            console.log('This account does not have two-factor authentication enabled.');
            process.exit();
            return;
        }

        if (err.message === 'CAPTCHA') {
            console.log(err.captchaurl);

            return;
        }

        console.log(err);
        process.exit();
        return;
    }

    console.log('Logged on!');

    /* disable two factor */
    community.disableTwoFactor('R123456', (err) => {
        if (err) {
            console.log(err);
            process.exit();
            return;
        }

        console.log('Two-factor authentication disabled!');
    });

    /* return a specific group */
    community.getSteamGroup('asd4564as65d', (err, group) => {
        if (err) {
            console.log(err);
            process.exit(1);
        }

        group.getAllAnnouncements(null, (err, announcements) => {
            if (announcements.length === 0) {
                console.log('This group has no announcements');
                return;
            }

            const announcement = announcements[0];

            /* edit the 1st announcement */
            group.editAnnouncement(announcement.aid, 'Header', 'We love cats!', error => {
                if (!error) {
                    console.log('Annoucement edited!');
                } else {
                    console.log('Unable to edit annoucement! %j', error);
                    process.exit(1);
                }
            });

            /* delete the 1st announcement */
            group.deleteAnnouncement(announcement.aid, err => {
                if (!err) {
                    console.log('Deleted');
                } else {
                    console.log('Error deleting announcement.');
                }
            });
        });
    });

    /* enable two factor */
    community.enableTwoFactor((err, response) => {
        if (err) {
            if (err.eresult === EResult.Fail) {
                console.log('Error: Failed to enable two-factor authentication. Do you have a phone number attached to your account?');
                process.exit();
                return;
            }

            if (err.eresult === EResult.RateLimitExceeded) {
                console.log('Error: RateLimitExceeded. Try again later.');
                process.exit();
                return;
            }

            console.log(err);
            process.exit();
            return;
        }

        if (response.status !== EResult.OK) {
            console.log(`Error: Status ${response.status}`);
            process.exit();
            return;
        }

        const filename = `twofactor_${community.steamID.getSteamID64()}.json`;
        console.log(`Writing secrets to ${filename}`);
        console.log(`Revocation code: ${response.revocation_code}`);

        community.finalizeTwoFactor(response.shared_secret, '123456', (err) => {
            if (err) {
                if (err.message === 'Invalid activation code') {
                    console.log(err);
                    return;
                }

                console.log(err);
            } else {
                console.log('Two-factor authentication enabled!');
            }

            process.exit();
        });
    });
});
