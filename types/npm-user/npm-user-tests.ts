import npmUser = require('npm-user');

npmUser('sindresorhus').then(user => {
    user; // $ExpectType UserData

    user.name; // $ExpectType string | null
    user.avatar; // $ExpectType string | null
    user.email; // $ExpectType string | null
    user.github; // $ExpectType string | null
    user.twitter; // $ExpectType string | null
});
