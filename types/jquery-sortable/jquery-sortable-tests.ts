


/**
 * http://johnny.github.io/jquery-sortable/#connected
 */
function connectedListsWithDropAnimation() {
	var adjustment: any;

	$('ol.simple_with_animation').sortable({
		group: 'simple_with_animation',
		pullPlaceholder: false,
		// animation on drop
		onDrop: function  (item, targetContainer, _super) {
			var clonedItem = $('<li/>').css({height: 0})
			item.before(clonedItem)
			clonedItem.animate({'height': item.height()})

			item.animate(clonedItem.position(), function  () {
				clonedItem.detach();
				_super(item);
			})
		},

		// set item relative to cursor position
		onDragStart: function ($item, container, _super) {
			var offset = $item.offset(),
			    pointer = container.rootGroup.pointer;

			adjustment = {
				left: pointer.left - offset.left,
				top: pointer.top - offset.top
			};

			_super($item, container);
		},
		onDrag: function ($item, position) {
			$item.css({
				left: position.left - adjustment.left,
				top: position.top - adjustment.top
			})
		}
	});
}


/**
 * http://johnny.github.io/jquery-sortable/#handle
 */
function sortHandleAndLimitedDragDrop() {
	$('ol.simple_with_drop').sortable({
		group: 'no-drop',
		handle: 'i.icon-move',
		onDragStart: function (item, container, _super) {
			// Duplicate items of the no drop area
			if(!container.options.drop)
				item.clone().insertAfter(item)
			_super(item)
		}
	});

	$('ol.simple_with_no_drop').sortable({
		group: 'no-drop',
		drop: false
	});

	$('ol.simple_with_no_drag').sortable({
		group: 'no-drop',
		drag: false
	});
}


/**
 * http://johnny.github.io/jquery-sortable/#nested
 */
function toggleNestedLists() {
	var oldContainer: any;

	$('ol.nested_with_switch').sortable({
		group: 'nested',
		afterMove: function (placeholder, container) {
			if(oldContainer != container){
				if(oldContainer)
					oldContainer.el.removeClass('active')
				container.el.addClass('active')

				oldContainer = container
			}
		},
		onDrop: function (item, container, _super) {
			container.el.removeClass('active')
			_super(item)
		}
	});

	$('.switch-container').on('click', '.switch', function  (e) {
		var method = $(this).hasClass('active') ? 'enable' : 'disable'
		$(e.delegateTarget).next().sortable(method)
	});
}


/**
 * http://johnny.github.io/jquery-sortable/#limited-target
 */
function connectedListsWithLimitedDropTargets() {
	var group = $('ol.limited_drop_targets').sortable({
		group: 'limited_drop_targets',
		isValidTarget: function  (item, container) {
			if(item.is('.highlight'))
				return true
			else {
				return item.parent('ol')[0] == container.el[0]
			}
		},
		onDrop: function (item, container, _super) {
			$('#serialize_output').text(group.sortable('serialize').get().join('\n'));
			_super(item, container);
		},
		serialize: function (parent, children, isContainer) {
			return isContainer ? children.join() : 24;
		},
		tolerance: 6,
		distance: 10
	});
}


/**
 * http://johnny.github.io/jquery-sortable/#bootstrap
 */
function sortingABootstrapMenu() {
	$('ol.nav').sortable({
		group: 'nav',
		nested: false,
		vertical: false,
		exclude: '.divider-vertical',
		onDragStart: function($item, container, _super) {
			$item.find('ol.dropdown-menu').sortable('disable');
			_super($item, container);
		},
		onDrop: function($item, container, _super) {
			$item.find('ol.dropdown-menu').sortable('enable');
			_super($item, container);
		}
	});

	$('ol.dropdown-menu').sortable({
		group: 'nav'
	});
}


/**
 * http://johnny.github.io/jquery-sortable#serialization
 */
function serializationAndDelay() {
	var group = $('ol.serialization').sortable({
		group: 'serialization',
		delay: 500,
		onDrop: function (item, container, _super) {
			var data = group.sortable('serialize').get();

			var jsonString = JSON.stringify(data, null, ' ');

			$('#serialize_output2').text(jsonString);
			_super(item, container);
		}
	});
}


/**
 * http://johnny.github.io/jquery-sortable/#table
 */
function sortTables() {
	// Sortable rows
	$('.sorted_table').sortable({
		containerSelector: 'table',
		itemPath: '> tbody',
		itemSelector: 'tr',
		placeholder: '<tr class="placeholder"/>'
	});

	// Sortable column heads
	var oldIndex: any;

	$('.sorted_head tr').sortable({
		containerSelector: 'tr',
		itemSelector: 'th',
		placeholder: '<th class="placeholder"/>',
		vertical: false,
		onDragStart: function (item, group, _super) {
			oldIndex = item.index();
			item.appendTo(item.parent());
			_super(item);
		},
		onDrop: function  (item, container, _super) {
			var field: any,
			    newIndex = item.index()

			if (newIndex != oldIndex)
				item.closest('table').find('tbody tr').each(function (i, row) {
					var $row = $(row);
					field = $row.children().eq(oldIndex);
					if(newIndex)
						field.before($row.children()[newIndex]);
					else
						$row.prepend(field);
				});

			_super(item);
		}
	});
}


/**
 * http://johnny.github.io/jquery-sortable/#docs
 */
function api() {
	$('.horatio').sortable().sortable('disable').sortable('enable')
		.sortable('refresh').sortable('serialize').sortable('destroy');
}