import filter from 'filter-css';

// $ExpectType string
filter('', '');

// $ExpectType string
filter('', /a/, {});

// $ExpectType string
filter('', (context, value, node) => true, {
    matchTypes: true,
    matchMedia: true,
    matchSelectors: true,
    matchDeclarationProperties: true,
    matchDeclarationValues: true
});
