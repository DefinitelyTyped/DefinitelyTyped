import hardRejection = require('hard-rejection');
import 'hard-rejection/register';

hardRejection();
hardRejection(stack => {
    stack; // $ExpectType string | undefined
});
