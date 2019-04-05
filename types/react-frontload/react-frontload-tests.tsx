import * as React from 'react';
import * as ReactDOMServer from 'react-dom/server';
import { frontloadConnect, frontloadServerRender, Frontload } from 'react-frontload';

interface MainProps {
    testStringProp: string;
}

class Main extends React.Component<MainProps> {
    render() {
        return <div>{this.props.testStringProp}</div>;
    }
}

const frontload = async (props: MainProps) => {
    await new Promise(resolve => {
        setTimeout(resolve, 1000);
    });
};

const FrontloadedMain = frontloadConnect(
    frontload,
    { noServerRender: false, onMount: false, onUpdate: false },
)(Main);

interface AppProps {
    renderCase: string;
}

const App = ({ renderCase }: AppProps) => {
    return (
        <Frontload noServerRender={false}>
            <Main testStringProp={'Hello, World!'} />
        </Frontload>
    );
};

(async () => {
    const htmlString: string = await frontloadServerRender(dryRun =>
        ReactDOMServer.renderToString(<App renderCase={dryRun ? 'Dry run true case' : 'Dry run false case'} />),
    );
})();
