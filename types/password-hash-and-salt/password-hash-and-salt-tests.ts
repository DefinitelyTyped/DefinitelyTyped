import password = require('password-hash-and-salt');

const myuser: { hash: string } = { hash: '' };

// Creating hash and salt
password('mysecret').hash((error, hash) => {
	if (error)
		throw new Error('Something went wrong!');

	// Store hash (incl. algorithm, iterations, and salt)
	myuser.hash = hash;

	// Verifying a hash
	password('hack').verifyAgainst(myuser.hash, (error, verified) => {
		if (error)
			throw new Error('Something went wrong!');
		if (!verified) {
			// Wrong!
		} else {
			// Correct!
		}
	});
});
