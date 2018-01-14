import loudRejection = require('loud-rejection');
import 'loud-rejection/register';

loudRejection();
loudRejection(stack => {
    stack; // $ExpectType string
});
