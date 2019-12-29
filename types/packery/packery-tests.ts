import { Packery, PackeryOptions } from 'packery';

// TODO Add Draggabilly to bind Draggabilly Events
var container = document.querySelector('#container');
var item = document.querySelector('.item');
var items = document.querySelectorAll('.item');
var $element = $('#single-item');

var PackeryEvents = {
	dragItemPositioned: 'dragItemPositioned',
	layoutComplete: 'layoutComplete',
	fitComplete: 'fitComplete',
	removeComplete: 'removeComplete'
};

var packery = new Packery(container);

var PackeryItems: Array<any> = [
	packery.data(item),
	packery.data(item),
	packery.data(item),
	packery.data(item),
	packery.data(item)
];

packery.addItems(item);
packery.addItems(items);

packery.appended(item);
packery.appended(items);

packery.bindResize();

packery.bindDraggabillyEvents($element);

packery.fit(item);
packery.fit(item, 10);
packery.fit(item, 10, 50);

packery.getItemElements();

packery.getItem(item);

packery.layout();

packery.layoutItems(PackeryItems);

packery.off(PackeryEvents.dragItemPositioned, () => {
	// Some actions to execute on event trigger
});

packery.off(PackeryEvents.layoutComplete, () => {
	// Some actions to execute on event trigger
});

packery.off(PackeryEvents.removeComplete, () => {
	// Some actions to execute on event trigger
});

packery.off(PackeryEvents.fitComplete, () => {
	// Some actions to execute on event trigger
});

packery.on(PackeryEvents.dragItemPositioned, () => {
	// Some actions to execute on event trigger
});

packery.on(PackeryEvents.layoutComplete, () => {
	// Some actions to execute on event trigger
});

packery.on(PackeryEvents.removeComplete, () => {
	// Some actions to execute on event trigger
});

packery.on(PackeryEvents.fitComplete, () => {
	// Some actions to execute on event trigger
});

packery.once(PackeryEvents.dragItemPositioned, () => {
	// Some actions to execute on event trigger
});

packery.once(PackeryEvents.layoutComplete, () => {
	// Some actions to execute on event trigger
});

packery.once(PackeryEvents.removeComplete, () => {
	// Some actions to execute on event trigger
});

packery.once(PackeryEvents.fitComplete, () => {
	// Some actions to execute on event trigger
});

packery.data(item);

packery.prepended(item);
packery.prepended(items);

packery.reloadItems();

packery.remove(item);
packery.remove(items);

packery.stamp(item);
packery.stamp(items);

packery.unbindResize();

packery.unstamp(item);
packery.unstamp(items);
