import * as React from 'react';
import { SortablePane, Pane } from 'react-sortable-pane';

export default () => {
    return (
        <div>
            <SortablePane direction="horizontal" margin={20}>
                <Pane id={0} key={0} width={120} height="100%">
                    <p>0</p>
                </Pane>
                <Pane id={1} key={1} width={120} height="100%">
                    <p>1</p>
                </Pane>
            </SortablePane>
        </div>
    );
};
