import ToolTip from 'react-power-tooltip';

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
                <ToolTip show={this.state.isTooltipActive} position="right center" arrowAlign="center">
                    <div>
                        <p>This is the content of the tooltip</p>
                    </div>
                </ToolTip>
            </div>
        );
    }
}


