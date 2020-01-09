import * as React from 'react';
import FadeIn from 'react-fade-in';

export const _ = () => (
    <>
        <FadeIn />
        <FadeIn>
            <div>Element 1</div>
            <div>Element 2</div>
            <div>Element 3</div>
            <div>Element 4</div>
            <div>Element 5</div>
            <div>Element 6</div>
        </FadeIn>
        <FadeIn className="typescript">
            <div>Element 1</div>
            <div>Element 2</div>
            <div>Element 3</div>
            <div>Element 4</div>
            <div>Element 5</div>
            <div>Element 6</div>
        </FadeIn>
        <FadeIn delay={60}>
            <div>Element 1</div>
            <div>Element 2</div>
            <div>Element 3</div>
            <div>Element 4</div>
            <div>Element 5</div>
            <div>Element 6</div>
        </FadeIn>
        <FadeIn transitionDuration={500}>
            <div>Element 1</div>
            <div>Element 2</div>
            <div>Element 3</div>
            <div>Element 4</div>
            <div>Element 5</div>
            <div>Element 6</div>
        </FadeIn>
    </>
);
