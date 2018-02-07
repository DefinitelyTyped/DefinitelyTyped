import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Tooltip, {RCTooltip} from 'rc-tooltip';

ReactDOM.render(
    <Tooltip placement="left" trigger={['click']} overlay={<span>tooltip</span>}>
        <a href='#'>hover</a>
    </Tooltip>,
    document.querySelector('.app')
);

ReactDOM.render(
    <Tooltip overlay="tooltip">
        <a href='#'>hover</a>
    </Tooltip>,
    document.querySelector('.app')
);

ReactDOM.render(
    <Tooltip
        placement="bottomRight"
        trigger={['click', 'focus']}
        overlay={<span>tooltip</span>}
        overlayClassName="overlay"
        mouseEnterDelay={0}
        mouseLeaveDelay={0.1}
        overlayStyle={{color: 'red'}}
        prefixCls="my-"
        transitionName="cool-transition"
        onVisibleChange={() => console.log('visible changed')}
        visible
        defaultVisible
        onPopupAlign={(popup, align) => console.log('aligned:', popup, align)}
        arrowContent={<div className="arrow"/>}
        getTooltipContainer={() => document.querySelector('.foo')}
        destroyTooltipOnHide
    >
        <a href='#'>hover</a>
    </Tooltip>,
    document.querySelector('.another-app')
);

ReactDOM.render(
    <Tooltip
        placement="bottomRight"
        trigger={['click', 'focus']}
        overlay={() => <span>tooltip</span>}
    >
        <a href='#'>hover</a>
    </Tooltip>,
    document.querySelector('.another-app')
);

const props: RCTooltip.Props = {
    placement: "bottomRight",
    trigger: ['click', 'focus'],
    overlay: () => <span>tooltip</span>,
};
