import * as React from 'react';
import loadable, { lazy, loadableReady } from '@loadable/component';

const TestComponent: React.SFC<{ foo: string }> = () => <>test</>;

function defaultImportComponentLoader() {
    return new Promise<{ default: typeof TestComponent }>(resolve => resolve({ default: TestComponent }));
}

function namedImportComponentLoader() {
    return new Promise<{ name: typeof TestComponent }>(resolve => resolve({ name: TestComponent }));
}

function importComponentLoader() {
    return new Promise<typeof TestComponent>(resolve => resolve(TestComponent));
}

const lib = {
    getTestObj: () => ({ bar: 'bar', foo: 'foo' }),
};

function defaultImportLibLoader() {
    return new Promise<{ default: typeof lib }>(resolve => resolve({ default: lib }));
}

function importLibLoader() {
    return new Promise<typeof lib>(resolve => resolve(lib));
}

// loadable
{
    // Should infer props from imported component with default export
    const LoadableDefaultComponent = loadable(defaultImportComponentLoader);
    <LoadableDefaultComponent foo="test-prop" />;

    // Should infer props from imported component without default export
    const LoadableComponent = loadable(importComponentLoader);
    <LoadableComponent foo="test-prop" />;

    // Should infer props from imported component when using resolveComponent
    const LoadableResolvedComponent = loadable(namedImportComponentLoader, {
        resolveComponent: mod => mod.name,
    });

    // Should allow passing JSX element to fallback in options
    loadable(defaultImportComponentLoader, { fallback: <div>loading...</div> });
    loadable(importComponentLoader, { fallback: <div>loading...</div> });
    loadable(namedImportComponentLoader, { resolveComponent: mod => mod.name, fallback: <div>loading...</div> });

    // Should allow passing boolean to `ssr` in options
    loadable(defaultImportComponentLoader, { ssr: true });
    loadable(importComponentLoader, { ssr: true });
    loadable(namedImportComponentLoader, { resolveComponent: mod => mod.name, ssr: true });

    // Should allow passing function to `cacheKey` in options
    loadable(defaultImportComponentLoader, { cacheKey: props => props.foo });
    loadable(importComponentLoader, { cacheKey: props => props.foo });
    loadable(namedImportComponentLoader, {
        resolveComponent: mod => mod.name,
        cacheKey: (props: { foo: string }) => props.foo, // Annotation needed here for some reason?
    });

    // Should allow passing `fallback` prop to loadable component
    <LoadableComponent foo="test" fallback={<div>loading...</div>} />;
    <LoadableDefaultComponent foo="test" fallback={<div>loading...</div>} />;
    <LoadableResolvedComponent foo="test" fallback={<div>loading...</div>} />;

    // Should allow preloading
    LoadableComponent.preload();
    LoadableDefaultComponent.preload();
    LoadableResolvedComponent.preload();

    // Should allow force loading
    LoadableComponent.load().then(Component => {
        <Component foo="test" />;
    });
    LoadableDefaultComponent.load().then(Component => {
        <Component foo="test" />;
    });
    LoadableResolvedComponent.load().then(Component => {
        <Component foo="test" />;
    });
}

// lazy
{
    // Should infer props from imported component with default export
    const LazyDefaultComponent = lazy(defaultImportComponentLoader);
    <LazyDefaultComponent foo="test" />;

    // Should infer props from imported component without default export
    const LazyComponent = lazy(importComponentLoader);
    <LazyDefaultComponent foo="test" />;

    // Should allow passing fallback prop
    <LazyComponent foo="test" fallback={<div>loading...</div>} />;

    // Should allow preloading
    LazyComponent.preload();

    // Should allow force loading
    LazyComponent.load().then(Component => {
        <Component foo="test" />;
    });
}

// loadable.lib
{
    // Should infer types from module with default export and reflect them in children render prop
    const LoadableDefaultLibrary = loadable.lib(defaultImportLibLoader);
    <LoadableDefaultLibrary>{({ default: { getTestObj } }) => getTestObj().foo}</LoadableDefaultLibrary>;

    // Should infer types from module without default export and reflect them in children render prop
    const LoadableLibrary = loadable.lib(importLibLoader);
    <LoadableLibrary>{({ getTestObj }) => getTestObj().foo}</LoadableLibrary>;

    // Should allow passing fallback JSX element
    loadable.lib(importLibLoader, { fallback: <div>loading lib...</div> });

    // Should allow passing boolean to `ssr` in options
    loadable.lib(defaultImportComponentLoader, { ssr: true });

    // Should allow passing function to `cacheKey` in options
    loadable.lib(defaultImportComponentLoader, { cacheKey: (props: { foo: string }) => props.foo });

    // Should allow passing fallback prop
    <LoadableLibrary fallback={<div>Loading library...</div>}>{({ getTestObj }) => getTestObj().foo}</LoadableLibrary>;

    // Should reflect inferred types from module in ref
    const ref = React.createRef<typeof LoadableLibrary>();
    <LoadableLibrary ref={ref} />;
    ref.current!.getTestObj().foo;

    // Should allow preloading
    LoadableLibrary.preload();

    // Should allow force loading
    LoadableLibrary.load().then(Component => {
        <Component />;
    });
}

// lazy.lib
{
    // Should infer types from module with default export and reflect them in children render prop
    const LazyDefaultLibrary = lazy.lib(defaultImportLibLoader);
    <LazyDefaultLibrary>{({ default: { getTestObj } }) => getTestObj().foo}</LazyDefaultLibrary>;

    // Should infer types from module without default export and reflect them in children render prop
    const LazyLibrary = lazy.lib(importLibLoader);
    <LazyLibrary>{({ getTestObj }) => getTestObj().foo}</LazyLibrary>;

    // Should allow passing fallback prop
    <LazyLibrary fallback={<div>Loading library...</div>}>{({ getTestObj }) => getTestObj().foo}</LazyLibrary>;

    // Should reflect inferred types from module in ref
    const ref = React.createRef<typeof LazyLibrary>();
    <LazyLibrary ref={ref} />;
    ref.current!.getTestObj().foo;

    // Should allow preloading
    LazyDefaultLibrary.preload();

    // Should allow force loading
    LazyDefaultLibrary.load().then(Component => {
        <Component />;
    });
}

// loadableReady
{
    // Should allow passing callback argument
    loadableReady(() => {});

    // Should return a promise
    loadableReady().then(() => {});

    // Should allow passing options with namespace
    loadableReady(() => {}, { namespace: 'foo' });
}
