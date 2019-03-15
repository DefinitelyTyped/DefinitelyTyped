import * as React from 'react';
import Password from 'react-better-password';

interface PasswordState {
    password: string;
}

class ReactBetterPasswordTest extends React.Component<{}, PasswordState> {
    state = {
        password: "",
    };

    handlePw = (password: string) => {
        this.setState({ password });
    }

    render() {
        const { password } = this.state;
        return (
            <Password
                className="password"
                value={password}
                onChange={this.handlePw}
                placeholder="set a password"
            />
        );
    }
}
export default ReactBetterPasswordTest;
