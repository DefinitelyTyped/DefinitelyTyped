import * as React from 'react';
import Inspector, { DomInspector, ObjectInspector, TableInspector } from 'react-inspector';

class TestInspector extends React.Component {
    render() {
        return (
            <>
                <Inspector
                    data={{ foo: 'bar' }}
                    name="test"
                    expandLevel={1}
                    expandPaths={'foo'}
                    showNonenumerable={true}
                    sortObjectKeys
                    theme={'chromeLight'}
                />
                <Inspector
                    table
                    data={{ foo: 'bar' }}
                    name="test"
                    columns={['foo']}
                    expandLevel={1}
                    expandPaths={'foo'}
                    showNonenumerable={true}
                    sortObjectKeys
                    theme={'chromeLight'}
                />
            </>
        );
    }
}

class TestObjectInspector extends React.Component {
    render() {
        return (
            <ObjectInspector
                data={{ foo: 'bar' }}
                name="test"
                expandLevel={1}
                expandPaths={'foo'}
                showNonenumerable={true}
                sortObjectKeys
                theme={'chromeLight'}
            />
        );
    }
}

class TestDomInspector extends React.Component {
    render() {
        return (
            <DomInspector
                data={{ foo: 'bar' }}
                name="test"
                expandLevel={1}
                expandPaths={'foo'}
                showNonenumerable={true}
                sortObjectKeys
                theme={'chromeLight'}
            />
        );
    }
}

class TestTableInspector extends React.Component {
    render() {
        return (
            <TableInspector
                data={{ foo: 'bar' }}
                name="test"
                columns={['foo']}
                expandLevel={1}
                expandPaths={'foo'}
                showNonenumerable={true}
                sortObjectKeys
                theme={'chromeLight'}
            />
        );
    }
}
