import Error from '@ember/error';

new Error('Fuuuuuuuu'); // $ExpectType EmberError

// allows to extend from EmberError
class AjaxError extends Error {
}
