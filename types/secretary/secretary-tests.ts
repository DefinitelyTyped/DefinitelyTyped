import * as sec from "secretary";

sec.configure({
    minFlag: 1,
    maxFlag: 5,
    minRunningFlag: 3,
    maxRunningFlag: 4
});

sec.flag(1).log('Beginning DEBUG output...');
sec.flag(3).log('Integrity check successful');
sec.flag(5).log('Server starting on port 3000');

sec.flag(4);
sec.log('Starting thermonuclear war...'); // Evaluated with flag level 4

sec.flag(3).log('%s, %s.', 'Hello', 'Mister');
// 'Hello, Mister.'

sec.log('%d:%d', 12);
// '12:%d'
sec.flag(1).log('Hello', '1', '2', 3);
// 'Hello 1 2 3'
