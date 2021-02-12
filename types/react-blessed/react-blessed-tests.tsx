import * as React from 'react';
import * as blessed from 'blessed';
import { render } from 'react-blessed';

/**
 * Stylesheet
 */
const stylesheet = {
    bordered: {
        border: {
            type: 'line',
        },
        style: {
            border: {
                fg: 'blue',
            },
        },
    },
};

/**
 * Top level component.
 */
class Dashboard extends React.Component {
    render() {
        return (
            <>
                <Log />
                <Request />
                <Response />
                <Jobs />
                <Progress />
                <Stats />
                <blessed-button
                    mouse
                    border={{ type: 'line' }}
                    height={3}
                    width={3}
                    top={2}
                    left={4}
                    onPress={() => null}
                >
                    +
                </blessed-button>
                <blessed-form
                    keys
                    vi
                    focused
                    onSubmit={() => null}
                    onReset={() => null}
                    left="5%"
                    top="5%"
                    width="90%"
                    height="90%"
                    border={{ type: 'line' }}
                    style={{ bg: 'cyan', border: { fg: 'blue' } }}
                >
                    <blessed-box width={6} height={3}>
                        Name:{' '}
                    </blessed-box>
                    <blessed-textbox
                        value="hi"
                        onSubmit={(_data: any) => null}
                        left={6}
                        height={3}
                        keys
                        mouse
                        inputOnFocus
                    />
                    <blessed-box top={3} height={3}>
                        testing
                    </blessed-box>
                </blessed-form>
            </>
        );
    }
}

/**
 * Log component.
 */
class Log extends React.Component {
    render() {
        return (
            <blessed-box label="Log" class={stylesheet.bordered} width="60%" height="70%" draggable={true}>
                {'Hello'}, {0}, {'World'}
            </blessed-box>
        );
    }
}

/**
 * Request component.
 */
class Request extends React.Component {
    render() {
        return (
            <blessed-box label="Request" class={stylesheet.bordered} top="70%" width="30%">
                {0}
            </blessed-box>
        );
    }
}

/**
 * Response component.
 */
class Response extends React.Component {
    render() {
        return <blessed-box class={stylesheet.bordered} top="70%" left="30%" width="30%" />;
    }
}

/**
 * Jobs component.
 */
class Jobs extends React.Component {
    render() {
        return <blessed-box label="Jobs" class={stylesheet.bordered} left="60%" width="40%" height="60%" />;
    }
}

/**
 * Progress component.
 */
class Progress extends React.Component<any, any> {
    state: {
        progress: number;
        color: string;
    } = {
        progress: 0,
        color: 'blue',
    };

    constructor(props: any) {
        super(props);
        const interval: NodeJS.Timer = setInterval(() => {
            const { progress } = this.state;
            if (this.state.progress >= 100) {
                clearInterval(interval);
                return;
            }
            this.setState({
                progress: progress + 1,
            });
        }, 50);
    }

    render() {
        const { progress, color } = this.state;
        const label = `Progress - ${progress}%`;

        return (
            <blessed-box>
                <blessed-text>text</blessed-text>
                <blessed-progressbar
                    label={label}
                    onComplete={() =>
                        this.setState({
                            color: 'green',
                        })
                    }
                    class={stylesheet.bordered}
                    ref="hi"
                    filled={progress}
                    top="60%"
                    left="60%"
                    width="40%"
                    height="10%"
                />
            </blessed-box>
        );
    }
}

/**
 * Stats component.
 */
class Stats extends React.Component {
    render() {
        return (
            <blessed-box label="Stats" class={stylesheet.bordered} top="70%" left="60%" width="40%" height="31%">
                <blessed-textarea value="hi">hi</blessed-textarea>
                Some stats
            </blessed-box>
        );
    }
}

/**
 * Rendering the screen.
 */
const screen = blessed.screen({
    autoPadding: true,
    smartCSR: true,
    title: 'react-blessed dashboard',
});

screen.key(['escape', 'q', 'C-c'], () => {
    return process.exit(0);
});

render(<Dashboard />, screen);
