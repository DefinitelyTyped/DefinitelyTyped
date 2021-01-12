import { act, cleanup, renderHook } from '@testing-library/react-hooks';
import * as React from 'react';

const { useState, createContext, useContext } = React;

const useHook = (initialValue: number) => {
    const [value, setValue] = useState(initialValue);
    return { value, setValue };
};

function checkTypesWithNoInitialProps() {
    const { result, unmount, rerender } = renderHook(() => useHook(0));

    // check types
    const _result: {
        current: {
            value: number;
            setValue: (_: number) => void;
        };
    } = result;
    const _unmount: () => boolean = unmount;
    const _rerender: () => void = rerender;
}

function checkTypesWithInitialProps() {
    const { result, unmount, rerender } = renderHook(({ value }) => useHook(value), {
        initialProps: { value: 10 },
    });

    // check types
    const _result: {
        current: {
            value: number;
            setValue: (_: number) => void;
        };
    } = result;
    const _unmount: () => boolean = unmount;
    const _rerender: (_?: { value: number }) => void = rerender;
}

function checkTypesWithWrapper() {
    const TestContext = createContext<number>(10);

    const wrapper: React.FC = ({ children }) => <div>{children}</div>;

    const { result, unmount, rerender } = renderHook(() => useContext(TestContext), {
        wrapper,
    });

    // check types
    const _result: {
        current: number;
    } = result;
    const _unmount: () => boolean = unmount;
    const _rerender: (_?: { value: number }) => void = rerender;
}

function checkTypesWithInitialPropsAndWrapper() {
    const TestContext = createContext<number>(10);

    interface WrapperProps {
        value: number;
    }

    const wrapper: React.FC<WrapperProps> = ({ children, value }) => (
        <TestContext.Provider value={value}>{children}</TestContext.Provider>
    );

    const { result, unmount, rerender } = renderHook(() => useContext(TestContext), {
        wrapper,
    });

    // check types
    const _result: {
        current: number;
    } = result;
    const _unmount: () => boolean = unmount;
    const _rerender: (_?: { value: number }) => void = rerender;
}

function checkTypesWhenHookReturnsUndefined() {
    renderHook(() => {});
}

function checkTypesWithError() {
    const { result } = renderHook(() => useHook(0));

    // check types
    const _result: {
        error: Error;
    } = result;
}

async function checkTypesForWaitForNextUpdate() {
    const { waitForNextUpdate } = renderHook(() => {});

    await waitForNextUpdate();

    // check type
    const _waitForNextUpdate: () => Promise<void> = waitForNextUpdate;
}

function checkTypesWithUndefinedResult() {
    act(() => undefined);
}

function checkTypesWithVoidResult() {
    act(() => {});
}

function checkTypesWithPromiseResult() {
    act(() => Promise.resolve());
}

function checkTypesForCleanup() {
    cleanup(); // $ExpectType Promise<void>
}

async function checkWatchOptions() {
    // arrange
    const { wait, waitFor, waitForNextUpdate, waitForValueToChange } = renderHook(() => {});

    // assert : check types
    // https://github.com/testing-library/react-hooks-testing-library/blob/master/docs/api-reference.md#wait
    await wait(() => {});
    await wait(() => {}, { timeout: 10000, suppressErrors: true });

    // https://github.com/testing-library/react-hooks-testing-library/blob/master/docs/api-reference.md#waitfor
    await waitFor(() => {});
    await waitFor(() => {}, { interval: 1000, timeout: 10000, suppressErrors: true });

    // https://github.com/testing-library/react-hooks-testing-library/blob/master/docs/api-reference.md#waitfornextupdate
    await waitForNextUpdate();
    await waitForNextUpdate({ timeout: 10000 });

    // https://github.com/testing-library/react-hooks-testing-library/blob/master/docs/api-reference.md#waitforvaluetochange
    await waitForValueToChange(() => null);
    await waitForValueToChange(() => null, { interval: 1000, timeout: 10000, suppressErrors: true });
}
