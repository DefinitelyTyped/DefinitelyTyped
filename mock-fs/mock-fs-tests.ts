
var mock = require('mock-fs');

function a() {
	mock({
		'path/to/fake/dir': {
			'some-file.txt': 'file content here',
			'empty-dir': {/** empty directory */}
		},
		'path/to/some.png': new Buffer([8, 6, 7, 5, 3, 0, 9]),
		'some/other/path': {/** another empty directory */}
	});

	// after a test runs
	mock.restore();
}

function b() {
	mock({
		'path/to/file.txt': 'file content here'
	});
}

function c() {
	mock({
		foo: mock.file({
			content: 'file content here',
			ctime: new Date(1),
			mtime: new Date(1)
		 })
	});
}

function d() {
	// note that this could also be written as
	// mock({'path/to/dir': { /** config */ }})
	mock({
		path: {
			to: {
				dir: {
					file1: 'text content',
					file2: new Buffer([1, 2, 3, 4])
				}
			}
		}
	});
}

function e() {
	mock({
		'some/dir': mock.directory({
			mode: parseInt("0755", 8),
			items: {
				file1: 'file one content',
				file2: new Buffer([8, 6, 7, 5, 3, 0, 9])
			}
		})
	});
}

function f() {
	mock({
		'some/dir': {
			'regular-file': 'file contents',
			'a-symlink': mock.symlink({
				path: 'regular-file'
			})
		}
	});
}

var mockedFS = mock.fs({
	'/file': 'blah'
});

if (mockedFS.readFileSync('/file', { encoding: 'utf8' }) === 'blah') {
	console.log('woo');
}

mock({
	'path/to/file.txt': 'file content here'
}, {
  createTmp: true,
  createCwd: false
});
