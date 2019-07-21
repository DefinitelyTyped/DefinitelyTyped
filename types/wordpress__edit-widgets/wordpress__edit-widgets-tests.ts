import { BlockInstance } from '@wordpress/blocks';
import { dispatch, select } from '@wordpress/data';
import * as ew from '@wordpress/edit-widgets';

declare const BLOCK_INSTANCE: BlockInstance;

// $ExpectType void
ew.customizerInitialize('foo');

// $ExpectType void
ew.initialize('foo');

//
// store
//

// $ExpectType IterableIterator<void>
dispatch('core/edit-widgets').saveWidgetAreas();

// $ExpectType IterableIterator<void>
dispatch('core/edit-widgets').setupWidgetAreas();

// $ExpectType void
dispatch('core/edit-widgets').updateBlocksInWidgetArea('foo');
// $ExpectType void
dispatch('core/edit-widgets').updateBlocksInWidgetArea('foo', undefined);
// $ExpectType void
dispatch('core/edit-widgets').updateBlocksInWidgetArea('foo', []);
// $ExpectType void
dispatch('core/edit-widgets').updateBlocksInWidgetArea('foo', [BLOCK_INSTANCE, BLOCK_INSTANCE]);

// $ExpectType BlockInstance<{ [k: string]: any; }>[] | undefined
select('core/edit-widgets').getBlocksFromWidgetArea('foo');

// $ExpectType WidgetArea | undefined
select('core/edit-widgets').getWidgetArea('foo');

// $ExpectType WidgetArea[]
select('core/edit-widgets').getWidgetAreas();
