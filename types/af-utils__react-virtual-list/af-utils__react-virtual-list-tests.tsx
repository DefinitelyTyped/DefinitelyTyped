import { List, useVirtualModel } from '@af-utils/react-virtual-list';
import * as React from 'react';

const model = useVirtualModel();
const itemData = [{ name: 'item1' }, { name: 'item2' }, { name: 'item3' }];

const renderList = () => {
    return (
        <List
            model={model}
            itemData={itemData}
            className="list"
            component={'span'}
            getKey={i => i + 1}
            tabIndex={2}
            countOffset
            id={'extraProp'}
        >
            {({ data }) => {
                return <div>{data.name}</div>;
            }}
        </List>
    );
};
