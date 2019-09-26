import * as React from "react";
import Typist from "react-typist";

class ReactTypist extends React.Component {
    state = {
        renderMsg: false
    };

    onHeaderTyped = () => {
        this.setState({ renderMsg: true });
    }

    render() {
        const docs = "//github.com/jstejada/react-typist";
        return (
            <div className="TypistExample">
                <Typist
                    className="TypistExample-header"
                    avgTypingDelay={40}
                    startDelay={2000}
                    onTypingDone={this.onHeaderTyped}
                >
                    <a href={docs}>React Typist</a>
                </Typist>
                <div className="TypistExample-content">
                    {this.state.renderMsg ? (
                        <Typist
                            className="TypistExample-message"
                            cursor={{ hideWhenDone: true }}
                        >
                            * Easy to style
                            <Typist.Delay ms={1250} />
                            <br />
                            * Easy to customize
                            <Typist.Delay ms={1250} />
                            <br />
                            * Easy to use backp
                            <Typist.Delay ms={500} />
                            sace
                            <Typist.Backspace count={5} delay={1000} />
                            <Typist.Delay ms={750} />
                            space
                            <Typist.Delay ms={1250} />
                            <br />
                            <span>
                                *{" "}
                                <a href={docs} className="flash">
                                    docs
                                </a>
                            </span>
                            <br />
                            {""}
                        </Typist>
                    ) : null}
                </div>
            </div>
        );
    }
}
