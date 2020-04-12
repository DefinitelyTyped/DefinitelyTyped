// Based on the examples from https://react-component.github.io/steps/

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Steps, { Step } from 'rc-steps';

const container = document.querySelector('.app');

const description =
    '这里是多信息的描述啊这里是多信息的描述啊这里是多信息的描述啊这里是多信息的描述啊这里是多信息的描述啊';

ReactDOM.render(
    <Steps labelPlacement="vertical" current={1}>
        <Step title="已完成" description={description} />
        <Step title="进行中" description={description} />
        <Step title="待运行" description={description} />
        <Step title="待运行" description={description} />
        <Step title="待运行" description={description} />
    </Steps>,
    container,
);

const CustomStep = (props: any) => <Step style={{ fontWeight: 'bold', fontStyle: 'italic' }} {...props} />;

ReactDOM.render(
    <Steps current={1}>
        <Step title="已完成" description={description} />
        <Step title="进行中" description={description} />
        <CustomStep title="进行中" description={description} />
        <Step title="待运行" description={description} />
    </Steps>,
    container,
);

function getFinishIcon() {
    const path =
        'M923 283.6c-13.4-31.1-32.6-58.9-56.9-82.8-24.3-23.8-52.' +
        '5-42.4-84-55.5-32.5-13.5-66.9-20.3-102.4-20.3-49.3 0-97.4 13.5-139' +
        '.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5' +
        '-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 ' +
        '55.5-24.4 23.9-43.5 51.7-56.9 82.8-13.9 32.3-21 66.6-21 101.9 0 33' +
        '.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99' +
        '.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.' +
        '7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 10' +
        '1.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 ' +
        '20.3-103.3 0.1-35.3-7-69.6-20.9-101.9z';
    return (
        <svg width="1em" height="1em" fill="currentColor" viewBox="0 0 1024 1024" style={{ verticalAlign: '-.125em' }}>
            <path d={path} />
        </svg>
    );
}

function getErrorIcon() {
    const path1 =
        'M512 0C229.2 0 0 229.2 0 512s229.2 512 512 512 512-229' +
        '.2 512-512S794.8 0 512 0zm311.1 823.1c-40.4 40.4-87.5 72.2-139.9 9' +
        '4.3C629 940.4 571.4 952 512 952s-117-11.6-171.2-34.5c-52.4-22.2-99' +
        '.4-53.9-139.9-94.3-40.4-40.4-72.2-87.5-94.3-139.9C83.6 629 72 571.' +
        '4 72 512s11.6-117 34.5-171.2c22.2-52.4 53.9-99.4 94.3-139.9 40.4-4' +
        '0.4 87.5-72.2 139.9-94.3C395 83.6 452.6 72 512 72s117 11.6 171.2 3' +
        '4.5c52.4 22.2 99.4 53.9 139.9 94.3 40.4 40.4 72.2 87.5 94.3 139.9C' +
        '940.4 395 952 452.6 952 512s-11.6 117-34.5 171.2c-22.2 52.4-53.9 9' +
        '9.5-94.4 139.9z';
    const path2 =
        'M640.3 765.5c-19.9 0-36-16.1-36-36 0-50.9-41.4-92.3-92' +
        '.3-92.3s-92.3 41.4-92.3 92.3c0 19.9-16.1 36-36 36s-36-16.1-36-36c0' +
        '-90.6 73.7-164.3 164.3-164.3s164.3 73.7 164.3 164.3c0 19.9-16.1 36' +
        '-36 36zM194.2 382.4a60 60 0 1 0 120 0 60 60 0 1 0-120 0zM709.5 382' +
        '.4a60 60 0 1 0 120 0 60 60 0 1 0-120 0z';
    return (
        <svg width="1em" height="1em" fill="currentColor" viewBox="0 0 1024 1024" style={{ verticalAlign: '-.125em' }}>
            <path d={path1} />
            <path d={path2} />
        </svg>
    );
}

const icons = {
    finish: getFinishIcon(),
    error: getErrorIcon(),
};

ReactDOM.render(
    <Steps current={1} status="error" icons={icons}>
        <Step title="Finished" description="This is a description" />
        <Step title="In Process" description="This is a description" />
        <Step title="Waiting" description="This is a description" />
    </Steps>,
    container,
);

const Icon2 = ({ type }: { type: string }) => <i className={`rcicon rcicon-${type}`} />;

ReactDOM.render(
    <Steps current={1}>
        <Step title="步骤1" icon={<Icon2 type="cloud" />} />
        <Step title="步骤2" icon="apple" />
        <Step title="步骤3" icon="github" />
    </Steps>,
    document.getElementById('__react-content'),
);

class App extends React.Component {
    state = {
        steps: [
            {
                title: '已完成',
                description: '这里是多信息的描述啊描述啊描述啊描述啊哦耶哦耶哦耶哦耶哦耶哦耶哦耶哦耶哦耶哦耶哦耶哦耶',
            },
            {
                title: '进行中',
                description: '这里是多信息的描述啊描述啊描述啊描述啊哦耶哦耶哦耶哦耶哦耶哦耶哦耶哦耶哦耶哦耶哦耶哦耶',
            },
            {
                title: '待运行',
                description: '这里是多信息的描述啊描述啊描述啊描述啊哦耶哦耶哦耶哦耶哦耶哦耶哦耶哦耶哦耶哦耶哦耶哦耶',
            },
            {
                title: '待运行',
                description: '这里是多信息的描述啊描述啊描述啊描述啊哦耶哦耶哦耶哦耶哦耶哦耶哦耶哦耶哦耶哦耶哦耶哦耶',
            },
        ],
    };

    addStep = () => {
        const { steps } = this.state;
        const newSteps = [...steps];
        newSteps.push({
            title: '待运行',
            description: '新的节点',
        });
        this.setState({ steps: newSteps });
    }

