import filterConsole = require('filter-console');

const disableFilter = filterConsole(['🐼']);
disableFilter; // $ExpectType () => void
filterConsole([/🐼/]);
filterConsole([input => input === '🐼']);

disableFilter();
