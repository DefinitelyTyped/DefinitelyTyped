import postcssPrefixSelector from 'postcss-prefix-selector';

// $ExpectType (root: any) => string | undefined
postcssPrefixSelector({ prefix: 'prefix' });
