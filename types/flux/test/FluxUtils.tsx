import { Dispatcher } from "flux";
import { ReduceStore, Container } from "flux/utils";
import * as React from "react";

interface Payload {
    type: string;
}

const basicDispatcher = new Dispatcher<Payload>();

// Sample Reduce Store
class CounterStore extends ReduceStore<number, any> {
    getInitialState(): number {
        return 0;
    }

    reduce(state: number, action: Payload): number {
        switch (action.type) {
            case 'increment':
                return state + 1;
            case 'square':
                return state * state;
            default:
                return state;
        }
    }
}
const Store = new CounterStore(basicDispatcher);

// Sample Flux container with Store
interface Props {
    a: string;
    b: boolean;
}

interface State {
    counter: number;
}

class CounterContainer extends React.Component<Props, State> {
    static getStores() {
        return [Store];
    }

    static a: string = "asd";

    static calculateState(prevState: State, props: Props): State {
        return {
            counter: Store.getState() - (props.b ? 0 : 1)
        };
    }

    render() {
        return <div>
            {this.state.counter}
        </div>;
    }
}

const ContainerComponentner1 = Container.create(CounterContainer, { withProps: true });
<ContainerComponentner1 a="string" b={false} />;

const ContainerComponentner2 = Container.create<Props>(CounterContainer, { withProps: true });
<ContainerComponentner2 a="string" b={false} />;

const ContainerComponentner3 = Container.create<Props, State>(CounterContainer, { withProps: true });
<ContainerComponentner2 a="string" b={false} />;

// Functional flux container with Store
const FunctionalContainerComponent = Container.createFunctional<Props, State>(
    (props) => {
        return <div>
            {props.a} {props.b}
        </div>;
    },
    () => [Store],
    (prevState) => ({ counter: Store.getState() })
);

<FunctionalContainerComponent a="string" b={true} />;