    render() {
        const { steps } = this.state;

        return (
            <div>
                <button type="button" onClick={this.addStep}>
                    Add new step
                </button>
                <Steps>
                    {steps.map((step, i) => (
                        <Step key={i} {...step} />
                    ))}
                </Steps>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('__react-content'));

ReactDOM.render(
    <Steps current={2} status="error">
        <Step title="已完成" description={description} />
        <Step title="进行中" description={description} />
        <Step title="待运行" description={description} />
        <Step title="待运行" description={description} />
    </Steps>,
    container,
);

class Demo extends React.Component {
    state = {
        current: 0,
    };

    onChange = (current: number) => {
        this.setState({ current });
    }

    render() {
        const { current } = this.state;
        const containerStyle = {
            border: '1px solid rgb(235, 237, 240)',
            marginBottom: 24,
        };

        return (
            <div>
                <Steps style={containerStyle} type="navigation" current={current} onChange={this.onChange}>
                    <Step
                        title="Step 1"
                        status="finish"
                        subTitle="剩余 00:00:05 超长隐藏"
                        description="This is a description."
                    />
                    <Step title="Step 2" status="process" description="This is a description." />
                    <Step title="Step 3" status="wait" disabled description="This is a description." />
                </Steps>
                <Steps style={containerStyle} type="navigation" current={current} onChange={this.onChange}>
                    <Step title="Step 1" status="finish" subTitle="剩余 00:00:05 超长隐藏" />
                    <Step title="Step 2" status="process" />
                    <Step title="Step 3" status="wait" />
                    <Step title="Step 3" status="wait" />
                </Steps>
            </div>
        );
    }
}

ReactDOM.render(<Demo />, container);

function generateRandomSteps() {
    const n = Math.floor(Math.random() * 3) + 3;
    const arr = [];
    for (let i = 0; i < n; i++) {
        arr.push({
            title: `步骤${i + 1}`,
        });
    }
    return arr;
}
const steps = generateRandomSteps();

class MyForm extends React.Component {
    private stepsRefs: any[];

    state = {
        currentStep: Math.floor(Math.random() * steps.length),
    };

    nextStep = () => {
        const { currentStep } = this.state;
        let s = currentStep + 1;
        if (s === steps.length) {
            s = 0;
        }
        this.setState({
            currentStep: s,
        });
    }

    render() {
        const { currentStep: cs } = this.state;
        this.stepsRefs = [];
        return (
            <form className="my-step-form">
                <div>这个demo随机生成3~6个步骤，初始随机进行到其中一个步骤</div>
                <div>当前正在执行第{cs + 1}步</div>
                <div className="my-step-container">
                    <Steps current={cs}>
                        {steps.map((s, i) => (
                            <Step
                                ref={(c: any) => {
                                    this.stepsRefs[i] = c;
                                }}
                                key={i}
                                title={s.title}
                            />
                        ))}
                    </Steps>
                </div>

                <div>
                    <button type="button" onClick={this.nextStep}>
                        下一步
                    </button>
                </div>
            </form>
        );
    }
}

ReactDOM.render(<MyForm />, container);

ReactDOM.render(
    <Steps progressDot size="small" current={1}>
        <Step title="已完成" description={description} />
        <Step title="进行中" description={description} />
        <Step title="待运行" description={description} />
        <Step title="待运行" description={description} />
        <Step title="待运行" description={description} />
    </Steps>,
    container,
);

const ControlSteps = () => {
    const [current, setCurrent] = React.useState(0);
    return (
        <Steps
            current={current}
            onChange={(val: any) => {
                setCurrent(val);
            }}
        >
            <Step title="已完成" />
            <Step title="进行中" />
            <Step title="待运行" description="Hello World!" />
            <Step title="待运行" />
        </Steps>
    );
};

ReactDOM.render(
    <div>
        <Steps current={1}>
            <Step title="已完成" />
            <Step title="进行中" />
            <Step title="待运行" />
            <Step title="待运行" />
        </Steps>
        <Steps current={1} style={{ marginTop: 40 }}>
            <Step title="已完成" description={description} />
            <Step title="进行中" subTitle="剩余 00:00:07" description={description} />
            <Step title="待运行" description={description} />
            <Step title="待运行" description={description} />
        </Steps>
        <Steps current={1} style={{ marginTop: 40 }} status="error">
            <Step title="已完成" description={description} />
            <Step title="进行中" description={description} />
            <Step title="待运行" description={description} />
            <Step title="待运行" description={description} />
        </Steps>
        <ControlSteps />
    </div>,
    container,
);

const Icon = ({ type }: { type: string }) => <i className={`rcicon rcicon-${type}`} />;

ReactDOM.render(
    <div>
        <Steps size="small" current={1}>
            <Step title="已完成" />
            <Step title="进行中" />
            <Step title="待运行" />
            <Step title="待运行" />
        </Steps>
        <Steps size="small" current={1} style={{ marginTop: 40 }}>
            <Step title="步骤1" icon={<Icon type="cloud" />} />
            <Step title="步骤2" icon="apple" />
            <Step title="步骤3" icon="github" />
        </Steps>
    </div>,
    container,
);

ReactDOM.render(
    <Steps direction="vertical">
        <Step title="已完成" description={description} />
        <Step title="进行中" description={description} />
        <Step title="待运行" description={description} />
        <Step title="待运行" description={description} />
    </Steps>,
    container,
);

ReactDOM.render(
    <Steps direction="vertical" size="small">
        <Step title="已完成" description={description} />
        <Step title="进行中" description={description} />
        <Step title="待运行" description={description} />
        <Step title="待运行" description={description} />
    </Steps>,
    container,
);
