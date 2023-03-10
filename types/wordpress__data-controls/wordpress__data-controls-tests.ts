import { apiFetch, dispatch, select } from '@wordpress/data-controls';

// $ExpectType unknown
apiFetch({ path: '/wp/v2/posts' });

// $ExpectType void
dispatch('core/edit-post', 'togglePublishSidebar');
// $ExpectType void
dispatch('core/block-editor', 'toggleSelection', false);
// $ExpectType void
dispatch('core/block-editor', 'toggleSelection', false, 'foo', 1, {});

// $ExpectType void
select('core/edit-post', 'isEditorSideBarOpened');
// $ExpectType void
select('core/edit-post', 'isEditorPanelEnabled', 'foo');
// $ExpectType void
select('core/edit-post', 'isEditorPanelEnabled', 'foo', 123, true, 'bar');
