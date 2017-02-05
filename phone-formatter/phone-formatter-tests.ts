import * as phoneFormatter from 'phone-formatter';

phoneFormatter.normalize('212.555.1212');
phoneFormatter.normalize('+1 (212) 555-1212');

phoneFormatter.format('(212) 555-1212', 'NNN.NNN.NNNN');
phoneFormatter.format('(212) 555-1212', 'NNN.NNN.NNNN', {normalize: false});
