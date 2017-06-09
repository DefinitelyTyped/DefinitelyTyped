
fixture.setBase('fixtures/base/path');
fixture.load('test1.html', 'test1.json', false);
fixture.load('test1.html', 'test2.html', 'test1.json');
fixture.set('<em></em>', true);
fixture.set('<em></em>', '<strong><strong/>');
fixture.cleanup();
fixture.el.firstChild;
JSON.stringify(fixture.json[0]);
