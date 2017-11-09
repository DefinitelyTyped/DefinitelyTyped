import * as React from 'react';
import { StaggeredMotion, Motion, spring, TransitionMotion, TransitionPlainStyle, TransitionStyle, Style, PlainStyle } from 'react-motion';

class Root extends React.Component {
    render() {
        return (
            <Motion defaultStyle={{ x: 0 }} style = {{ x: spring(10) }}>
                {(value: any) => <div>{ value.x } </div>}
            </Motion>
        );
    }
}

class TransitionTest extends React.Component {
    render() {
        return (
            <TransitionMotion defaultStyles={this.getDefaultStyles() }
                styles={this.getStyles() }
                >
                {this.renderItems.bind(this)}
            </TransitionMotion>
        );
    }

    getDefaultStyles(): TransitionPlainStyle[] {
        return [1, 2, 3].map(num => {
            const style: PlainStyle = {
                height: 0
            };
            return {
                key: `${num}`,
                data: num,
                style: style
            };
        })
    }

    getStyles(): TransitionStyle[] {
        return [1, 2, 3].map(num => {
            const style: Style = {
                height: spring(10)
            };
            return {
                key: `${num}`,
                data: num,
                style: style
            }
        });
    }

    renderItems(interpolatedItems: TransitionStyle[]): JSX.Element {
        return (
            <div>
                {interpolatedItems.map(config => {
                    return (
                        <div key={config.key}>
                            style={{ height: config.style['height'] }}
                            >
                            {config.data}
                        </div>
                    );
                }) }
            </div>
        )
    }
}

class StaggeredTest extends React.Component {
    render() {
        return (
            <StaggeredMotion defaultStyles={[{ h: 0 }, { h: 0 }, { h: 0 }]}
                styles={this.getStyles.bind(this)}
                >
            </StaggeredMotion>
        )
    }

    getStyles(prevInterpolatedStyles: PlainStyle[]): Style[] {
        return prevInterpolatedStyles.map((prevStyle, index) => {
            const style: Style = {};
            style['h'] = (index === 0) ? spring(100) : spring(prevInterpolatedStyles[index - 1]['h']);
            return style;
        })
    }

    renderItems(interpolatedItems: PlainStyle[]): JSX.Element {
        return (
            <div>
                {interpolatedItems.map((style, index) => {
                    return (
                        <div key={index} style={{ height: style['h'] }}/>
                    )
                })}
            </div>
        )
    }
}
