import { dispatch, select } from '@wordpress/data';
import type { Notice, Action } from '@wordpress/notices';

//
// store
//

dispatch('core/notices').createNotice('warning', 'hello world');
dispatch('core/notices').createNotice(undefined, 'hello world', {});
dispatch('core/notices').createNotice('info', 'hello world', {
    isDismissible: true,
    actions: [
        {
            label: 'foo',
            url: 'https://foo.bar',
        },
        {
            label: 'bar',
            onClick: () => void 0,
        },
    ],
});

dispatch('core/notices').createNotice(undefined, 'hello world', {
    icon: <div />,
    explicitDismiss: true,
    onDismiss: () => {},
});

dispatch('core/notices').createErrorNotice('hello world');
dispatch('core/notices').createErrorNotice('hello world', {});

dispatch('core/notices').createInfoNotice('hello world');
dispatch('core/notices').createInfoNotice('hello world', { id: 'foo' });

dispatch('core/notices').createSuccessNotice('hello world');
dispatch('core/notices').createSuccessNotice('hello world', { isDismissible: false });

dispatch('core/notices').createWarningNotice('hello world');
dispatch('core/notices').createWarningNotice('hello world', undefined);

// $ExpectType Notice[]
select('core/notices').getNotices();

// $ExpectType Notice[]
select('core/notices').getNotices('foo');

// $ExpectType Notice
const { type, id, actions } = select('core/notices').getNotices('foo')[0];
