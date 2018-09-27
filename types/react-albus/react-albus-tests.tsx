import * as React from "react";
import { Wizard, Step, Steps, withWizard } from "react-albus";

const Example = () => (
    <Wizard
        basename="path"
        onNext={wiz => {
            wiz.go(0);
            const location = wiz.history.location;
            wiz.next();
            wiz.previous();
            wiz.push("merlin");
            wiz.replace(wiz.step.id);
            wiz.steps.map(step => {
                wiz.push(step.id);
            });
        }}
        render={wiz => (
            <Steps>
                <Step
                    id="merlin"
                    render={() => (
                        <div>
                            <h1>Merlin</h1>
                            <button onClick={() => wiz.next()}>Next</button>
                        </div>
                    )}
                />
                <Step
                    id="gandalf"
                    render={stepWiz => (
                        <div>
                            <h1>Gandalf</h1>
                            <button onClick={() => stepWiz.next()}>Next</button>
                            <button onClick={() => stepWiz.previous()}>
                                Previous
                            </button>
                        </div>
                    )}
                />
                <Step id="dumbledore">
                    {({ previous, next }) => (
                        <div>
                            <h1>Dumbledore</h1>
                            <button onClick={previous}>Previous</button>
                            <button onClick={next}>Next</button>
                        </div>
                    )}
                </Step>
                <Step id="hermione">
                    <div>
                        <h1>Hermoine</h1>
                        <NextButton label="Next" />
                    </div>
                </Step>
                <Step id="harry">
                    <div>
                        <h1>Harry</h1>
                    </div>
                </Step>
            </Steps>
        )}
    />
);

export const NextButton = withWizard<{ label: string }>(props => {
    const { wizard, label } = props;
    return <button onClick={() => wizard.next()}>{label}</button>;
});
