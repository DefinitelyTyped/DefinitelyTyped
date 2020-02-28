import parameterize from 'parameterize';

parameterize('asa'); // $ExpectType string
parameterize('aeda', 12); // $ExpectType string
parameterize('aeda', 12, '_'); // $ExpectType string
