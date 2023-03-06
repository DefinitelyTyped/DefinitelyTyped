// https://github.com/SBRK/react-gamepad/blob/master/examples/FourPlayers.js

import * as React from 'react';
import Gamepad, { Axis } from 'react-gamepad';

export interface Props {
    x: number;
    y: number;
    playerIndex: number;
    color: string;
}

export interface State {
    speedX: number;
    speedY: number;
    x: number;
    y: number;
    connected: boolean;
}

class PlayerCube extends React.Component<Props, State> {
    private previousFrameTime?: number | undefined;
    state: State;

    constructor(props: Props) {
        super(props);

        this.state = {
            speedX: 0.0,
            speedY: 0.0,

            x: props.x,
            y: props.y,

            connected: false,
        };
    }

    componentDidMount(): void {
        window.requestAnimationFrame(this.update.bind(this));
    }

    connectHandler(gamepadIndex: number): void {
        console.log(`Gamepad ${gamepadIndex} connected!`);

        this.setState({
            connected: true,
        });
    }

    disconnectHandler(gamepadIndex: number): void {
        console.log(`Gamepad ${gamepadIndex} disconnected !`);

        this.setState({
            connected: false,
        });
    }

    update(datetime: number): void {
        window.requestAnimationFrame(this.update.bind(this));

        const previousFrameTime = this.previousFrameTime;
        this.previousFrameTime = datetime;

        if (typeof previousFrameTime === 'undefined') return;

        const frameTime = datetime - previousFrameTime;

        if (isNaN(frameTime)) return;

        const baseSpeed = 300.0; // pixels per second
        const ratio = baseSpeed * (frameTime / 1000.0);

        this.setState({
            x: this.state.x + this.state.speedX * ratio,
            y: this.state.y - this.state.speedY * ratio,
        });
    }

    axisChangeHandler(axisName: Axis, value: number, previousValue: number): void {
        if (axisName === 'LeftStickX') {
            this.setState({
                speedX: value,
            });
        } else if (axisName === 'LeftStickY') {
            this.setState({
                speedY: value,
            });
        }
    }

    getPlayerStyle(): React.CSSProperties {
        return {
            height: '50px',
            width: '50px',

            background: this.props.color,
            color: 'white',

            fontSize: '20px',
            textAlign: 'center',
            lineHeight: '50px',

            position: 'fixed',

            top: Math.round(this.state.y) + 'px',
            left: Math.round(this.state.x) + 'px',
        };
    }

    render() {
        return (
            <Gamepad
                gamepadIndex={this.props.playerIndex}
                onConnect={this.connectHandler.bind(this)}
                onDisconnect={this.disconnectHandler.bind(this)}
                onAxisChange={this.axisChangeHandler.bind(this)}
            >
                <div hidden={!this.state.connected} id={`player${this.props.playerIndex}`} style={this.getPlayerStyle()}>
                    {this.props.playerIndex}
                </div>
            </Gamepad>
        );
    }
}

class FourPlayersExample extends React.Component {
    render() {
        return (
            <div>
                <PlayerCube playerIndex={0} color="red" x={300.0} y={200.0} />
                <PlayerCube playerIndex={1} color="blue" x={300.0} y={300.0} />
                <PlayerCube playerIndex={2} color="green" x={400.0} y={200.0} />
                <PlayerCube playerIndex={3} color="black" x={400.0} y={300.0} />
            </div>
        );
    }
}

export default FourPlayersExample;
