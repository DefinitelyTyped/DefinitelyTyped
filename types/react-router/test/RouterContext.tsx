import * as React from "react";
import { __RouterContext as RouterContext } from "react-router";
import {
    BrowserRouter as Router,
    Link,
    Route,
    RouteComponentProps
} from "react-router-dom";

const App = () => (
    <Router>
        <div>
            <ul>
                <li>
                    <Link to="/signup">SignUp Page</Link>
                </li>
            </ul>
            <Route path="/signup" component={Signup} />
            <Route path="/welcome" component={Welcome} />
        </div>
    </Router>
);

const Welcome: React.FC<RouteComponentProps> = () => (
    <h1>Welcome to this site!</h1>
);

const Signup: React.FC<RouteComponentProps> = () => (
    <div>
        <h1>Signup for this site</h1>
        <p>Just a few steps to complete this process.</p>
        <Link to="/signup/username">Get Started</Link>
        <MultiStepSignup />
    </div>
);

const steps = ["username", "password", "basic_info"];

const MultiStepSignup: React.FC = () => {
    const { history, location, match } = React.useContext(RouterContext);

    const { currentStep, currentStepIndex, isLastStep } = React.useMemo(() => {
        const currentStep = location.pathname.split("/").pop() || "";
        const currentStepIndex = steps.indexOf(currentStep);

        return {
            currentStep,
            currentStepIndex,
            isLastStep: currentStepIndex === steps.length - 1
        };
    }, [location.pathname]);

    const handleNextStep = React.useCallback(
        (event: React.FormEvent) => {
            event.preventDefault();

            if (isLastStep) {
                // submit data to api here
                history.push("/welcome");
            } else {
                // go to next step
                const nextStep = steps[currentStepIndex + 1];
                history.push(`/signup/${nextStep}`);
            }
        },
        [currentStep]
    );

    return (
        <form onSubmit={handleNextStep}>
            <Route path={`${match.path}/username`} component={UsernameStep} />
            <Route path={`${match.path}/password`} component={PasswordStep} />
            <Route
                path={`${match.path}/basic_info`}
                component={BasicInfoStep}
            />

            <button type="submit">
                {isLastStep ? "Complete" : "Next Step"}
            </button>
        </form>
    );
};

const UsernameStep: React.FC<RouteComponentProps> = () => (
    <div>
        <h2>Pick out a fun username!</h2>
        <label htmlFor="username">
            Username: <input type="text" id="usernanme" name="username" />
        </label>
    </div>
);

const PasswordStep: React.FC<RouteComponentProps> = () => (
    <div>
        <h2>Pick out a secure password!</h2>
        <label htmlFor="password">
            Username: <input type="password" id="password" name="password" />
        </label>
    </div>
);

const BasicInfoStep: React.FC<RouteComponentProps> = () => (
    <div>
        <h2>Just some basic information to finish up.</h2>
        <label htmlFor="name">
            Username: <input type="text" id="name" name="name" />
        </label>
        <label htmlFor="email">
            Username: <input type="email" id="email" name="email" />
        </label>
    </div>
);
