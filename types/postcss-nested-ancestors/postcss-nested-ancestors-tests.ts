import postcss from 'postcss';
import nestedAncestors = require('postcss-nested-ancestors');

// Using with postcss
postcss([nestedAncestors]);
postcss([nestedAncestors()]);

// Testing config
nestedAncestors({});
nestedAncestors({
    placeholder: '^&',
    levelSymbol: '^',
    parentSymbol: '&',
    replaceDeclarations: true,
});
