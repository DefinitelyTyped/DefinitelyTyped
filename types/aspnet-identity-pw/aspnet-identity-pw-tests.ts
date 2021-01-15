
import passwordHasher = require('aspnet-identity-pw');

function usageSync() {
    var hashedPassword: string = passwordHasher.hashPassword('SomePassword');
    var isValid: boolean = passwordHasher.validatePassword('SomePassword', hashedPassword);
}

function usageAsync() {
    var hashedPassword: string = null;
    var isValid: boolean = null;

    passwordHasher.hashPassword('SomePassword', function(err, result) {
        hashedPassword = result;
    });

    passwordHasher.validatePassword('SomePassword', hashedPassword, function(err, result) {
        isValid = result;
    });
}
