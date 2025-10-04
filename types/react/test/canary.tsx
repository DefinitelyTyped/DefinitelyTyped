/// <reference types="../canary"/>

// NOTE: forward declarations for tests
declare var console: Console;
interface Console {
    log(...args: any[]): void;
}

function useCacheTest() {
    const useCacheRefresh = React.unstable_useCacheRefresh;

    const refresh = useCacheRefresh();

    function handleRefresh() {
        // @ts-expect-error -- experimental only
        refresh(() => "refresh", "initial");
        // @ts-expect-error -- experimental only
        refresh(() => "refresh");
        refresh();

        // @ts-expect-error -- experimental only
        refresh(() => "refresh", 0);

        // @ts-expect-error -- experimental only
        refresh(() => "refresh");
    }
}

function viewTransitionTests() {
    const ViewTransition = React.ViewTransition;
    const addTransitionType = React.addTransitionType;

    <ViewTransition />;
    <ViewTransition
        default="enter-slide-in exit-fade-out update-cross-fade"
        enter="slide-from-left"
        exit="slide-to-right"
        update="none"
        share="cross-fade"
    />;
    <ViewTransition name="auto" />;
    <ViewTransition name="foo" />;
    <ViewTransition
        // autocomplete should display "auto"
        name=""
        // autocomplete should display "auto" | "none"
        default=""
    />;
    <ViewTransition
        // @ts-expect-error -- Either a string or an object with at least one property.
        default={{}}
    />;
    <ViewTransition
        // autocomplete should display "default" for keys, "auto" | "none" for values
        default={{ default: "default" }}
    />;

    <ViewTransition
        onEnter={(instance, types) => {
            // $ExpectType ViewTransitionInstance
            instance;
            // $ExpectType string[]
            types;
        }}
        onExit={(instance, types) => {
            // $ExpectType ViewTransitionInstance
            instance;
            // $ExpectType string[]
            types;
        }}
        onShare={(instance, types) => {
            // $ExpectType ViewTransitionInstance
            instance;
            // $ExpectType string[]
            types;
        }}
        onUpdate={(instance, types) => {
            // $ExpectType ViewTransitionInstance
            instance;
            // $ExpectType string[]
            types;
        }}
    />;

    <ViewTransition
        ref={current => {
            if (current !== null) {
                // $ExpectType string
                current.name;
            }
        }}
    >
        <div />
    </ViewTransition>;

    <ViewTransition>
        <div />
    </ViewTransition>;

    const Null = () => null;
    <ViewTransition>
        <Null />
    </ViewTransition>;

    const Div = ({ children }: { children?: React.ReactNode }) => <div>{children}</div>;
    <ViewTransition>
        <Div />
    </ViewTransition>;

    function Component() {
        function handleNavigation() {
            React.startTransition(() => {
                // @ts-expect-error
                addTransitionType();
                // @ts-expect-error
                addTransitionType(undefined);
                addTransitionType("navigation");
            });
        }
    }
}
