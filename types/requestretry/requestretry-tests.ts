import request = require('requestretry');

request({
	url: 'https://api.example.com/v1/a/b',
	json:true,
	// The below parameters are specific to request-retry
	// (default) try 5 times
	maxAttempts: 5,
	// (default) wait for 5s before trying again
	retryDelay: 5000,
	// (default) retry on 5xx or network errors
	retryStrategy: request.RetryStrategies.HTTPOrNetworkError
}, (err, response, body) => {

	// Body.
});
