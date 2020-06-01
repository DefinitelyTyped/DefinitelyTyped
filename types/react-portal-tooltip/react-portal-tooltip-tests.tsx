import * as React from 'react';
import ToolTip, { StatefulToolTip } from 'react-portal-tooltip';

// Tooltip test

class ToolTipTest extends React.Component {
    state = {
        isTooltipActive: false,
    };
    showTooltip() {
        this.setState({ isTooltipActive: true });
    }
    hideTooltip() {
        this.setState({ isTooltipActive: false });
    }
    render() {
        return (
            <div>
                <p id="text" onMouseEnter={this.showTooltip.bind(this)} onMouseLeave={this.hideTooltip.bind(this)}>
                    This is a cool component
                </p>
                <ToolTip active={this.state.isTooltipActive} position="top" arrow="center" parent="#text">
                    <div>
                        <p>This is the content of the tooltip</p>
                        <img src="image.png" />
                    </div>
                </ToolTip>
            </div>
        );
    }
}

// Parent props

class ToolTipTestParentProp1 extends React.Component {
    state = {
        isTooltipActive: false,
    };
    showTooltip() {
        this.setState({ isTooltipActive: true });
    }
    hideTooltip() {
        this.setState({ isTooltipActive: false });
    }
    render() {
        return (
            <div>
                <div id="hoverMe" onMouseEnter={this.showTooltip} onMouseLeave={this.hideTooltip}>
                    Hover me!!!
                </div>
                <ToolTip active={this.state.isTooltipActive} position="top" arrow="center" parent="#hoverMe">
                    <div>
                        <p>This is the content of the tooltip</p>
                    </div>
                </ToolTip>
            </div>
        );
    }
}

class ToolTipTestParentProp2 extends React.Component {
    readonly element = React.createRef<HTMLDivElement>();

    constructor(props: {}) {
        super(props);
    }
    state = {
        isTooltipActive: false,
    };
    showTooltip() {
        this.setState({ isTooltipActive: true });
    }
    hideTooltip() {
        this.setState({ isTooltipActive: false });
    }
    render() {
        return (
            <div>
                <div ref={this.element} onMouseEnter={this.showTooltip} onMouseLeave={this.hideTooltip}>
                    Hover me!!!
                </div>
                <ToolTip active={this.state.isTooltipActive} position="top" arrow="center" parent={this.element}>
                    <div>
                        <p>This is the content of the tooltip</p>
                    </div>
                </ToolTip>
            </div>
        );
    }
}

// StatefulToolTip test

const StatefulToolTipTest = () => {
    const button = <span>Hover me to display the tooltip</span>;

    return <StatefulToolTip parent={button}>Stateful Tooltip content here!</StatefulToolTip>;
};
