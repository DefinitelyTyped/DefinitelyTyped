import * as React from "react";
import PageVisibility, { KnownVisibilityStates, usePageVisibility } from "react-page-visibility";

const ComponentExpectsBoolean = (props: { isVisible: boolean }) => {
    const { isVisible } = props;
    return <React.Fragment>{isVisible}</React.Fragment>;
};

const VisibilityHookTestComponent = () => {
    const isVisible = usePageVisibility();

    return <ComponentExpectsBoolean isVisible={isVisible} />;
};

const VisibilityComponentTest = () => {
    const isVisible = usePageVisibility();
    const onChangeVisibility = React.useCallback((isVisible: boolean, visibilityState: KnownVisibilityStates) => {
        return;
    }, []);

    return (
        <PageVisibility onChange={onChangeVisibility}>
            {(...props) => {
                onChangeVisibility(...props);
                return null;
            }}
        </PageVisibility>
    );
};
