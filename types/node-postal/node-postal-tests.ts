import postal = require('node-postal');

// $ExpectType string[]
postal.expand.expand_address('V XX Settembre, 20');

// $ExpectType PostalResult[]
postal.parser.parse_address('Barboncino 781 Franklin Ave, Crown Heights, Brooklyn, NY 11238');
