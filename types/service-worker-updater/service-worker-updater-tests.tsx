import * as React from 'react';
import { useSWUpdateChecker, withSWUpdateChecker, InjectedUpdateProps } from 'service-worker-updater';

const HookExample: React.FC = () => {
    const [hasUpdate, updateHandler] = useSWUpdateChecker();

    if (hasUpdate) {
        return <button type="button" onClick={updateHandler}>update</button>;
    } else {
        return null;
    }
};

interface HOCExampleProps extends InjectedUpdateProps {
    n: number;
}

class HOCExample extends React.Component<HOCExampleProps> {
    render() {
        const { n, hasUpdate, updateHandler } = this.props;
        if (hasUpdate) {
            return <button type="button" onClick={updateHandler}>update</button>;
        } else {
            return <span>{`n is ${n}`}</span>;
        }
    }
}

const DecoratedComponent = withSWUpdateChecker(HOCExample);

const Demo: React.FC = () => (<DecoratedComponent n={45} />);
