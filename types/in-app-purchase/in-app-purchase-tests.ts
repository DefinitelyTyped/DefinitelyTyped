import * as iap from 'in-app-purchase';

iap.config({
	/* Configurations for Amazon Store */
	amazonAPIVersion: 2, // tells the module to use API version 2
	secret: 'abcdefghijklmnoporstuvwxyz', // this comes from Amazon

	/* Configurations for Apple */
    appleExcludeOldTransactions: true, // if you want to exclude old transaction, set this to true. Default is false
    applePassword: 'abcdefg...', // this comes from iTunes Connect (You need this to valiate subscriptions)

	/* Configurations for Google Service Account validation: You can validate with just packageName, productId, and purchaseToken */
	googleServiceAccount: {
		clientEmail: '<client email from Google API service account JSON key file>',
		privateKey: '<private key string from Google API service account JSON key file>'
	},

	/* Configurations for Google Play */
	googlePublicKeyPath: 'path/to/public/key/directory/', // this is the path to the directory containing iap-sanbox/iap-live files
    googlePublicKeyStrSandBox: 'publicKeySandboxString', // this is the google iap-sandbox public key string
    googlePublicKeyStrLive: 'publicKeyLiveString', // this is the google iap-live public key string
    googleAccToken: 'abcdef...', // optional, for Google Play subscriptions
    googleRefToken: 'dddd...', // optional, for Google Play subscritions
    googleClientID: 'aaaa', // optional, for Google Play subscriptions
    googleClientSecret: 'bbbb', // optional, for Google Play subscriptions

	/* Configurations for Roku */
	rokuApiKey: 'aaaa...', // this comes from Roku Developer Dashboard

	/* Configurations for Facebook (Payments Lite) */
    facebookAppId: '112233445566778',
    facebookAppSecret: 'cafebabedeadbeefabcdef0123456789',

	/* Configurations all platforms */
	test: true, // For Apple and Googl Play to force Sandbox validation only
	verbose: true // Output debug logs to stdout stream
});
iap.setup()
  .then(() => iap.validate('abcdef'))
  .then((validatedData) => {
    const options = {
  		ignoreCanceled: true, // Apple ONLY (for now...): purchaseData will NOT contain cancceled items
  		ignoreExpired: true // purchaseData will NOT contain exipired subscription items
  	};

  	const purchaseData = iap.getPurchaseData(validatedData, options);
  })
  .catch((error) => {
    // error...
  });
