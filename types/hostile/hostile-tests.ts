import hostile = require('hostile');

const getLines: hostile.Lines = hostile.get(false);
hostile.get(true, (error: Error | null, lines: hostile.Lines) => {});

const getFileLines: hostile.Lines = hostile.getFile('path/to/hosts', false);
hostile.getFile(hostile.HOSTS, true, (error: Error | null, lines: hostile.Lines) => {});

hostile.set('192.168.0.1', 'definitelytyped.org');
hostile.set('192.168.0.1', 'definitelytyped.org', (error: Error | null) => {});

hostile.remove('192.168.0.1', 'definitelytyped.org');
hostile.remove('192.168.0.1', 'definitelytyped.org', (error: Error | null) => {});

hostile.writeFile(getFileLines, false);
hostile.writeFile(getLines, true, (error: Error | null) => {});
