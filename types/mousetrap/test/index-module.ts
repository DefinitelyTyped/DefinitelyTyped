// Test that Mousetrap can be loaded as an external module.
// Assume that if the externally-loaded module can be assigned to a variable with the type of global Mousetrap,
// then everything is working correctly.

import importedMousetrap = require('mousetrap');
// $ExpectType MousetrapStatic
var mousetrapModuleReference = importedMousetrap;

// Can import event
type Event = importedMousetrap.ExtendedKeyboardEvent;
