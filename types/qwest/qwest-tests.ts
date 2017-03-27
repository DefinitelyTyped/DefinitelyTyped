

// Examples taken from https://github.com/pyrsmk/qwest/blob/master/README.md

qwest.get('example.com')
	.then(function(response) {
		alert(response);
	});

qwest.post('example.com', {
	firstname: 'Pedro',
	lastname: 'Sanchez',
	age: 30
})
	.then(function(response) {
		// Make some useful actions
	})
	.catch(function(e, response) {
		// Process the error
	});

qwest.get('example.com')
	.then(function(response) {
		// Blah blah blah
	})
	.catch(function(e, response) {
		throw e;
	});

qwest.base = 'http://example.com/';

qwest.limit(4);

qwest.before(function() {
	this.uploadonprogress = function(e: any) {
		// Upload in progress
	};
})
	.get('example.com')
	.then(function(response) {
        // Blah blah blah
	});

if (qwest.xhr2) {
    // Actions for XHR2
} else {
    // Actions for XHR1
}

qwest.setDefaultXdrResponseType('text');


// Extra tests for anything not covered above

// Tests for method types
qwest.post('foo')
qwest.put('foo')
qwest.delete('foo')

// Tests for request method options
qwest.get('foo', null, {
	dataType: 'foo',
	responseType: 'bar',
	cache: true,
	async: false,
	user: 'bob',
	password: 'pass',
	headers: {
		'X-Foo': 'Bar',
		'X-Something': {
			foo: 'bar'
		}
	},
	withCredentials: true,
	timeout: 2000,
	attempts: 7
})
qwest.get('foo', null, {})

qwest.get('foo', null, {}).complete(() => {
	//done
})