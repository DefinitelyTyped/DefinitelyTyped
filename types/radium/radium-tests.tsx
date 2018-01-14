import * as React from "react";
import { StyleRoot, Style } from "radium";
import * as Radium from 'radium';

@Radium
class TestComponent extends React.Component<{ a: number }> {

    render() {
        return (
            <div >
                Test with Radium
			</div>
        );
    }
}

let TestStatelessComponent = (props: { a: number }) => <div />;
TestStatelessComponent = Radium(TestStatelessComponent);

<TestStatelessComponent a={5} />


@Radium({
    userAgent: "test",
    matchMedia: window.matchMedia
})
class TestComponentWithConfig extends React.Component<{ a?: number }> {
    render() {
        return (
            <div>
                <Radium.StyleRoot >
                    <Style scopeSelector="test"
                        rules={{
                            a: {
                                background: "green"
                            },
                            body: {
                                textAlign: "center"
                            }
                        }}
                    >
                    </Style>
                    <Style scopeSelector="test"
                        rules={{
                            background: "green"
                        }}
                    >
                    </Style>
                </Radium.StyleRoot>
            </div>
        )
    }
}
<TestComponentWithConfig a={5} />

class TestComponentWithConfigInStyleRoot
    extends React.Component<{ a?: number }> {
    render() {
        return (
            <div>
                <Radium.StyleRoot radiumConfig={{
                    userAgent: "test",
                    matchMedia: window.matchMedia
                }} >
                    <Style scopeSelector="test"
                        rules={{
                            a: {
                                background: "green"
                            },
                            body: {
                                textAlign: "center"
                            }
                        }}
                    >
                    </Style>
                    <Style scopeSelector="test"
                        rules={{
                            background: "green"
                        }}
                    >
                    </Style>
                </Radium.StyleRoot>
            </div>
        )
    }
}
<TestComponentWithConfigInStyleRoot a={5} />

Radium.TestMode.enable();
