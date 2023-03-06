import {
    useVirtual,
    useVirtualModel,
    useSubscription,
    EVT_FROM,
    useComponentSubscription,
    useOnce,
    Subscription,
    mapVisibleRange,
} from '@af-utils/react-virtual-headless';

import * as React from 'react';

// $ExpectType Model
useVirtualModel();
// $ExpectType Model
useVirtual();

// $ExpectType Model
useVirtualModel({
    itemCount: 10,
    getEstimatedItemSize: (itemSizes: number, scrollSize: number, newItemCount?: number) => 5,
    estimatedWidgetSize: 5,
    overscanCount: 3,
    horizontal: true,
});

// $ExpectType Model
useVirtual({
    itemCount: 10,
    getEstimatedItemSize: (itemSizes: number, scrollSize: number, newItemCount?: number) => 5,
    estimatedWidgetSize: 5,
    overscanCount: 3,
    horizontal: true,
});

// I feel that that is enough to show that the two functions are equivalent.  The following tests will just use `useVirtualModel`.

// @ts-expect-error
useVirtual({ itemCount: 'asdf' });

// @ts-expect-error
useVirtual({ getEstimatedItemSize: () => 'abc' });

// @ts-expect-error
useVirtual({ estimatedWidgetSize: 'abc' });

// @ts-expect-error
useVirtual({ overscanCount: 'abc' });

// @ts-expect-error
useVirtual({ horizontal: 'abc' });

// $ExpectType void
useSubscription(useVirtual(), [EVT_FROM], () => {});

// @ts-expect-error
useSubscription(useVirtual(), EVT_FROM, () => {});

// @ts-expect-error
useSubscription(undefined, [EVT_FROM], () => {});

// $ExpectType void
useComponentSubscription(useVirtual(), [EVT_FROM]);

// $ExpectType void
useComponentSubscription(useVirtual());

// @ts-expect-error
useComponentSubscription(useVirtual(), EVT_FROM);

// @ts-expect-error
useComponentSubscription(undefined, [EVT_FROM]);

// $ExpectType Element
useOnce(() => <>Abc</>);

// $ExpectType Element
useOnce(() => {
    const testComponent = () => {
        return <>Abc</>;
    };
    return testComponent();
});

// $ExpectType null
useOnce(() => null);

// @ts-expect-error
useOnce(() => {});

// $ExpectType ReactElement<any, any> | null
Subscription({ model: useVirtual(), children: <>Abc</> });

// $ExpectType ReactElement<any, any> | null
Subscription({ model: useVirtual(), events: [EVT_FROM], children: <>Abc</> });

// @ts-expect-error
Subscription({ model: useVirtual(), events: EVT_FROM, children: <>Abc</> });

// @ts-expect-error
Subscription({ model: useVirtual(), children: { abc: 1 } });

// $ExpectType void
mapVisibleRange(useVirtual(), (index: number) => {});

// $ExpectType void
mapVisibleRange(useVirtual(), (index: number, offset?: number) => {}, true);

// @ts-expect-error
mapVisibleRange(useVirtual(), (index: number, offset?: number) => {}, 'abc');

// @ts-expect-error
mapVisibleRange(useVirtual(), (index: number, offset: number) => {});

// @ts-expect-error
mapVisibleRange(<></>, (index: number, offset?: number) => {});
