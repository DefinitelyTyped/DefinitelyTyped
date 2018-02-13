

//handle hash changes
function handleChanges(newHash: any, oldHash: any) {
	console.log(newHash);
}

hasher.changed.add(handleChanges); //add hash change listener
hasher.initialized.add(handleChanges); //add initialized listener (to grab initial value in case it is already set)
hasher.init(); //initialize hasher (start listening for history changes)

hasher.setHash('foo'); //change hash value (generates new history record)

hasher.appendHash = '?test=true';

hasher.prependHash = '!'; //default value is "/"
