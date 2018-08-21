import gravatarUrl = require('gravatar-url');

gravatarUrl('sindresorhus@gmail.com'); // $ExpectType string
gravatarUrl('sindresorhus@gmail.com', { default: 'monsterid' }); // $ExpectType string
gravatarUrl('sindresorhus@gmail.com', { default: 'monsterid', size: 200 }); // $ExpectType string
gravatarUrl('sindresorhus@gmail.com', { default: 'monsterid', rating: 'g', size: 200 }); // $ExpectType string
gravatarUrl('sindresorhus@gmail.com', { rating: 'g' }); // $ExpectType string
gravatarUrl('sindresorhus@gmail.com', { rating: 'pg' }); // $ExpectType string
gravatarUrl('sindresorhus@gmail.com', { rating: 'r' }); // $ExpectType string
gravatarUrl('sindresorhus@gmail.com', { rating: 'x' }); // $ExpectType string
gravatarUrl('sindresorhus@gmail.com', { rating: 'g', size: 200 }); // $ExpectType string
gravatarUrl('sindresorhus@gmail.com', { size: 200 }); // $ExpectType string
