// https://www.twilio.com/docs/chat/access-token-lifecycle#javascript
import { AccessManager } from 'twilio-common';

function generateToken(): string {
    return 'SOME_TOKEN';
}

const token = generateToken();

const accessManager = new AccessManager(token);
const chatClient = { updateToken: (token: string) => {} }; // mock for test

accessManager.on('tokenUpdated', function(am) {
    // get new token from AccessManager and pass it to the library instance
    chatClient.updateToken(am.token);
});

accessManager.on('tokenExpired', function() {
    // generate new token here and set it to the accessManager
    const updatedToken = generateToken();
    accessManager.updateToken(updatedToken);
});
