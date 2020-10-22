import { dispatch, select } from '@wordpress/data';
import * as nux from '@wordpress/nux';

//
// components/dot-tip
//
<nux.DotTip tipId="foo/bar">foobar</nux.DotTip>;
<nux.DotTip tipId="foo/bar">
    <>
        <h1>foo</h1>
        <h1>bar</h1>
    </>
</nux.DotTip>;

//
// store
//

// $ExpectType void
dispatch('core/nux').disableTips();

// $ExpectType void
dispatch('core/nux').dismissTip('foo/bar');

// $ExpectType void
dispatch('core/nux').enableTips();

// $ExpectType void
dispatch('core/nux').triggerGuide(['foo/bar', 'foo/baz']);

// $ExpectType boolean
select('core/nux').areTipsEnabled();

// $ExpectType GuideInfo | undefined
select('core/nux').getAssociatedGuide('foo/bar');

// $ExpectType boolean
select('core/nux').isTipVisible('foo/bar');
