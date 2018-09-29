import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Password from 'react-better-password';

interface PasswordProps {
    password: string
}

class ReactBetterPassword extends React.Component<{}, PasswordProps>{
    public state = {
        password: "",
    };

    public handlePw = (password: string) => {
        this.setState({ password });
    };

    public render() {
        const { password } = this.state;
        return (
            <Password
                className="password"
                value={this.state.password}
                onChange={this.handlePw}
                placeholder="set a password"
            />
        )
    }
}
export default ReactBetterPassword;

ReactDOM.render(<ReactBetterPassword />, document.getElementById('app'));