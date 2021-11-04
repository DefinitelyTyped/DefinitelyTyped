import sortJson = require('sort-json');

const options: sortJson.VisitOptions = { ignoreCase: true, reverse: true, depth: 1 };
sortJson({ AA: 123, a: 1, b: 21 }, options);

sortJson.overwrite('some/absolute/path.json', options);
sortJson.overwrite(['some/absolute/path1.json', 'some/absolute/path2.json'], options);
