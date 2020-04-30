import * as React from 'react';
import * as rcui from 'rc-easyui';

type Element = React.ReactElement;

function Dialog(props: {}): Element {
    return(
        <rcui.Dialog
            closed={true}
            title="Basic Dialog"
            style={{ width: '400px', height: '200px' }}
        />
    );
}
