import { DispatcherInterface } from 'dispatchr';
import { connectToStores, provideContext } from 'fluxible-addons-react';
import { Fluxible, ComponentContext } from 'fluxible';
import BaseStore = require('fluxible/addons/BaseStore');
import * as React from 'react';

interface HomeProps {
    stringValue: string;
}

class Home extends React.Component<HomeProps, any> {
    constructor(props: HomeProps) {
        super(props);
    }
}

class ExtendedStore extends BaseStore {
    constructor(public dispatcher: DispatcherInterface) {
        super(dispatcher);

        this.data = "";
    }

    static storeName = 'ExtendedStore';

    static handlers = {
        ACTION_NAME: 'actionHandler'
    };

    private data: string;

    actionHandler() {
        this.emitChange();
    }

    setData(data: string): void {
        this.data = data;
    }

    getData(): string {
        return this.data;
    }
}

// connecting Home react component to ExtendedStore
const ConnectedComponent = connectToStores(Home, [ExtendedStore], (context: ComponentContext, props: HomeProps) => {
    return {
        stringValue: context.getStore(ExtendedStore).getData(),
    };
});

const ConnectedComponentWithContext = provideContext(ConnectedComponent);
