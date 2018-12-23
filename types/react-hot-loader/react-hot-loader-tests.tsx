import * as React from "react";
import { AppContainer, hot, ReactComponent } from "react-hot-loader";

declare function describe(desc: string, f: () => void): void;
declare function it(desc: string, f: () => void): void;

it("Using AppContainer", () => {
    interface ErrorReporterProps {
        error: any;
    }

    class ErrorReporterComponent extends React.Component<ErrorReporterProps> {
        render() {
            return <p>{this.props.error.message}</p>;
        }
    }

    const DummyComponent = () => <p>Dummy component</p>;
    const ErrorReporter = ({ error }: ErrorReporterProps) => <ErrorReporterComponent error={error} />;

    class AppContainerTest extends React.Component {
        render() {
            return (
                <div>
                    <AppContainer errorReporter={ErrorReporterComponent}>
                        <DummyComponent />
                    </AppContainer>
                </div>
            );
        }
    }
});

it("Using hot", () => {
    interface Props {
        name: string;
    }

    class Foo extends React.Component<Props> {
        render(): JSX.Element {
            return <div>Foo</div>;
        }
    }
    const FooSFC = (props: { surname: string }) => {
        return <div />;
    };

    const Bar = hot(module)(Foo);
    const BarSFC = hot(module)(FooSFC);

    const testRender = () => {
        return (
            <>
                <Bar name="Something" />
                <BarSFC surname="SomethingSFC" />
            </>
        );
    };
});
