// Type definitions for RxJS bindings for Node
// Project: https://github.com/Reactive-Extensions/rx-node
// Definitions by: Andre Luiz dos Santos <https://github.com/andre-luiz-dos-santos/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

{
	var source = Rx.Observable.return(42);
	var emitter = RxNode.toEventEmitter(source, 'data');

	emitter.on('data', function(data: number) {
		console.log('Data: ' + data);
	});

	emitter.on('end', function() {
		console.log('End');
	});

	// Ensure to call publish to fire events from the observable
	emitter.publish();
}
{
	var subscription = RxNode.fromStream<string>(process.stdin, 'end')
		.subscribe(function(x) { console.log(x); });
}
{
	var subscription = RxNode.fromReadableStream(process.stdin)
		.subscribe(function(x) { console.log(x); });
}
{
	var readline = require('readline');
	var fs = require('fs');

	var rl = readline.createInterface({
		input: fs.createReadStream('sample.txt')
	});

	var subscription = RxNode.fromReadLineStream(rl)
		.subscribe(function(x) { console.log(x); });
}
{
	var subscription = RxNode.fromWritableStream(process.stdout)
		.subscribe(function(x) { console.log(x); });
}
{
	var source = Rx.Observable.range(0, 5);
	var subscription = RxNode.writeToStream(source, process.stdout, 'utf8');
}
