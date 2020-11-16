import * as React from 'react';
import CustomScroll from 'react-custom-scroll';

const onScrollStub = () => 1;
export const _ = () => (
    <>
        <CustomScroll>
            <div>Test content</div>
            <div>Test content</div>
        </CustomScroll>
        ,
        <CustomScroll
            heightRelativeToParent="50%"
            allowOuterScroll={false}
            flex={2}
            onScoll={onScrollStub}
            addScrolledClass={true}
            freezePosition={false}
            minScrollHandleHeight={50}
            rtl={false}
            scrollTo={20}
            keepAtBottom={false}
        >
            <div>Test content</div>
            <div>Test content</div>
        </CustomScroll>
        ,
    </>
);
