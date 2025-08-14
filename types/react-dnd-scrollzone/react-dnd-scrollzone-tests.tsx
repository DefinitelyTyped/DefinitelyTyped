import * as React from "react";
import withScrolling, { createHorizontalStrength, createVerticalStrength } from "react-dnd-scrollzone";

// Test class component
{
    const TestClassComponent = withScrolling(class extends React.Component {});

    <TestClassComponent />;

    <TestClassComponent
        onScrollChange={(top, left) => {
            top; // $ExpectType number
            left; // $ExpectType number
        }}
    />;

    <TestClassComponent
        verticalStrength={(scrollzone, mouse) => {
            scrollzone.x; // $ExpectType number
            scrollzone.y; // $ExpectType number
            scrollzone.w; // $ExpectType number
            scrollzone.h; // $ExpectType number
            mouse.x; // $ExpectType number
            mouse.y; // $ExpectType number

            return -1;
        }}
    />;

    <TestClassComponent
        horizontalStrength={(scrollzone, mouse) => {
            scrollzone.x; // $ExpectType number
            scrollzone.y; // $ExpectType number
            scrollzone.w; // $ExpectType number
            scrollzone.h; // $ExpectType number
            mouse.x; // $ExpectType number
            mouse.y; // $ExpectType number

            return -1;
        }}
    />;

    <TestClassComponent strengthMultiplier={20} />;
}

// Test functional component
{
    const TestFnComponent = withScrolling(() => <div />);

    <TestFnComponent />;

    <TestFnComponent
        onScrollChange={(top, left) => {
            top; // $ExpectType number
            left; // $ExpectType number
        }}
    />;

    <TestFnComponent
        verticalStrength={(scrollzone, mouse) => {
            scrollzone.x; // $ExpectType number
            scrollzone.y; // $ExpectType number
            scrollzone.w; // $ExpectType number
            scrollzone.h; // $ExpectType number
            mouse.x; // $ExpectType number
            mouse.y; // $ExpectType number

            return -1;
        }}
    />;

    <TestFnComponent
        horizontalStrength={(scrollzone, mouse) => {
            scrollzone.x; // $ExpectType number
            scrollzone.y; // $ExpectType number
            scrollzone.w; // $ExpectType number
            scrollzone.h; // $ExpectType number
            mouse.x; // $ExpectType number
            mouse.y; // $ExpectType number

            return -1;
        }}
    />;

    <TestFnComponent strengthMultiplier={20} />;
}

// $ExpectType StrengthCallback
createVerticalStrength(25);

// $ExpectType StrengthCallback
createHorizontalStrength(20);
