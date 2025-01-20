import * as React from "react";
import ReactUserTour, { TourProps, TourStep } from "react-user-tour";

const requiredProps: TourProps = {
    active: true,
    step: 1,
    onNext: (step) => {
        // $ExpectedType number
        step;
    },
    onBack: (step) => {
        // $ExpectedType number
        step;
    },
    onCancel: () => {},
    steps: [
        {
            step: 1,
            selector: ".MyClass",
            title: <div>React User Tour</div>,
            body: <div>Provide a simple guided tour around a website utilizing css selectors.</div>,
            position: "bottom",
        },
    ],
};

<ReactUserTour {...requiredProps} />;

// style
{
    <ReactUserTour
        {...requiredProps}
        style={{ backgroundColor: "#fff" }}
    />;

    <ReactUserTour
        {...requiredProps}
        // @ts-expect-error - props.style.transform is not allowed.
        style={{ transform: "none" }}
    />;
}

<ReactUserTour
    {...requiredProps}
    containerStyle={{ backgroundColor: "#fff" }}
/>;

<ReactUserTour
    {...requiredProps}
    buttonStyle={{ backgroundColor: "#fff" }}
/>;

<ReactUserTour
    {...requiredProps}
    buttonContainerStyle={{ backgroundColor: "#fff" }}
/>;

<ReactUserTour
    {...requiredProps}
    arrow={(props) => {
        // $ExpectedType string | undefined
        props.position;
        // $ExpectedType number | undefined
        props.width;
        // $ExpectedType number | undefined
        props.height;
        // $ExpectedType number | undefined
        props.size;
        // $ExpectedType string | undefined
        props.color;
        return null;
    }}
/>;

<ReactUserTour
    {...requiredProps}
    arrowSize={10}
/>;

<ReactUserTour
    {...requiredProps}
    arrowColor="#000"
/>;

<ReactUserTour
    {...requiredProps}
    nextButtonText="label"
/>;

<ReactUserTour
    {...requiredProps}
    backButtonText="label"
/>;

<ReactUserTour
    {...requiredProps}
    doneButtonText="label"
/>;

<ReactUserTour
    {...requiredProps}
    closeButtonText="label"
/>;

<ReactUserTour
    {...requiredProps}
    hideButtons
/>;

<ReactUserTour
    {...requiredProps}
    hideClose
/>;
