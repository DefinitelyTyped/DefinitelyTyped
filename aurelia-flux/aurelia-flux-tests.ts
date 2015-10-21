/// <reference path="aurelia-flux.d.ts" />
import {Dispatcher, handle, waitFor} from 'aurelia-flux';

class Store {
	
	private items : string[];
	
	@handle('items.add')
	private addItem(action : string, itemName : string) {
		this.items.push(itemName);
	}
	
}

class AnotherStore {
	
	@handle('items.add')
	@waitFor(Store)
	private handleAddingItem(action : string, itemName : string) {
		console.log(itemName);
	}
	
}

@inject(Dispatcher)
class ViewModel {
	
	private dispatcher : Dispatcher;
	private items : string[];
	private disposeDispatcher : aurelia.flux.IDisposeDisptacher;
	
	constructor(dispatcher : Dispatcher) {
		this.dispatcher = dispatcher;					
		
		this.disposeDispatcher = this.dispatcher.handle('items.add', (action : string, itemName : string) => {			
			this.dispatcher.waitFor(AnotherStore, () => {				
				this.items.push(itemName);				
			});						
		});		
	}
	
	private deactivate() {
		this.disposeDispatcher();
	}
	
	public addItem(itemName : string) {
		this.dispatcher.dispatch('items.add', itemName);
	}
}


function inject(...params) {
	return (target) => {}
}