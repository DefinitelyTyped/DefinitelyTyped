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
    static getStores(): Container.StoresList {
        return [Store];
    }

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

const ContainerComponent1 = Container.create(CounterContainer, { withProps: true });
<ContainerComponent1 a="string" b={false} />;

const ContainerComponent2 = Container.create<Props>(CounterContainer, { withProps: true });
<ContainerComponent2 a="string" b={false} />;

const ContainerComponent3 = Container.create<Props, State>(CounterContainer, { withProps: true });
<ContainerComponent3 a="string" b={false} />;

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
