/// <reference path="pouch.d.ts" />

declare var $: any;

function alert(thing: any) {
	$('body').append('<div>' + thing + '</div>');
}

var pouch: Pouch;

function pouchTests() {
	Pouch('idb://testdb', function (err: PouchError, res: Pouch) {
		if (err) {
			alert('Error ' + err.status + ' occurred ' + err.error + ' - ' + err.reason);
		}
		else {
			pouch = res;
			alert("database opened");
			runTests();
		}
	});
}

var tests = [
	setupTests,
	testId,
	testAllDocs,
	testGet,
	testUpdate,
	testDelete,
	deleteDb
];

var testIndex;

var revs: any = {};

function runTests() {
	testIndex = 0;
	tests[testIndex++]();
}

// each test function except the last one needs to call nextTest when it is finished doing its thing.
function nextTest() {
	alert("starting test " + testIndex);
	tests[testIndex++]();
}

function setupTests() {
	alert('setupTests');
	pouch.bulkDocs({
		docs: [{ _id: '1', name: 'record 1' },
			{ _id: '2', name: 'record 2' },
			{ _id: '3', name: 'record 3' }
		]
	}, function (err: PouchError, res: PouchUpdateResponse[]) {
		if (err) {
			alert('Error ' + err.status + ' occurred ' + err.error + ' - ' + err.reason);
		}
		else {
			for (var i = 0; i < res.length; i++) {
				if (res[i].ok) {
					revs[res[i].id] = res[i].rev;
				}
			}
			alert("test records loaded");
		}
		nextTest();
	});
}

function testId() {
	alert('testId');
	var id = pouch.id();
	alert('Database Id = ' + id);
	nextTest();
}

function testGet() {
	alert('testGet');
	pouch.get('1', function (err: PouchError, res: PouchGetResponse) {
		if (err) {
			alert('Error ' + err.status + ' occurred ' + err.error + ' - ' + err.reason);
		}
		else {
			alert('Retrieved record with id=1, name=[' + res['name'] + ']');
		}
		nextTest();
	});
}

function testAllDocs() {
	alert('testAllDocs');
	pouch.allDocs(function (err: PouchError, res: PouchAllDocsResponse) {
		alert('allDocs resulted in ' + res.total_rows + ' results');
		for (var i = 0; i < res.total_rows; i++) {
			alert('Retrieved record with id=' + res.rows[i].id + ', rev=[' + res.rows[i].value.rev + ']');
		}
		nextTest();
	});
}

function testUpdate() {
	alert('testUpdate');
	pouch.put({ _id: '2', _rev: revs['2'], name: 'record 2 updated' }, function (err: PouchError, res: PouchUpdateResponse) {
		if (err) {
			alert('Error ' + err.status + ' occurred ' + err.error + ' - ' + err.reason);
		}
		else {
			alert('record updated id=' + res.id + ', rev=[' + res.rev + ']');
		}
		testAllDocs();		// spit out the db contents and then go on
	});
}

function testDelete() {
	alert('testDelete');
	pouch.remove({ _id: '3', _rev: revs['3'] }, function (err: PouchError, res: PouchUpdateResponse) {
		if (err) {
			alert('Error ' + err.status + ' occurred ' + err.error + ' - ' + err.reason);
		}
		else {
			alert('record deleted id=' + res.id + ', rev=[' + res.rev + ']');
		}
		testAllDocs();		// spit out the db contents and then go on
	});
}

function deleteDb() {
	alert('deleteDb');
	if (pouch) {
		pouch = null;
		Pouch.destroy('idb://testdb', function (err: PouchError) {
			if (err) {
				alert('Error ' + err.status + ' occurred ' + err.error + ' - ' + err.reason);
			}
			else {
				alert("database destroyed");
			}
		});
	}
}
