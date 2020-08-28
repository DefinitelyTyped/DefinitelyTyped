import { apiFetch, controls, dispatch, select } from '@wordpress/data-controls';
import { registerStore } from '@wordpress/data';

// $ExpectType void
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

/* tslint:disable:no-void-expression */
function* generator() {
    // $ExpectType any
    const apiFetchValue = yield apiFetch({ path: '/wp/v2/posts' });
    // $ExpectType any
    const dispatchValue = yield dispatch('core/edit-post', 'togglePublishSidebar');
    // $ExpectType any
    const selectValue = yield select('core/edit-post', 'isEditorPanelEnabled', 'foo');
}
/* tslint:enable:no-void-expression */

const myExistingControls = {
    FOO: () => Promise.resolve('foo'),
    BAR: () => 'bar',
};

registerStore('my-store', {
    reducer: (state: any) => state,
    controls: {
        ...controls,
        ...myExistingControls,
    },
});
