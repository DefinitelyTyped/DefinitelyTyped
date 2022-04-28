import { build, createContextMenu, getState, select, setState } from 'tui-ts';

// $ExpectType void
build();

// $ExpectType ContextMenu
createContextMenu({
    id: 'foo',
    run: () => {},
});

// $ExpectError
createContextMenu({});

// $ExpectType Readonly<State>
getState();

// $ExpectType ContextMenu | null
select('bar');

// $ExpectError
select(1);

// $ExpectType void
setState({ foo: 'bar' });

// $ExpectType void
setState({});

// $ExpectError
setState(2);
