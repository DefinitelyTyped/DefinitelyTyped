import * as methods from 'methods';

methods.slice(0).map(method => method.toUpperCase());

methods.find(item => {
    return item === 'get';
});
