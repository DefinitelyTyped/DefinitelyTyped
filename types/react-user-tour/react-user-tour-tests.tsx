// Tests for type definitions for react-user-tour
// Project: https://github.com/socialtables/react-user-tour
// Definitions by: Carlo Cancellieri <https://github.com/ccancellieri>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types='react-dom' />

import * as React from 'react';
import * as ReactDOM from 'react-dom';

import ReactUserTour from 'react-user-tour';

interface State {
    tourStep:number;
    isTourActive:boolean;
}

class TestApp extends React.Component<{}, State> {

    constructor(p:any){
        super(p);

        this.setState({
            isTourActive:true,
            tourStep:1
        });
    }

    render() {

        const Tour = <ReactUserTour active={this.state.isTourActive}
            step={this.state.tourStep}
            onNext={(step:number) => this.setState({tourStep: step, isTourActive: true})}
            onBack={(step:number) => this.setState({tourStep: step, isTourActive: true})}
            onCancel={() => this.setState({tourStep: this.state.tourStep, isTourActive: false})}
            steps={[
                {
                    step: 1,
                    selector: '.MyClass',
                    title: <div>React User Tour</div>,
                    body: <div>Provide a simple guided tour around a website utilizing css selectors.</div>,
                    position: 'bottom'
                }
            ]}
            />;

        return  <div id='test-app'>
                    {Tour}
                </div>;
    }
}

ReactDOM.render(React.createElement(TestApp, {}), document.getElementById('test-app'));
