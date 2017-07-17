import express = require('express');
import passport = require('passport');
import SamlStrategy = require('passport-saml');

let samlStrategy = new SamlStrategy.Strategy(
	{
		path: '/login/callback',
		entryPoint: 'https://openidp.feide.no/simplesaml/saml2/idp/SSOService.php',
		issuer: 'passport-saml',
		cacheProvider: {
			save(key: string, value: {}) {
				// save the key with the optional value, invokes the callback with the value saves
			},
			get(key: string) {
				// invokes 'callback' and passes the value if found, null otherwise
			},
			remove(key: string) {
				// removes the key from the cache, invokes `callback` with the
				// key removed, null if no key is removed
			}
		}
	},
	(profile: {}, done: (err: Error | null, user: {}, info?: {}) => void) => {
		let user = {};
		done(null, user);
	}
);

passport.use(samlStrategy);
passport.authenticate('saml', {failureRedirect: '/', failureFlash: true});

let metadata = samlStrategy.generateServiceProviderMetadata("decryptionCert");
