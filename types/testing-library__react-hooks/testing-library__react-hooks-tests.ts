import { useState } from 'react';
import { renderHook, act, cleanup } from '@testing-library/react-hooks';

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
